import { compareSync, genSaltSync, hashSync } from 'bcrypt'

export const bcrypt = {
    hash: (plain, salt) => hashSync(plain, genSaltSync(salt)),
    compare: (plainStr, hashStr) => compareSync(plainStr, hashStr)
}



