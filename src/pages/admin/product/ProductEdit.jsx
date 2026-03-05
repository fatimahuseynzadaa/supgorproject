import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../../../tools/actions/productAction";

const ProductEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector(state =>
    state.product.all.find(p => p.id === parseInt(id))
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = {
      id: product.id,
      title: e.target.title.value,
      price: e.target.price.value,
      image: e.target.image.value
    };
    dispatch(updateProduct(updated));
    navigate("/dashboard/product"); // geri siyahıya yönləndir
  };

  return (
    <div className="container my-5">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="title" defaultValue={product.title} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" name="price" defaultValue={product.price} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input type="text" name="image" defaultValue={product.image} className="form-control" />
        </div>
        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  );
};

export default ProductEdit;
