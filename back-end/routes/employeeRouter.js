const router = require("express").Router();
let Employee = require("../models/employee");

//Add EMPLOYEE (http://localhost:5000/employee/add)

router.route("/add").post((req, res) => {  //get data from frontend via request

    // get request body data and assining them to variables
    const fullName = req.body.fullName;
    const initialName = req.body.initialName;
    const displayName = req.body.displayName;
    const gender = req.body.gender;
    const dateOfBirth = req.body.dateOfBirth;
    const email = req.body.email;
    const mobileNumber = Number(req.body.mobileNumber);
    const designation = req.body.designation;
    const employeeType = req.body.employeeType;
    const joinedDate = req.body.joinedDate;
    const experience = req.body.experience;
    const salary = Number(req.body.salary);
    const note = req.body.note;


    const newEmployee = new Employee({
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
    })

    //pass the data to database
    newEmployee.save().then(() => {
        res.json("employee added succecfull")
    }).catch((err) => {
        console.log(err);
    })
})




//GET ALL EMPLOYEES (http://localhost:5000/employee/)

router.route("/").get((req, res) => {

    Employee.find().then((employees) => {
        res.json(employees) //pass data from db to frontend
    }).catch((err) => {
        console.log(err)
    })

})


//GET SEARCH EMPLOYEE DETAILS (http://localhost:5000/employee/search)

router.route("/search").get((req, res) => {

    const { q } = req.query;
    const keys = ["employeeType"];

    const search = (employees) => {
        return employees.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };


    Employee.find().then((employees) => {
        res.json(search(employees))
    }).catch((err) => {
        console.log(err)
    })
})





//GET ONE EMPLOYEE By ID (http://localhost:5000/employee/get/<userID>)

router.route("/get/:id").get(async (req, res) => { // get data from frontend via request. async function is used to increase the performance 
    let empId = req.params.id; //fetch the id parameter in url

    const pack = await Employee.findById(empId) //pass two parameters(userid,object that store employee data) and find user by id and update relevent data
        .then((employees) => {
            res.status(200).send({ status: "employee fetched", employees })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with find data" });
        })

})





//UPDATE ONE EMPLOYEE (http://localhost:5000/employee/update/<userID>)

router.route("/update/:id").put(async (req, res) => { // get data from frontend via request. async function is used to increase the performance 
    let empId = req.params.id; //fetch the id parameter in url
    const { fullName,
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
            note } = req.body; //fetch data from frontend

    const updateEmployee = { //create update object and pass values getting from frontend
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
    }

    const update = await Employee.findByIdAndUpdate(empId, updateEmployee) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
        .then(() => {
            res.status(200).send({ status: "employee updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data" });
        })

})





//DELETE EMPLOYEE (http://localhost:5000/employee/delete/<userID>)

router.route("/delete/:id").delete(async (req, res) => {
    let sempId = req.params.id;

    await Employee.findByIdAndDelete(sempId)
        .then(() => {
            res.status(200).send({ status: "employee deleted" });
        }).catch((err) => {
            console.log(err.message)
            res.status(500).send({ status: "Error with delete employee", error: err.message });
        })
})


module.exports = router;