import routerx from 'express-promise-router'
import UserController from '../controllers/UserController'

const router = routerx();

router.post("/register", UserController.register);
router.put("/update", UserController.update);

export default router;