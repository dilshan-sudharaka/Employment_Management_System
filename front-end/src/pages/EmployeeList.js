import React from "react";

const EmployeeList = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="button-container">
          {/* drop down start */}
          <select id="employee-type" name="employee-type">
            <option value="default" disabled selected>
              Employee Types
            </option>
            <option value="all-employees">All Employees</option>
            <option value="full-time">Full time</option>
            <option value="part-time">Part time</option>
            <option value="contract-basis">Contract Basis</option>
            <option value="others">Others</option>
          </select>
          {/* drop down end */}

          {/* add buttton start */}
          <button className="btn btn-primary">Add People</button>
          {/* add button end */}
        </div>

        {/* table */}
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
            <tr>
              <th scope="row">Dilshan Sudharaka</th>
              <td>0001</td>
              <td>Senior Front-End Developer</td>
              <td>Full Time</td>
              <td>02 Years</td>
              <td className="d-flex">
                <button type="button" className="btn btn-outline-primary">Edit</button>
                <button type="button" className="btn btn-outline-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* end table */}
      </div>
    </div>
  );
};

export default EmployeeList;
