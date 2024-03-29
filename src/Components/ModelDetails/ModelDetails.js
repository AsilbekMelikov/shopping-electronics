import React, {useEffect, useRef, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {smartphonesDetails} from "../../Redux/Actions";
import './ModelDetails.css'
import model from "../../Pages/Model";

const ModelDetails = () => {

    let {id} = useParams()
    const dispatch = useDispatch()
    const smartPhoneDetails = useSelector(state => state.smartphoneDetails)
    const modelSmartphones = useSelector(state => state.smartphones)

    useEffect(() => {
        fetch(`https://weapon-datas-1.onrender.com/filters?id=${id}`)
            .then(res => res.json())
            .then(data => dispatch(smartphonesDetails(data)))
    }, [id]);



    return (
        smartPhoneDetails.map((item) => {
            return (
                <>
                    <div className='pt-5 mb-4 pb-md-5'>
                        <div className='container bg-white models'>
                            <div className='row'>
                                <div className='col-12 col-md-4 p-3'>
                                    <div className='py-3 border text-center models_image'>
                                        <img src={item.image} id='imageSource' alt={item.model}/>
                                    </div>
                                    <div className='models_small-images mt-3 d-flex justify-content-between'>
                                        <img src={item.smallImage1} onClick={e => {
                                            const img = document.querySelector('#imageSource')
                                            return img.src = e.target.src
                                        }} alt={item.model}/>
                                        <img src={item.smallImage2} onClick={e => {
                                            const img = document.querySelector('#imageSource')
                                            return img.src = e.target.src
                                        }} alt={item.model}/>
                                        <img src={item.smallImage3} onClick={e => {
                                            const img = document.querySelector('#imageSource')
                                            return img.src = e.target.src
                                        }} alt={item.model}/>
                                        <img src={item.smallImage4} onClick={e => {
                                            const img = document.querySelector('#imageSource')
                                            return img.src = e.target.src
                                        }} alt={item.model}/>
                                        <img src={item.smallImage5} onClick={e => {
                                            const img = document.querySelector('#imageSource')
                                            return img.src = e.target.src
                                        }} alt={item.model}/>
                                        <img src={item.smallImage6} onClick={e => {
                                            const img = document.querySelector('#imageSource')
                                            return img.src = e.target.src
                                        }} alt={item.model}/>
                                    </div>
                                </div>
                                <div className='col-12 col-md-8 px-3 pe-md-3'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='pt-1'>
                                        <span className='d-flex align-items-center' style={{color: "#00B517"}}>
                                           <i className="bi bi-bag-check-fill me-2 py-2" style={{fontSize: "18px"}}></i>
                                            In stock
                                        </span>
                                            <h5 className='text-capitalize'>
                                                {item.model} {item.category}
                                            </h5>
                                        </div>
                                        <span className='text-primary d-flex align-items-top'>
                                        <img src='/Assets/icons/favorite_border.svg' className='me-2'
                                             style={{width: "20px", cursor: "pointer"}} alt='favourite'/>
                                        <span style={{fontWeight: "500"}}>Save for later</span>
                                    </span>
                                    </div>
                                    <ul className='d-flex align-items-center ps-0 mt-md-3 mt-1 models-lists'>
                                        <li className='stars list-unstyled me-5'>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <span className='ms-2 align-middle' style={{color: "#FF9017"}}>7.5</span>
                                        </li>
                                        <li className='me-5'>
                                            <i className="bi bi-chat-left-text me-2"></i>
                                            <span>32 reviews</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-cart-check me-2" style={{fontSize: "18px"}}></i>
                                            <span>154 sold</span>
                                        </li>
                                    </ul>
                                    <div
                                        className='col-12 d-flex model-prices justify-content-between justify-content-sm-start px-3 px-md-4 pt-3'>
                                        <div className='col-4'>
                                            <h5 className='mb-0'>${item.realPrice}</h5>
                                            <p><small>50-100 pcs</small></p>
                                        </div>
                                        <span className='horizontal-line'></span>
                                        <div className='col-4'>
                                            <h5 className='mb-0'>${item.bonusPrice}</h5>
                                            <p><small>100-700 pcs</small></p>
                                        </div>
                                        <span className='horizontal-line'></span>
                                        <div>
                                            <h5 className='mb-0'>${item.discountPrice}</h5>
                                            <p><small>700+ pcs</small></p>
                                        </div>
                                    </div>
                                    <div className='models-info ps-3 mb-4'>
                                        <div className='d-flex pt-3 row'>
                                            <p className='mb-0 col-6 col-md-4 text-secondary'>Price:</p>
                                            <p className='mb-0 col-6 col-md-4'>Negotiable</p>
                                        </div>
                                        <hr className='text-secondary'/>
                                        <div className='d-flex row'>
                                            <p className='col-6 col-md-4 text-secondary mb-2'>Model:</p>
                                            <p className='col-6 col-md-8 mb-2'>{item.model.charAt(0).toUpperCase() + item.model.slice(1)}</p>
                                            <p className='col-6 col-md-4 text-secondary mb-2'>Feature:</p>
                                            <p className='col-6 col-md-8 mb-2'>{item.feature.charAt(0).toUpperCase() + item.feature.slice(1)}</p>
                                            <p className='col-6 col-md-4 mb-0 text-secondary'>Design:</p>
                                            <p className='col-6 col-md-8 mb-0'>Modern nice</p>
                                        </div>
                                        <hr className='text-secondary'/>
                                        <div className='d-flex row'>
                                            <p className='col-6 col-md-4 text-secondary mb-2'>Customization:</p>
                                            <p className='col-6 col-md-3 mb-2'>Customized logo and design custom
                                                packages</p>
                                            <div className='w-100'></div>
                                            <p className='col-6 col-md-4 text-secondary mb-2'>Protection:</p>
                                            <p className='col-6 col-md-8 mb-2'>Refund policy</p>
                                            <p className='col-6 col-md-4 text-secondary mb-0'>Warranty:</p>
                                            <p className='col-6 col-md-8 mb-0'>2 years full warranty</p>
                                        </div>
                                        <hr className='text-secondary'/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <h2 className='d-md-none d-block mb-4 mb-md-0'>Similar products</h2>
                    <div className='d-flex overflow-auto d-md-none'>
                        {modelSmartphones.filter(s => s.model === item.model).map(model => (
                            <div className='d-flex me-3 mb-5'>
                                <div className='card' style={{width: '220px'}}>
                                    <img src={model.image} className='p-2' alt={model.image}/>
                                    <hr className='text-secondary mt-1 mb-0'/>
                                    <div className='card-body'>
                                        <h5 className='card-title'>${item.bonusPrice}</h5>
                                        <p className='card-text text-secondary text-capitalize mb-0'>Model: {model.model}</p>
                                        <p className='card-text text-secondary text-capitalize'>Feature: {model.feature}</p>
                                        <Link to={`/model/${model.id}`} className='btn btn-outline-primary' style={{cursor:'pointer'}}>See more</Link>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </>
            )
        })
    );
}

export default ModelDetails;