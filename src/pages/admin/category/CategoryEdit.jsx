import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCategory } from "../../../tools/actions/categoryActions";

const CategoryEdit = () => {
  const { value } = useParams(); // URL-dən value götürürük
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const category = useSelector(state =>
    state.category.all.find(c => c.value === value)
  );

  if (!category) {
    return <h2>Category not found</h2>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = {
      ...category,
      title: e.target.title.value,
      value: e.target.valueField.value
    };
    dispatch(updateCategory(updated));
    navigate("/dashboard/category");
  };

  return (
    <div className="container my-5">
      <h1>Edit Category</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="title" defaultValue={category.title} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Value</label>
          <input type="text" name="valueField" defaultValue={category.value} className="form-control" />
        </div>
        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  );
};

export default CategoryEdit;
