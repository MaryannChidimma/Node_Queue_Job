const Queue = require("bull");
const queue = new Queue("Jobs", 'redis://127.0.0.1:6379');
const { welcomeEmail } = require("../helpers/email");
//const { sendText } = require("../helpers/twillo");

const createJob = (options, data) => {
    const opts = { priority: 1, attempts: 5};
    queue.add(options, data, {
        attempts: opts.attempts,
        backoff: {
            type: "exponential",
            delay: 2000,
        },
        removeOnComplete: true,
        removeOnFail: true,
    });
};
queue.process("Welcome email", (job, done) =>  welcomeEmail(job.data, done))
queue.process("Send Text", (job, done) => sendText(job.data, done));
module.exports = { createJob };