const models = require("../../database/models/user");
const { createJob } = require("../jobs/queue.job");

async function createUser(req, res) {
    try {
       const user = await models.create(req.body);
        console.log(user)
        createJob("Welcome email", user);
        res.status(201).send({message: "User Registered Successfully", user});
    } catch (error) {
        return  res.status(500).send(error)
    }
}
module.exports = { createUser };