import routerx from 'express-promise-router'
import categoriecontroller from '../controllers/CategorieController'
import auth from '../middlewares/auth'
import multiparty from 'connect-multiparty'

var path = multiparty({uploadDir: './uploads/categorie'})
const router = routerx();

router.post("/register",[auth.verifyAdmin,path],categoriecontroller.register);
router.put("/update",[auth.verifyAdmin,path],categoriecontroller.update);
router.get("/list",auth.verifyAdmin,categoriecontroller.list);
router.delete("/delete",auth.verifyAdmin,categoriecontroller.remove);

export default router;