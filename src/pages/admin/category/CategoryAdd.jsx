import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addCategory } from "../../../tools/actions/categoryActions";
import { useState } from "react";
import Swal from 'sweetalert2';

const CategoryAdd = () => {

  const [title, setTitle] = useState("");
   const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addCategoryFunc = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "Category will be added!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!"
    }).then((result) => {

      if (result.isConfirmed) {

        dispatch(addCategory({
          title: title.trim(),
          value: value.trim()
        }));

        Swal.fire({
          title: "Added!",
          text: "Category successfully added.",
          icon: "success",
          timer: 1200,
          showConfirmButton: false
        });

        setTitle("");
        setValue("");

        navigate("/dashboard/category");
      }
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Add Category</h1>

      <div className="col-6">
        <form onSubmit={addCategoryFunc}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Value</label>
            <input
              value={value}
              onChange={e => setValue(e.target.value)}
              required
              type="text"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-dark">Add</button>
        </form>
      </div>
    </div>
  );
}

export default CategoryAdd