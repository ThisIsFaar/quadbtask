import React, { useState } from "react";
import { insertData } from "./helper/insertdata";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Nav from "./NavBar";

const Form = () => {
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
    total_orders: "",
    user_image: "",
  });

  const { user_name, user_email, user_password, user_image, total_orders } =
    values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });

    const formData = new FormData();

    formData.append("user_name", user_name);
    formData.append("user_email", user_email);
    formData.append("user_password", user_password);
    formData.append("total_orders", total_orders);
    formData.append("user_image", user_image);
    insertData(formData).then((data) => {
      if (data.error === "no err") {
        toast.success("Inserted User Successfully");
        setValues({
          ...values,
          user_name: "",
          user_email: "",
          user_password: "",
          total_orders: "",
          user_image: "",
        });
      } else {
        toast.error(`${data.error}`);
      }
    });
  };

  const handleChange = (name) => (event) => {
    const value =
      name === "user_image" ? event.target.files[0] : event.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <React.Fragment>
      <Nav />
      <div id="main">
        <form method="POST" encType="multipart/form-data">
          <div className="form-row">
            <div className=" mb-3 ">
              <label>UserName</label>
              <input
                onChange={handleChange("user_name")}
                value={user_name}
                type="text"
                name="user_name"
                className="form-control"
                required
              />
            </div>
            <div className=" mb-3">
              <label>Email</label>
              <input
                onChange={handleChange("user_email")}
                value={user_email}
                type="email"
                name="user_email"
                className="form-control"
                required
              />
            </div>
            <div className=" mb-3">
              <label>Password</label>
              <input
                onChange={handleChange("user_password")}
                value={user_password}
                type="password"
                name="user_password"
                className="form-control"
                required
              />
            </div>
            <div className=" mb-3">
              <label>TotalOrders</label>
              <input
                onChange={handleChange("total_orders")}
                value={total_orders}
                type="text"
                name="total_orders"
                className="form-control"
                required
              />
            </div>
            <div className=" mb-3">
              <label>UserImage</label>
              <input
                onChange={handleChange("user_image")}
                name="user_image"
                type="file"
                accept="image"
                className="form-control"
                placeholder="choose a file"
                required
              />
            </div>
          </div>
          <button className="btn btn-primary" onClick={onSubmit} type="submit">
            Submit form
          </button>
        </form>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Form;
