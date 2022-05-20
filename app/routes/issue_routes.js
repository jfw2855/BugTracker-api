// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for issue
const Issue = require('../models/issue')

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

//CREATE -> makes a new issue for a project
//POST/issue/project/:projectId
router.post('/issue/project/:projectId', requireToken,(req,res,next) => {
    // assigns projectId & ownerId to issue
    req.body.issue.project = req.params.projectId
    req.body.issue.owner = req.user.id
    //creates new issue
    Issue.create(req.body.issue)
    .then((issue)=> {
        //pushes owner into team arr
        issue.team.push(req.user)
        return issue.save()
    })
    // respond with status 201 and JSON of new issue
    .then((issue)=> {
        res.status(201).json({issue})
    })
    .catch(next)
})



// initial test to see if routes are connected to port 8000 - successful
// router.get('/issue',(req,res,next)=> {
//     res.send('this works!!!!')
// })


module.exports = router
