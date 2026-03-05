import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addProduct, setProducts } from '../../../tools/actions/productAction';

const ProductAdd = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [discountedPrice, setDiscountedPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categories = useSelector(state => state.category.all);
    const addProductFunc = (e) => {
        e.preventDefault();

       Swal.fire({
            title: "Are you sure?",
            text: "Product will be added!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add it!"
        }).then((result) => {

            if (result.isConfirmed) {

                const newProduct = {
                    id: crypto.randomUUID(),
                    title: title.trim(),
                    price: Number(price),
                    discountedPrice: Number(discountedPrice),
                    description: description.trim(),
                    category,
                    image,
                    rating: { rate: Number(rating) }
                };

                dispatch(addProduct(newProduct));

                Swal.fire({
                    title: "Added!",
                    text: "Product successfully added.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });

                navigate('/dashboard/product');
            }
        });
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className="my-5">Add Product</h1>

                <div className="col-6">
                    <form onSubmit={addProductFunc}>

                        <div className="mb-3">
                            <label>Title</label>
                            <input value={title} onChange={e => setTitle(e.target.value)} required className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label>Price</label>
                            <input type="number" value={price} onChange={e => setPrice(e.target.value)} required className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label>Discounted Price</label>
                            <input type="number" value={discountedPrice} onChange={e => setDiscountedPrice(e.target.value)} className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label>Description</label>
                            <textarea value={description} onChange={e => setDescription(e.target.value)} className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label>Category</label>
                            <select value={category} onChange={e => setCategory(e.target.value)} required className="form-control">
                                <option value="">Select Category</option>
                                {categories.map(cat => (
                                    <option key={cat.value} value={cat.value}>
                                        {cat.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label>Image</label>
                            <input value={image} onChange={e => setImage(e.target.value)} required className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label>Rating</label>
                            <input type="number" value={rating} onChange={e => setRating(e.target.value)} className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-dark">Add</button>

                    </form>
                </div>
            </div>

        </>
    )
}

export default ProductAdd