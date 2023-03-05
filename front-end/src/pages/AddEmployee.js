import React from "react";
import { useState } from 'react';

const AddEmployee = () => {

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
    note: ""

  });

  const { fullName, initialName, displayName, gender, dateOfBirth, email, mobileNumber, designation, employeeType, joinedDate, experience, salary, note} = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  console.log(fullName, initialName, displayName, gender, dateOfBirth, email, mobileNumber, designation, employeeType, joinedDate, experience, salary, note);


  return (
    <div className="container mt-5">
      {/* add employee start */}

      <form className="form-style">
        <div className="mb-3 col-md-12 col-12">
          <label for="inputFullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={fullName}
            onChange={(e) => onChange(e)}
            pattern="[A-Za-z]{2,40}"
            title="The first name must contain letters only"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputInitials">Name with initials*</label>
            <input
              type="text"
              className="form-control"
              name="initialName"
              value={initialName}
              onChange={(e) => onChange(e)}
              pattern="[A-Za-z]{2,20}"
              title="The first name must contain letters only"
              placeholder="Initial Name"
              required
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputDisplayName">Preferred / Display Name</label>
            <input
              type="text"
              className="form-control"
              name="displayName"
              value={displayName}
              onChange={(e) => onChange(e)}
              pattern="[A-Za-z]{2,20}"
              title="The first name must contain letters only"
              placeholder="Preferred Name"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputGender">Gender</label>
            <select id="inputGender" className="form-control" name="gender" value={gender} onChange={(e) => onChange(e)} required>
              <option value="Male" selected>Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputBirthday">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => onChange(e)}
              placeholder="Birthday"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputMobileNumber">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              name="mobileNumber"
              value={mobileNumber}
              pattern="[0-9]{11}" 
              title="Enter valid contact number (ex - 94757713501)" 
              onChange={(e) => onChange(e)}
              placeholder="Mobile Number"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputDesignation">Designation</label>
            <input
              type="text"
              className="form-control"
              name="designation"
              value={designation}
              pattern="[A-Za-z]{2,20}" 
              title="The first name must contain letters only" 
              onChange={(e) => onChange(e)}
              placeholder="Designation"
              required
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputEmployeeType">Employee Type</label>
            <select id="inputEmployeeType" name="employeeType" value={employeeType} className="form-control" onChange={(e) => onChange(e)} required>
              <option value="full-time" selected>Full time</option>
              <option value="part-time">Part time</option>
              <option value="contract-basis">Contract Basis</option>
              <option value="others">Others</option>
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
              value={joinedDate}
              onChange={(e) => onChange(e)} 
              required 
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputExperience">Experience</label>
            <select id="inputExperience" name="experience" value={experience} className="form-control" onChange={(e) => onChange(e)} required>
              <option value="0 Years">0 Years</option>
              <option value="1 Years" selected>1 Years</option>
              <option value="2 Years">2 Years</option>
              <option value="3 Years">3 Years</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="inputSalary">Salary</label>
            <input
              type="number"
              className="form-control"
              name="salary"
              value={salary}
              onChange={(e) => onChange(e)}
              placeholder="Salary"
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
            cols="30"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Add People</button>
        <button type="submit">Cancel</button>

      </form>

      {/* add employee end */}
    </div>
  );
};

export default AddEmployee;
