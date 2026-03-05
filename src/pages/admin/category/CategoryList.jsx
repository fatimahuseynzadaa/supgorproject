import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCategory } from "../../../tools/actions/categoryActions";
import Swal from "sweetalert2";
const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.all);

  const handleDelete = (value) => {
    Swal.fire({
      title: "Are you sure?",
      text: "All related products will also be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCategory(value));

        Swal.fire(
          "Deleted!",
          "Category and its products have been deleted.",
          "success",
        );
      }
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Category List</h1>

      <Link className="btn btn-dark mb-3" to="/dashboard/category/add">
        Add
      </Link>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Value</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {categories.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No category found
              </td>
            </tr>
          ) : (
            categories.map((item, index) => (
              <tr key={item.value}>
                <th>{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.value}</td>
                <td>
                  <Link
                    className="btn btn-warning btn-sm"
                    to={`/dashboard/category/edit/${item.value}`}
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.value)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
