import {Router} from 'express'
const router = Router()


router.get('/', (req, res) => res.render('index'))

router.get('/servicios', (req, res) => res.render('servicios'))

router.get('/contactenos', (req, res) => res.render('contactenos'))

export default router
