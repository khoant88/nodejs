const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller.js');
router.route('/')
    .get(projectController.index)
    .post(projectController.newProject)
    // .put()
    // .patch()
    // .delete()

module.exports = router;