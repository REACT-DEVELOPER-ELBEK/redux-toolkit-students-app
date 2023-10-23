import React, { useState } from "react";
import "./Add.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const url = "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/students";
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    group: "",
  });
  const toHome = useNavigate()
  function addStudent() {
    if (
      (
        student.firstName ||
        student.lastName ||
        student.phone ||
        student.group
      ).trim().length == 0
    ) {
      toast.error("Oops you missed field", { theme: "colored" });
    } else {
      axios
        .post(`${url}`, student)
        .then((response) => response.data)
        .catch((error) => console.log(error));
      toast.success(`${student.firstName} is successfully added`, { theme: "colored" });
      toHome("/")
      setTimeout(() => {
        window.location.reload()
      }, 999);
    }
  }
  return (
    <div className="add">
      <div className="container">
        <div className="add__wrapper">
          <h1>Add Student</h1>
          <div className="students__field">
            <div className="students__input">
              <input
                type="text"
                placeholder="First name"
                onChange={(e) =>
                  setStudent({ ...student, firstName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last name"
                onChange={(e) =>
                  setStudent({ ...student, lastName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Phone"
                onChange={(e) =>
                  setStudent({ ...student, phone: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Group"
                onChange={(e) =>
                  setStudent({ ...student, group: e.target.value })
                }
              />
            </div>
            <button onClick={() => addStudent()}>+ Add student</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Add;
