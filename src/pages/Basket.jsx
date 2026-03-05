import React from 'react';
import { CartProvider, useCart } from "react-use-cart";
import emptyCart from "../assets/images/empty1.webp"
import emptyCart2 from "../assets/images/empty2.gif"
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

const Basket = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        totalItems,
        cartTotal
    } = useCart();

    const handleRemoveItem = (item) => {
        removeItem(item.id);
        toast.success(`${item.title} removed from cart!`, {
            position: "top-right",
            autoClose: 2000,
            style: {
                backgroundColor: "#064C50",
                color: "#BCEA69",
            },
        });
    };
    return (
        <>
            {isEmpty ? <div className=' d-flex align-items-center justify-content-center mt-4'>
                <img src={emptyCart} alt="emtycart" width={500} />
            </div> : <div className="basket-container container py-5">
                <h2 className="basket-title">Shopping Cart</h2>
                <div className="table-responsive shadow-sm rounded-4">
                    <table className="table basket-table align-middle">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col" className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, count) => (
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="product-img-wrapper">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                            <div className="product-info">
                                                <h6 className="mb-0">{item.title}</h6>
                                                <small className="text-muted">{item.category}</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="fw-bold">{item.discountedPrice ? item.discountedPrice : item.price}</td>
                                    <td>
                                        <div className="quantity-control">
                                            <button className="qty-btn" onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}>-</button>
                                            <span className="qty-value">{item.quantity}</span>
                                            <button className="qty-btn" onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>+</button>
                                        </div>
                                    </td>
                                    <td className="fw-bold text-success">{(item.discountedPrice ? item.discountedPrice * item.quantity : item.price * item.quantity).toFixed(2)}</td>
                                    <td className="text-center">
                                        <button className="delete-btn" onClick={() => handleRemoveItem(item)} >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                <div className="basket-summary mt-4 p-4 shadow-sm rounded-4 bg-white ms-auto" style={{ maxWidth: '350px' }}>
                    <div className="d-flex justify-content-between mb-2">
                        <span>Subtotal:</span>
                        <span className="fw-bold">{cartTotal.toFixed(2)} </span>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                        <span className="h5">Total:</span>
                        <span className="h5 text-primary fw-bold">{cartTotal.toFixed(2)}</span>
                    </div>
                    <button className="btn btn-primary w-100 py-2 fw-bold"
                        style={{
                            backgroundColor: "#BCEA69",
                            border: "none",
                            color: "#000"
                        }}
                    >Checkout</button>
                </div>
            </div>}

        </>

    );
};

export default Basket;