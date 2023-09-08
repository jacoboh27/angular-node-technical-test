import jwt from 'jsonwebtoken'
import models from '../models'

export default {
    encode: async(_id, rol, email) => {
        const token = jwt.sign({
            _id: _id, 
            rol: rol,
            email: email
        }, 'jacobs_ecommerce', {expiresIn: '1d'});
        return token;
    },
    decode: async(token) => {
        try {
            const {_id} = await jwt.verify(token, 'jacobs_ecommerce');
            const user = models.User.findOne({_id: _id, state: 1});
            if (user) {
                return user;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}