const Users = require("../models/user");

// add student
async function addPatients(req, res)
{
    try
    {
        const student = await Users.create(req.body);
        res.status(201).json(student);
    } catch (err)
    {
        res.status(500).json({ error: err.message });
    }
}
// get all students


async function getAllPatients(req, res)
{
    try
    {
        const students = await Users.find();
        res.status(200).json({ student: students, message: "Successfully finded" });
    } catch (err)
    {
        res.status(500).json({ error: err.message, message: "Internal server error" });
    }
}
// update student by id
async function updatePatients(req, res)
{
    try
    {
        const { id } = req.params;
        const updatedStudent = await Users.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedStudent);
    } catch (err)
    {
        res.status(500).json({ error: err.message });
    }
}
// delete a student by id

async function deletePatients(req, res)
{
    try
    {
        const { id } = req.params;
        console.log(id);
        await Users.findByIdAndRemove(id);
        res.sendStatus(200);
    } catch (err)
    {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    addPatients,
    updatePatients,
    deletePatients,
    getAllPatients
};
