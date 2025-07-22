const dns = require('dns');

dns.lookup('google.com', (err, address, family) => {
    if (err) throw err;
    console.log('lookup:', address, 'IPv' + family);
});

dns.resolve('google.com', 'A', (err, addresses) => {
    if (err) throw err;
    console.log('resolve A:', addresses);
});

dns.resolve4('google.com', (err, addresses) => {
    if (err) throw err;
    console.log('resolve4:', addresses);
});

dns.resolve6('google.com', (err, addresses) => {
    if (err) throw err;
    console.log('resolve6:', addresses);
});

dns.resolveMx('google.com', (err, addresses) => {
    if (err) throw err;
    console.log('resolveMx:', addresses);
});

dns.resolveTxt('google.com', (err, records) => {
    if (err) throw err;
    console.log('resolveTxt:', records);
});

dns.lookup('google.com', (err, address) => {
    if (err) throw err;
    dns.reverse(address, (err, hostnames) => {
        if (err) throw err;
        console.log('reverse:', hostnames);
    });
});

console.log('getServers:', dns.getServers());