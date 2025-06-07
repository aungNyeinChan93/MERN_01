import jwt from 'jsonwebtoken';

const JWT = {
    genToken: (payload, secretKey) => jwt.sign(payload, secretKey, { algorithm: 'HS256' }),
    getToken: (token, secretKey) => jwt.verify(token, secretKey, { algorithms: 'HS256' }, (err, decoded) => {
        if (!err) {
            return decoded;
        } else {
            console.log(err);
        }
    })
}


const token = JWT.genToken('aung', "asd123!@");
console.log(token);

const res = JWT.getToken(token, 'asd123!@');
console.log(res);


