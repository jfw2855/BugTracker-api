// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for project
const Project = require('../models/project')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// CREATE
// POST/project
router.post('/project', requireToken, (req, res, next) => {
	// set owner and organization to new project
	req.body.project.owner = req.user.id
    req.body.project.organization = req.user.organization

	Project.create(req.body.project)
		// respond to succesful `create` with status 201 and JSON of new "project"
		.then((project) => {
			res.status(201).json({ project: project.toObject() })
		})
		// if an error occurs, pass it off to our error handler
		// the error handler needs the error message and the `res` object so that it
		// can send an error message back to the client
		.catch(next)
})

// SHOW -> displays project
// GET/project/:projectId
router.get('/project/:projectId', requireToken, (req, res, next) => {
    const projectId = req.params.projectId
    Project.findById(projectId)
      //if no project is found
      .then(handle404)
      // respond with status 200 and JSON of the project
      .then((project) => {
        //returns status 200 if user is in project's organization, else sends status 401
          project.organization === req.user.organization? 
          res.status(200).json({ project: project }):
          res.status(401).json({msg:`User does not belong to Project's organization`})
          }
        )
      // if an error occurs, pass it to the handler
      .catch(next)
  })


// initial test to see if routes are connected to port 8000 - successful
// router.get('/project',(req,res,next)=> {
//     res.send('this works!!!!')
// })



module.exports = router
