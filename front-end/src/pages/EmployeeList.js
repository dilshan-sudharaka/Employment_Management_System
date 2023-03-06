import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EmployeeList = () => {

  // Redirect page
  const navigate = useNavigate();
  const routeToAdd = () => {navigate('/addemployee')}
  const routeToUpdate = (id) => {navigate(`/updateemployee/${id}`)}

  // Get All Employees Function
  const [employees, setEmployees] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    function getAllEmployees() {
      axios
        .get(`http://localhost:5000/employee/search/?q=${query}`)
        .then((res) => {
          setEmployees(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    if (query.length === 0 || query.length > 1) getAllEmployees();
  }, [query]);

  // Delete Employee Function
  const deleteEmployee =(id)=>{
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    if (confirmed) {
      axios.delete(`http://localhost:5000/employee/delete/${id}`).then((res)=>{
        axios.get("http://localhost:5000/employee/").then((res) =>{
            alert("Delete Successfully");
            console.log(res.data);
            setEmployees(res.data);
        }).catch((err) => {
            alert(err.message);
        })
    })
    }  
  }
  

  return (
    <div className="mt-5">
      <div className="container">
        <h2>Employee List</h2>
        <div className="button-container">

          {/* select employee type start */}
          <select id="employee-type" name="employee-type" onChange={(e) => setQuery(e.target.value)}>
            <option value="" disabled selected>Employee Types</option>
            <option value="">All Employees</option>
            <option value="full time">Full time</option>
            <option value="part time">Part time</option>
            <option value="contract basis">Contract Basis</option>
            <option value="others">Others</option>
          </select>
          {/* select employee type end */}

          {/* add employee buttton */}
          <button className="btn btn-primary" onClick={routeToAdd}>Add People</button>
          
        </div>

        <table className="table">
          <thead className="table-head">
            <tr>
              <th scope="col">Display Name</th>
              <th scope="col">Emp ID</th>
              <th scope="col">Designation</th>
              <th scope="col">Emp Type</th>
              <th scope="col">Experience</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr>
                  <th scope="row">{employee.displayName}</th>
                  <td>0001</td>
                  <td>{employee.designation}</td>
                  <td>{employee.employeeType}</td>
                  <td>{employee.experience}</td>
                  <td className="d-flex">
                    <button type="button" className="btn btn-outline-primary" onClick={()=>{routeToUpdate(employee._id)}}>Edit</button>
                    <button type="button" className="btn btn-outline-danger" onClick={()=>{deleteEmployee(employee._id)}}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <h3>No details found</h3>
            )}

          </tbody>
        </table>

      </div>
    </div>
  );
};

export default EmployeeList;
