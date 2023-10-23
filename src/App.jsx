import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./routes/nav/Nav";
import Home from "./routes/home/Home";
import Add from "./routes/add/Add";
import Edit from "./routes/update/Edit";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<Add />} />
        <Route path="/edit-student/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
