let unifi = require('./index');

let r = unifi({
    debug: true,
    debugNet: true,
    username: 'ubnt',
    baseUrl: 'https://127.0.0.1:8443',
    password: 'UBNT'
});

console.log(r.site);

r.stat_sessions().then((data) => {
        console.log('Success', data);
        return r.stat_allusers();
    }).then((data) => {
        console.log('Received AP data', data);
    })
    .catch((err) => {
        console.log('Error', err);
    });