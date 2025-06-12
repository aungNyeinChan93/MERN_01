import { compareSync, genSaltSync, hashSync } from 'bcrypt'
import jwt from 'jsonwebtoken';


export const bcrypt = {
    hash: (plain, salt) => hashSync(plain, genSaltSync(salt)),
    compare: (plainStr, hashStr) => compareSync(plainStr, hashStr)
}

export const JWT = {
    genToken: (payload, secretKey = null) => jwt.sign(payload, secretKey, { algorithm: 'HS256' }),
    getToken: (token, secretKey = null) => jwt.verify(token, secretKey, { algorithms: 'HS256' }, (err, decoded) => {
        if (!err) {
            return decoded;
        } else {
            console.log(err);
        }
    })
}



