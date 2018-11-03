const isDevEnvironment = process.env.DEV || true;

const credentials = getCredentials(isDevEnvironment);

const { mongodb, aws } = credentials.mongodb;

function getCredentials(isDevEnvironment) {
    if (isDevEnvironment) {
        return require("./credentials.json") || {};
    } else {
        return process.env.CREDENTIALS || {};
    }
}

module.exports = {
    mongodb, aws
};