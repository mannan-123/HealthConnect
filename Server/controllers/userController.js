const Student = require("../models/user");

// add student
async function addStudent(req, res)
{
    try
    {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (err)
    {
        res.status(500).json({ error: err.message });
    }
}
// get all students
async function getAllStudent(req, res)
{
    try
    {
        const students = await Student.find();
        res.status(200).json({ student: students, message: "Successfully finded" });
    } catch (err)
    {
        res.status(500).json({ error: err.message, message: "Internal server error" });
    }
}
// update student by id
async function updateStudent(req, res)
{
    try
    {
        const { id } = req.params;
        const updatedStudent = await Student.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedStudent);
    } catch (err)
    {
        res.status(500).json({ error: err.message });
    }
}
// delete a student by id

async function deleteStudent(req, res)
{
    try
    {
        const { id } = req.params;
        console.log(id);
        await Student.findByIdAndRemove(id);
        res.sendStatus(200);
    } catch (err)
    {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    addStudent,
    updateStudent,
    deleteStudent,
    getAllStudent
};
