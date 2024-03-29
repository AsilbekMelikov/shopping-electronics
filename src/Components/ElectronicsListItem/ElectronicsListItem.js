import React, {useState} from 'react';
import './ElectronicsListItem.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeItemFromOrders, smartphoneOrders} from "../../Redux/Actions";

const ElectronicsListItem = (props) => {
    const dispatch = useDispatch()

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [totalStars, setTotalStars] = useState(5)
    const [isFavourite, setFavourite] = useState(false)

    const {realPrice, bonusPrice, image, camera, model ,id, feature, category} = props


    const handleClick = () => {
        if (isFavourite) {
            dispatch(removeItemFromOrders({id}))
            setFavourite((prev) => !prev)
            console.log('asilbek')
        }
        else {
            dispatch(smartphoneOrders({id, image, bonusPrice, feature, model, category}))
            setFavourite((prev) => !prev)
            console.log('123')
        }
    }

    return (
        <div className='card'>
            <img src={image} className='card-img-top py-4' alt={model}/>
            <hr className='text-secondary mb-0' />
            <div className='card-body'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h5 className='card-title d-inline-block me-2'><strong>${bonusPrice}</strong></h5>
                        <span className='text-secondary text-decoration-line-through'>${realPrice}.00</span>
                    </div>
                    <span className='favourite-icon py-1 px-2'>
                        {isFavourite ? (
                            <i className='bi bi-heart-fill liked'
                               onClick={handleClick}>
                            </i>
                        ): (
                            <i className='bi bi-heart-fill disliked'
                               onClick={handleClick}>
                            </i>
                        )}
                    </span>
                </div>
                <div className='stars mt-0 mb-2'>
                    {[...Array(totalStars)].map((item, index) => {
                        const currentRating = index + 1

                        return (
                            <button type='button' key={currentRating}
                                    onClick={() => setRating(currentRating)}
                                    onMouseEnter={() => setHover(currentRating)}
                                    onMouseLeave={() => setHover(rating)}
                            >
                                <i className={`bi bi-star-fill ${currentRating <= (hover || rating) ? 'star-filled' : 'star-unfilled'}`}></i>
                            </button>
                        )
                    })}
                    <span className='ms-2 align-middle' style={{color:"#FF9017"}}>{(hover || rating) * 1}.0</span>
                </div>
                <p className='card-text mb-0 text-capitalize'>Model - {model}</p>
                <p className='card-text mb-0'>GoPro HERO6 4K Action</p>
                <p className='card-text text-capitalize'>Feature - {feature}</p>
                <Link to={`/model/${id}`} className='btn btn-outline-primary'>See more</Link>
            </div>
        </div>
    );
}

export default ElectronicsListItem;