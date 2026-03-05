import { useParams } from "react-router-dom";
import products from "../data/products";
import "../assets/css/productDetails.css"
import AddToCartBtn from "../utils/addTocart";

const ProductDetails = () => {
    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return <h2 className="text-center mt-5">Product not found</h2>;
    }

    const {
        title,
        price,
        discountedPrice,
        image,
        rating,
        description,
        category
    } = product;
    

    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-5">
                    <img src={image} alt={title} className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-7 detail-info">
                    <h1 className="detail-title">{title}</h1>

                    <div className="detail-rating mb-2">
                        <i className="fa-solid fa-star text-warning"></i>
                        <span className="ms-2">{rating.rate} / 5</span>
                    </div>

                    <p className="text-muted">{description}</p>

                    <h4 className="discounted-price">
                        ${discountedPrice}
                        <span className="text-decoration-line-through text-muted fs-6 ms-2">
                            ${price}
                        </span>
                    </h4>
                    <div className="info-product">
                        <i class="fa-solid fa-cart-shopping"></i> <span>this product has been added to 5 people's carts</span>
                    </div>
                    <div className="info-product2">
                        <i class="fa-regular fa-truck"></i> <span>You can receive the package between   <strong>September 03-Semptember 05</strong></span>
                    </div>

                    <p className="mt-3">
                        <strong>Category:</strong> {category}
                    </p>

                    <div className="add-btn-area d-flex gap-3">
                        <div className="count-area">
                            <span>-</span>1 <span>+</span>
                        </div>
                        {/* <button className="add-btn">
                            Add to Cart
                        </button> */}
                        <AddToCartBtn product={product} className="add-btn" />
                    </div>

                    <div className="more-action d-flex  gap-5 mt-4">
                        <div className="wish">
                               <i class="fa-regular fa-heart"></i>
                               Add to wishlist
                        </div>
                        <div className="compare">
                             <i class="fa-solid fa-code-compare"></i>
                             Compare

                        </div>
                     
                    </div>


                </div>
               
            </div>
        </div>
    );
};

export default ProductDetails;
