import React, { useEffect } from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../redux/slice/studentsList";
import RingLoader from "react-spinners/RingLoader";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const studentsData = useSelector((state) => state.students);
  useEffect(() => {
    dispatch(fetchStudents());
  }, []);
  function deleteStudent(id) {
    axios.delete(
      `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/students/${id}`
    );
    window.location.reload();
  }
  return studentsData.isLoading ? (
    <RingLoader color="#36d7b7" className="loader" />
  ) : (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Phone</th>
                <th>Group</th>
                <th>Buttons</th>
              </tr>
            </thead>
            <tbody>
              {studentsData.data.map((student, index) => (
                <tr key={index}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.phone}</td>
                  <td>{student.group}</td>
                  <td>
                    <AiFillDelete
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteStudent(student.id)}
                    />
                    <Link
                      to={`edit-student/${student.id}`}
                      style={{ marginLeft: "20px" }}
                    >
                      <AiFillEdit />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
