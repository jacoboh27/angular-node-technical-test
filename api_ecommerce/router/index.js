import routerx from 'express-promise-router'
import User from './User'

const router = routerx();

router.use('/user', User);

export default router;