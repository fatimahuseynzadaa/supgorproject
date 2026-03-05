import {Link } from "react-router-dom"
import { CartProvider, useCart } from "react-use-cart";
import AddToCartBtn from "../utils/addTocart";
import { useSelector } from "react-redux";
const ProductCards = ({ product }) => {
    const { title, price, discountedPrice, image, rating,description} = product
     const { addItem,  isEmpty } = useCart();

    return (

         <Link to={`/products/${product.id}`} className="col-12 col-md-3 mb-4" >
            <div className="product-card">
                <div className="product-image">
                    <span className="badge">
                        {Math.round(((price - discountedPrice) / price) * 100)}%
                    </span>
                    <div className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <img src={image} alt={title} className="img-fluid" />
                </div>

                <div className="product-info">
                    <div className="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        {/* <span>{rating.rate}</span> */}
                    </div>
                    <h3 className="title">{title}</h3>
                    <p>{description}</p>
                    <div className="price">
                        <span className="current">${discountedPrice}</span>
                        <span className="old">${price}</span>
                        
                    </div>
                  {/* <Link to="/basket" onClick={() => addItem(product)} className="add-to-cart-btn">
                        Add to Cart
                    </Link> */}
                    <AddToCartBtn product={product} className="add-to-cart-btn" />
                      
                </div>

            </div>
        </Link>
    
    )
}

export default ProductCards
