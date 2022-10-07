import {Router} from 'express'
const router = Router()

// Creating the routes for the application
// Using the partials methods


// Route for the index
router.get('/', (req, res) => res.render('index'))

// Route for the services
router.get('/servicios', (req, res) => res.render('servicios'))

// Route for the contacts
router.get('/contactenos', (req, res) => res.render('contactenos'))

export default router
