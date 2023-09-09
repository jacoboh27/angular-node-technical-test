import routerx from 'express-promise-router'
import User from './User'
import Categorie from './Categorie'
import Product from './Product'

const router = routerx();

router.use('/users', User);
router.use('/categories', Categorie);
router.use('/products', Product);

export default router;