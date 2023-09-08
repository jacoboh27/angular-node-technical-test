import bcrypt from 'bcryptjs'
import models from '../models'
import token from '../services/token'

export default {
    register: async(req, res) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const user = await models.User.create(req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).send({
                message: 'NO FUE POSIBLE REGISTRAR AL USUARIO'
            });
            console.log("error: ", error);
        }
    },
    login: async(req, res) => {
        try {
            const user = await models.User.findOne({email: req.body.email, state:1});
            if (user) {
                let compare = await bcrypt.compare(req.body.password, user.password);
                if (compare) {
                    let tokenUser = await token.encode(user._id, user.rol, user.email);
                    const USER_FRONTEND = {
                        token: tokenUser,
                        user: {
                            name: user.name,
                            surname: user.surname,
                            email: user.email,
                            avatar: user.avatar
                        }
                    }
                    res.status(200).json({USER_FRONTEND: USER_FRONTEND});
                } else {
                    res.status(500).send({
                        message: 'CONTRASEÑA INCORRECTA'
                    });   
                }
            } else {
                res.status(500).send({
                    message: 'EMAIL INVALIDO'
                }); 
            }
        } catch (error) {
            res.status(500).send({
                message: 'OCURRIO UN ERROR'
            });
            console.log("error: ", error);
        }
    },
    update: async(req, res) => {
        try {
            if (req.files) {
                var img_path = req.files.avatar.path;
                var name = img_path.split('//');
                var avatar_name = name[2];
                console.log("avatar_name", avatar_name);
            }
            const UserT = await models.User.findByIdAndUpdate({_id: req.body._id}, req.body);
            res.status(200).json({
                message: 'USUARIO MODIFICADO EXITOSAMENTE',
                user: UserT
            });
        } catch (error) {
            res.status(500).send({
                message: 'OCURRIO UN ERROR'
            });
            console.log("error: ", error);
        }
    },
    list: async(req, res) => {
        try {
            var search = req.body.search;
            const Users = await models.User.find({
                $or:[
                    {"name": new RegExp(search, "i")},
                    {"surname": new RegExp(search, "i")},
                    {"email": new RegExp(search, "i")}
                ]
            }).sort({'createdAt': -1});
            res.status(200).json({
                users: Users
            });
        } catch (error) {
            res.status(500).send({
                message: 'OCURRIO UN ERROR'
            });
            console.log("error: ", error);
        }
    },
    remove: async(req, res) => {
        try {
            const UserT = await models.User.findByIdAndDelete({_id: req.body._id});
            res.status(200).json({
                message: 'USUARIO ELIMINADO EXITOSAMENTE'
            });
        } catch (error) {
            res.status(500).send({
                message: 'OCURRIO UN ERROR'
            });
            console.log("error: ", error);
        }
    }
}