const { exec } = require("child_process");
const path = require("path");

function executeRoutingEngine() {
    return new Promise((resolve, reject) => {

        const executable = process.platform === "win32"
    ? path.join(__dirname, "../../cpp-engine/test.exe")
    : path.join(__dirname, "../../cpp-engine/build/PATHX");

        exec(executable, (error, stdout, stderr) => {

            if (error) {
                reject(error);
                return;
            }

            resolve(stdout);

        });

    });
}

module.exports = {
    executeRoutingEngine,
};