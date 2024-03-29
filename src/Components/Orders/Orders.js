import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Orders.css'
import {ordersDecrement, ordersIncrement, removeItemFromOrders} from "../../Redux/Actions";
import {Link} from "react-router-dom";

const Orders = () => {
    const orders = useSelector(state => state.orders)
    const dispatch = useDispatch()


    let totalPrice = orders.reduce((initialValue, item) => {
        return initialValue + item.bonusPrice * item.quantity
    }, 0)

    return (
        <div className='pt-5'>
            <div className='container mb-2' style={{paddingBottom: "100px"}}>
                <div className='orders bg-white px-4 pb-4'>
                    {orders.length === 0 ? (
                        <h1>You haven't ordered any products yet</h1>
                    ) : (
                        orders.map((item, index) => {
                            if (index === 0) {
                                return (
                                    <div>
                                        <div className='d-flex justify-content-between'>
                                            <h2 className='pt-4'>
                                                Orders ({orders.length})
                                            </h2>
                                            <h4 className='pt-4 fw-normal d-none d-md-block'>
                                                Total price: <span className='fw-bolder'>{totalPrice}$</span>
                                            </h4>
                                        </div>
                                        <div className='row d-flex py-4'>
                                            <div className='orders_img col-12 col-md-2 text-center'>
                                                <img src={item.image} alt={item.model}/>
                                            </div>
                                            <div className='ps-md-3 ps-0 mt-3 mt-md-0 col-12 col-md-4'>
                                                <h5>Smartphones with multiple colors, for men and ladies</h5>
                                                <span
                                                    className='text-secondary me-2 text-capitalize'>Type: {item.category},</span>
                                                <span className='text-secondary me-2'>Color: blue,</span>
                                                <span
                                                    className='text-secondary me-2 text-capitalize'>Material: {item.feature}</span>
                                                <p className='text-secondary text-capitalize'>Model: {item.model}</p>
                                                <div className='orders_buttons'>
                                                    <button className='btn btn-outline-danger me-3 px-4 py-1'
                                                            onClick={() => dispatch(removeItemFromOrders(item))}
                                                            type='button' style={{cursor: "pointer"}}>
                                                        Remove
                                                    </button>
                                                    <button className='btn btn-outline-primary px-4 py-1'
                                                            type='button' style={{cursor: "pointer"}}>
                                                        Save for later
                                                    </button>
                                                </div>
                                            </div>
                                            <div
                                                className='offset-md-4 mt-3 mt-md-0 col-md-2 col-6 d-flex d-md-block justify-content-between align-items-center text-md-end'>
                                                <h5>${item.bonusPrice * item.quantity}</h5>
                                                <div
                                                    className='orders_quantity d-flex justify-content-center align-items-center '>
                                                    <div
                                                        className='orders_quantity-plus d-flex justify-content-center align-items-center px-3 px-md-0 py-2 me-3'
                                                        onClick={() => dispatch(ordersIncrement(item))}
                                                    >
                                                        <i className="bi bi-plus"></i>
                                                    </div>
                                                    <span className='me-3 text-center'>{item.quantity}</span>
                                                    <div
                                                        className='orders_quantity-plus d-flex justify-content-center align-items-center px-3 px-md-0 ms-1'
                                                        onClick={() => dispatch(ordersDecrement(item))}
                                                    >
                                                        <i className='bi bi-dash'></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='text-secondary my-1'/>
                                    </div>
                                )
                            } else {
                                return (
                                    <div>
                                        <div className='row d-flex py-4'>
                                            <div className='orders_img col-12 col-md-2 text-center'>
                                                <img src={item.image} alt={item.model}/>
                                            </div>
                                            <div className='ps-md-3 ps-0 mt-3 mt-md-0 col-12 col-md-4'>
                                                <h5>Smartphones with multiple colors, for men and ladies</h5>
                                                <span
                                                    className='text-secondary me-2 text-capitalize'>Type: {item.category},</span>
                                                <span className='text-secondary me-2'>Color: blue,</span>
                                                <span
                                                    className='text-secondary me-2 text-capitalize'>Material: {item.feature}</span>
                                                <p className='text-secondary text-capitalize'>Model: {item.model}</p>
                                                <div className='orders_buttons'>
                                                    <button className='btn btn-outline-danger me-3 px-4 py-1'
                                                            onClick={() => dispatch(removeItemFromOrders(item))}
                                                            type='button' style={{cursor: "pointer"}}>
                                                        Remove
                                                    </button>
                                                    <button className='btn btn-outline-primary px-4 py-1'
                                                            type='button' style={{cursor: "pointer"}}>
                                                        Save for later
                                                    </button>
                                                </div>
                                            </div>
                                            <div
                                                className='offset-md-4 mt-3 mt-md-0 col-md-2 col-6 d-flex d-md-block justify-content-between align-items-center text-md-end'>
                                                <h5>${item.bonusPrice * item.quantity}</h5>
                                                <div
                                                    className='orders_quantity d-flex justify-content-center align-items-center '>
                                                    <div
                                                        className='orders_quantity-plus d-flex justify-content-center align-items-center px-3 px-md-0 py-2 me-3'
                                                        onClick={() => dispatch(ordersIncrement(item))}
                                                    >
                                                        <i className="bi bi-plus"></i>
                                                    </div>
                                                    <span className='me-3 text-center'>{item.quantity}</span>
                                                    <div
                                                        className='orders_quantity-plus d-flex justify-content-center align-items-center px-3 px-md-0 ms-1'
                                                        onClick={() => dispatch(ordersDecrement(item))}
                                                    >
                                                        <i className='bi bi-dash'></i>
                                                    </div>
                                                </div>
                                            </div>
                                            {orders.length - 1 === index ? (
                                                <h4 className='pt-4 fw-normal d-block d-md-none'>
                                                    Total price: <span className='fw-bolder'>{totalPrice}$</span>
                                                </h4>
                                            ): null}
                                        </div>
                                        <hr className='text-secondary my-1'/>
                                    </div>
                                )
                            }
                        })
                    )}
                    <Link to={'/'} className='btn btn-primary pe-5 ps-3  mt-3' style={{cursor: "pointer"}}>
                        <i className="bi bi-arrow-left me-2"></i>
                        Back to shop
                    </Link>
                </div>
            </div>
        </div>
    )

}
export default Orders;