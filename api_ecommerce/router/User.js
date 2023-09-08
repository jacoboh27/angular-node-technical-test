import routerx from 'express-promise-router'
import UserController from '../controllers/UserController'

const router = routerx();

router.post("/register", UserController.register);
router.put("/update", UserController.update);
router.get("/list", UserController.list);
router.post("/login", UserController.login);
router.delete("/delete", UserController.remove);

export default router;