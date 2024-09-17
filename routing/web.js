const express = require('express')
const FrontController = require('../Controllers/FrontController')
const AdminController = require('../Controllers/Admin/AdminController')
const route = express.Router()


route.get('/',FrontController.home)
route.get('/about',FrontController.about)
route.get('/login',FrontController.login)
route.get('/register',FrontController.register)
route.get('/contact',FrontController.contact)

// AdminController
route.get('/admin/dashboard',AdminController.dashboard)
route.get('/admin/studentDisplay',AdminController.displayStudent)


module.exports = route