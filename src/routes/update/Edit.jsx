import React, { useEffect, useState } from "react";
import "./Edit.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { fetchStudents } from "../../redux/slice/studentsList";
import { useSelector, useDispatch } from "react-redux";

const Edit = () => {
  const studentId = useParams();
  let dispatch = useDispatch();
  let selector = useSelector((state) => state.students.data[studentId.id]);
  console.log(selector);
  useEffect(() => {
    dispatch(fetchStudents());
  }, []);
  //   console.log(studentId);
  return (
    <div className="add">
      <div className="container">
        <div className="add__wrapper">
          <h1>Edit Student</h1>
          <div className="students__field">
            <div className="students__input">
              <input
                type="text"
                placeholder="First name"
                value={selector.firstName}
              />
              <input
                type="text"
                placeholder="Last name"
                value={selector.lasstName}
              />
              <input type="text" placeholder="Phone" value={selector.phone} />
              <input type="text" placeholder="Group" value={selector.group} />
            </div>
            <Link to="/">
              <button>+ Add student</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
