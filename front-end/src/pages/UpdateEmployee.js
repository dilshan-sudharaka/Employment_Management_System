import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateEmployee = () => {

  // Redirect page
  const navigate = useNavigate();
  const routeToHome = () => {navigate('/')}

  // Get current Id
  const [currentEmployee, setCurrentEmployee] = useState({});
  const { id } = useParams();

  // Call getCurrentData function
  useEffect(() => {    
    try {
        getCurrentData(id);
        console.log(id);
      }catch (err) {
        console.error("error", err);
      } 
  }, [id]);

  const getCurrentData = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.get(`http://localhost:5000/employee/get/${id}`, config);
        setCurrentEmployee(res.data.employees);
        console.log(res.data.employees);
    } catch (err) {
        console.error("error", err);
    }
  };

  // Get updated input value and set 
  const handleInputChange = (event) => {
    setCurrentEmployee({
        ...currentEmployee,
        [event.target.name]: event.target.value,
    });
  };

  // Update employee data
  const updateData = async (id) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };   
    
    await axios.put(
      `http://localhost:5000/employee/update/${id}`,
      currentEmployee,
      config
    );
    setCurrentEmployee({
        fullName: currentEmployee.fullName,
        initialName: currentEmployee.initialName,
        displayName: currentEmployee.displayName,
        gender: currentEmployee.gender,
        dateOfBirth: currentEmployee.dateOfBirth,
        email: currentEmployee.email,
        mobileNumber: currentEmployee.mobileNumber,
        designation: currentEmployee.designation,
        employeeType: currentEmployee.employeeType,
        joinedDate: currentEmployee.joinedDate,
        experience: currentEmployee.experience,
        salary: currentEmployee.salary,
        note: currentEmployee.note
      });
      alert("your employee details successfully updated"); 
      window.location.href = "/";

  };

  

  return (
    <div className="container mt-4">
      <h2 className="center">Update Employee</h2>
      <form className="form-style" onSubmit={(e) => updateData(id)}>

        <div className="mb-3 col-md-12 col-12">
          <label for="inputFullName">Full Name *</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={currentEmployee.fullName}
            onChange={handleInputChange}
            pattern="[A-Za-z\s]{2,100}"
            title="The full name must contain minimum 2 letters and maximum 50 letters"
            placeholder="ex: kolamba arachchige don saman perera"
            required
          />
        </div>

        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputInitials">Name with initials *</label>
            <input
              type="text"
              className="form-control"
              name="initialName"
              value={currentEmployee.initialName}
              onChange={handleInputChange}
              pattern="[A-Za-z\W\s]{2,50}"
              title="The initial name must contain minimum 2 letters and maximum 30 letters"
              placeholder="ex: k.a.d.s perera"
              required
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputDisplayName">Preferred / Display Name *</label>
            <input
              type="text"
              className="form-control"
              name="displayName"
              value={currentEmployee.displayName}
              onChange={handleInputChange}
              pattern="[A-Za-z\s]{2,50}"
              title="The display name must contain minimum 2 letters and maximum 20 letters"
              placeholder="ex: saman perera"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputGender">Gender *</label>
            <select
              id="inputGender"
              className="form-control"
              name="gender"
              value={currentEmployee.gender}
              onChange={handleInputChange}
              required
            >
              <option value="" selected disabled>select your gender</option>
              <option value="Male" selected>Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputBirthday">Date of Birth *</label>
            <input
              type="date"
              className="form-control"
              name="dateOfBirth"
              value={currentEmployee.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputEmail4">Email *</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={currentEmployee.email}
              onChange={handleInputChange}
              placeholder="ex: abc@gmail.com"
              required
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputMobileNumber">Mobile Number *</label>
            <input
              type="tel"
              className="form-control"
              name="mobileNumber"
              value={currentEmployee.mobileNumber}
              pattern="[0-9]{11}"
              title="Enter valid contact number (ex - 94757713501)"
              onChange={handleInputChange}
              placeholder="ex: 94757713501"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputDesignation">Designation *</label>
            <input
              type="text"
              className="form-control"
              name="designation"
              value={currentEmployee.designation}
              pattern="[A-Za-z\s]{2,50}"
              title="The first designation must contain minimum 2 letters and maximum 20 letters"
              onChange={handleInputChange}
              placeholder="ex: senior developer"
              required
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputEmployeeType">Employee Type *</label>
            <select
              id="inputEmployeeType"
              name="employeeType"
              value={currentEmployee.employeeType}
              className="form-control"
              onChange={handleInputChange}
              required
            >
              <option value="" selected disabled>select employee type</option>
              <option value="Full time">Full time</option>
              <option value="Part time">Part time</option>
              <option value="Contract basis">Contract basis</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputJoinedDate">Joined Date</label>
            <input
              type="date"
              className="form-control"
              name="joinedDate"
              value={currentEmployee.joinedDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputExperience">Experience *</label>
            <select
              id="inputExperience"
              name="experience"
              value={currentEmployee.experience}
              className="form-control"
              onChange={handleInputChange}
              required
            >
              <option value="" selected disabled>select your experience</option>
              <option value="No Experience">No Experience</option>
              <option value="1 Year">1 Year</option>
              <option value="2 Years">2 Years</option>
              <option value="3 Years">3 Years</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputSalary">Salary (Rs)</label>
            <input
              type="number"
              min="0"
              max="99999999"
              step="1"
              className="form-control"
              name="salary"
              value={currentEmployee.salary}
              onChange={handleInputChange}
              placeholder="ex: 25000"
            />
          </div>
        </div>

        <div className="mb-3 col-md-12 col-12">
          <label for="inputFullName">Personal Notes</label>
          <textarea
            name="note"
            value={currentEmployee.note}
            className="form-control"
            onChange={handleInputChange}
            cols="30"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Update Employee</button>
        <button type="submit" className="btn btn-light" onClick={routeToHome}>Cancel</button>

      </form>
    </div>
  );
};

export default UpdateEmployee;
