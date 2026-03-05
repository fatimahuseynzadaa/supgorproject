import React from 'react';
import { useCart } from "react-use-cart";
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

const AddToCartBtn = ({ product, className = "add-btn" }) => {
    const { addItem } = useCart();
    const handleAdd = (e) => {
        e.preventDefault();
        addItem(product);
        toast.success(`${product.title} added to cart!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,

            style: {
                backgroundColor: "#064C50",
                color: "#BCEA69",
                fontWeight: "bold"
            },
        });
    };

    return (
        <button
            className={className}
            onClick={handleAdd}
        >
            Add to Cart
        </button>



    );
};

export default AddToCartBtn;