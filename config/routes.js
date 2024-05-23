const express = require('express')
const router = express.Router()

const PassportService = require('../app/services/passport-service')
const SessionChallengeStore = require('passport-fido2-webauthn').SessionChallengeStore


const passportService = new PassportService()
const store = new SessionChallengeStore()
    
passportService.init(store)
const pages = new(require('../app/controllers/pages'))
const auth = new(require('../app/controllers/auth'))

router.get('/', pages.welcome)

router.get('/register', auth.register)

router.get('/login', auth.login)








module.exports = router