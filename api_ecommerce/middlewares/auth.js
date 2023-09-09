import token from '../services/token'

export default {
    verifyEcommerce: async(req, res, next) => {
        if (!req.headers.token) {
            res.status(404).send({
                message: 'EL TOKEN ES ESTRICTAMENTE NECESARIO'
            });
        }
        const response = await token.decode(req.headers.token);
        if (response) {
            if (response.rol == 'cliente' || response.rol == 'admin') {
                next();
            } else {
                res.status(403).send({
                    message: 'USUARIO INVALIDO'
                });
            }
        } else {
            res.status(403).send({
                message: 'TOKEN INVALIDO'
            });
        }
    },
    verifyAdmin: async(req, res, next) => {
        if (!req.headers.token) {
            res.status(404).send({
                message: 'EL TOKEN ES ESTRICTAMENTE NECESARIO'
            });
        }
        const response = await token.decode(req.headers.token);
        if (response) {
            if (response.rol == 'admin') {
                next();
            } else {
                res.status(403).send({
                    message: 'NO TIENES PERMISO PARA REALIZAR ESTA ACCION'
                });
            }
        } else {
            res.status(403).send({
                message: 'TOKEN INVALIDO'
            });
        }
    },
}