import { exec } from 'child_process';

const commands = [
    'npm install --save-dev nodemon',
    //'npm install mongoose', //for mongoDB
    //'npm install pg', //for postgres
    //'npm install prisma --save-dev', //for postgres
    //'npx prisma init', //for postgres
    //'npm install @prisma/client', //for postgres
    'npm install --save multer',
    'npm install express',
    'npm install express-async-handler',
    'npm install express-validator',
    'npm install express-rate-limit',
    'npm install express-session',
    'npm install luxon',
    'npm install ejs',
    'npm install jsonwebtoken',
    'npm install bcryptjs',
    'npm install cookie-parser',
    'npm install dotenv --save',
    'npm install compression',
    'npm install helmet',
    'npm install debug',
    'npm install http-errors',
    'npm install passport',
    'npm install passport-local',
    'npm install passport-jwt',
    'npm install pug',
    'npm install cookie-session',
    'npm install cors',
    'npm install base64url',
    'npm install',
]

function delay() {
    return new Promise(resolve => setTimeout(resolve, 4000));
}

async function delayedExec(command) {
    // мы можем использовать await для Promise
    // который возвращается из delay
    await delay();
    console.log('command: ' + command);
    exec(command, function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        if (error !== null) {
            console.log('exec error: ' + error);
        }

    });
}



for (const command of commands) {
    await delayedExec(command);
}