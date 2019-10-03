const express = require('express')

const router = express.Router()

const SessionControlller = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DasboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/DashboardController')

const multer = require('multer')
const uploadConfig = require('./config/upload')

const upload = multer(uploadConfig)

// sessions
router.post('/sessions', SessionControlller.store)

// spots
router.post('/spots', upload.single('thumbnail'), SpotController.store)
router.get('/spots', SpotController.index)

// dashboard
router.get('/dashboard', DasboardController.show)

// bookings
router.post('spots/:id/bookings')

module.exports = router
