import models from '../models'
import resource from '../resources'

export default {
    register: async(req,res) => {
        try {
            if(req.files){
                var img_path = req.files.portada.path;
                var name = img_path.split('\\');
                var portada_name = name[2];
                req.body.imagen = portada_name;
            }
            const categorie = await models.Categorie.create(req.body);
            res.status(200).json(categorie);
        } catch (error) {
            res.status(500).send({
                message: "OCURRIO UN PROBLEMA"
            });
            console.log(error);
        }
    },
    update: async(req,res) => {
        try {
            if(req.files){
                var img_path = req.files.portada.path;
                var name = img_path.split('\\');
                var portada_name = name[2];
                req.body.imagen = portada_name;
            }
            await models.Categorie.findByIdAndUpdate({_id: req.body._id},req.body);

            let CategorieT = await models.Categorie.findOne({_id: req.body._id});
            res.status(200).json({
                message: "LA CATEGORIA SE HA MODIFICADO CORRECTAMENTE",
                categorie: resource.Categorie.categorie_list(CategorieT),
            });
        } catch (error) {
            res.status(500).send({
                message: "OCURRIO UN PROBLEMA"
            });
            console.log(error);
        }
    },
    list: async(req,res) => {
        try {
            var search = req.query.search;
            let Categories = await models.Categorie.find({
                $or:[
                    {"title": new RegExp(search, "i")},
                ]
            }).sort({'createdAt': -1});

            Categories = Categories.map((user) => {
                return resource.Categorie.categorie_list(user);
            })

            res.status(200).json({
                Categories: Categories
            });
        } catch (error) {
            res.status(500).send({
                message: "OCURRIO UN PROBLEMA"
            });
            console.log(error);
        }
    },
    remove: async(req,res) => {
        try {
            await models.Categorie.findByIdAndDelete({_id: req.query._id});
            res.status(200).json({
                message: "LA CATEGORIA SE ELIMINO CORRECTAMENTE",
            });
        } catch (error) {
            res.status(500).send({
                message: "OCURRIO UN PROBLEMA"
            });
            console.log(error);
        }
    }
}