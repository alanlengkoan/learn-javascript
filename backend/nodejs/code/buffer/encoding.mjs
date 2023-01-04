const buf = Buffer.from('Hello World', 'utf8');
console.log(buf.toString());
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
console.log(buf.toString('base64url'));

const bufBase64 = Buffer.from("SGVsbG8gV29ybGQ=", "base64");
console.info(bufBase64.toString('utf8'));