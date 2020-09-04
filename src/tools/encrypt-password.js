/* eslint-disable no-console */
const bcrypUtil = require('../security/bcrypt.util');

const argv = process.argv.splice(2);

bcrypUtil.generate(argv[0])
    .then((response) => console.log(response))
    .catch(() => console.error('cant encrypt the password'));
