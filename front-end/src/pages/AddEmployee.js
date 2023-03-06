import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddEmployee = () => {

  // Redirect page
  const navigate = useNavigate();
  const routeToHome = () => {navigate('/')}

  // Add Employee
  const [formData, setFormData] = useState({
    fullName: "",
    initialName: "",
    displayName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    mobileNumber: "",
    designation: "",
    employeeType: "",
    joinedDate: "",
    experience: "",
    salary: "",
    note: " ",
  });

  const {
    fullName,
    initialName,
    displayName,
    gender,
    dateOfBirth,
    email,
    mobileNumber,
    designation,
    employeeType,
    joinedDate,
    experience,
    salary,
    note,
  } = formData;

  // get input value and set
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(
    fullName,
    initialName,
    displayName,
    gender,
    dateOfBirth,
    email,
    mobileNumber,
    designation,
    employeeType,
    joinedDate,
    experience,
    salary,
    note
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = {
      fullName: fullName,
      initialName: initialName,
      displayName: displayName,
      gender: gender,
      dateOfBirth: dateOfBirth,
      email: email,
      mobileNumber: mobileNumber,
      designation: designation,
      employeeType: employeeType,
      joinedDate: joinedDate,
      experience: experience,
      salary: salary,
      note: note,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const body = JSON.stringify(newEmployee);
      await axios.post("http://localhost:5000/employee/add", body, config);
      setFormData({
        fullName: "",
        initialName: "",
        displayName: "",
        gender: "",
        dateOfBirth: "",
        email: "",
        mobileNumber: "",
        designation: "",
        employeeType: "",
        joinedDate: "",
        experience: "",
        salary: "",
        note: " ",
      });
      alert("Employee Added Successfully");
      window.location.href = "/";
    } catch (err) {
      console.error("error", err.response.data);
      alert("Employee Not Added");
    }
  };


  return (
    <div className="container mt-4">

      <h2 className="center">Add Employee</h2>

      <form className="form-style" onSubmit={(e) => onSubmit(e)}>

        <div className="mb-3 col-md-12 col-12">
          <label for="inputFullName">Full Name *</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={fullName}
            onChange={(e) => onChange(e)}
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
              value={initialName}
              onChange={(e) => onChange(e)}
              pattern="[A-Za-z\W\s]{2,30}"
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
              value={displayName}
              onChange={(e) => onChange(e)}
              pattern="[A-Za-z\s]{2,20}"
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
              value={gender}
              onChange={(e) => onChange(e)}
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
              value={dateOfBirth}
              onChange={(e) => onChange(e)}
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
              value={email}
              onChange={(e) => onChange(e)}
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
              value={mobileNumber}
              pattern="[0-9]{11}"
              title="Enter valid contact number (ex - 94757713501)"
              onChange={(e) => onChange(e)}
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
              value={designation}
              pattern="[A-Za-z\s]{2,50}"
              title="The first designation must contain minimum 2 letters and maximum 20 letters"
              onChange={(e) => onChange(e)}
              placeholder="ex: senior developer"
              required
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputEmployeeType">Employee Type *</label>
            <select
              id="inputEmployeeType"
              name="employeeType"
              value={employeeType}
              className="form-control"
              onChange={(e) => onChange(e)}
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
            <label for="inputJoinedDate">Joined Date *</label>
            <input
              type="date"
              className="form-control"
              name="joinedDate"
              value={joinedDate}
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputExperience">Experience *</label>
            <select
              id="inputExperience"
              name="experience"
              value={experience}
              className="form-control"
              onChange={(e) => onChange(e)}
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
            <label for="inputSalary">Salary (Rs) *</label>
            <input
              type="number"
              min="0" 
              max="99999999" 
              step="1"
              className="form-control"
              name="salary"
              value={salary}
              onChange={(e) => onChange(e)}
              placeholder="ex: 25000"
              required
            />
          </div>
        </div>

        <div className="mb-3 col-md-12 col-12">
          <label for="inputFullName">Personal Notes</label>
          <textarea
            name="note"
            value={note}
            className="form-control"
            onChange={(e) => onChange(e)}
            placeholder="message.."
            cols="30"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Add People</button>
        <button type="submit" className="btn btn-light" onClick={routeToHome}>Cancel</button>

      </form>
      
    </div>
  );
};

export default AddEmployee;
