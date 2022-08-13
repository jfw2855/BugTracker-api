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
    req.body.issue.status = "open"
    req.body.issue.organization = req.user.organization
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


// SHOW -> displays one issue
// GET/issue/:issueId
router.get('/issue/:issueId', requireToken, (req, res, next) => {
    const issueId = req.params.issueId
    //finds issue 
    Issue.findById(issueId).populate('owner').populate('project').populate('comments.owner')
      //if no issue is found
      .then(handle404)
      // respond with status 200 and JSON of the issue
      .then((issue) => {
          res.status(200).json({ issue })
          }
        )
      // if an error occurs, pass it to the handler
      .catch(next)
})

// SHOW -> displays all project issues
// GET/issue/project/:projectId
router.get('/issue/project/:projectId', requireToken, (req, res, next) => {
    const projectId = req.params.projectId
    //finds all issues for project 
    Issue.find({project:projectId})
      //if no issue is found
      .then(handle404)
      // respond with status 200 and JSON of the issues
      .then((issues) => {
          res.status(200).json({ issues })
          }
        )
      // if an error occurs, pass it to the handler
      .catch(next)
})

// SHOW -> displays all user's issues
// GET/issue/user
router.get('/user/issues', requireToken, (req, res, next) => {
  //finds all user's issues
  Issue.find({owner:req.user.id})
    //if no issue is found
    .then(handle404)
    // respond with status 200 and JSON of the issues
    .then((issues) => {
        res.status(200).json({ issues })
        }
      )
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW -> displays all org issues
// GET/issues/org
router.get('/issues/org', requireToken, (req, res, next) => {
  //finds all issues from organization
  Issue.find({organization:req.user.organization})
    //if no issue is found
    .then(handle404)
    // respond with status 200 and JSON of the issues
    .then((issues) => {
        res.status(200).json({ issues })
        }
      )
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW -> Returns average close issue time in Days
// GET/issues/org/closed
router.get('/issues/org/closed', requireToken, (req, res, next) => {
  //finds all closed issues from organization
  Issue.find({organization:req.user.organization, status:'closed'},{team:0,description:0,comments:0,title:0})
    //if no issue is found
    .then(handle404)
    // respond with status 200 and JSON of the issues
    .then((issues) => {
        let avgCloseTime = 0
        for (let i in issues) {
          avgCloseTime+=(issues[i].updatedAt.getTime()-issues[i].createdAt.getTime())/86400000
        }
        avgCloseTime=avgCloseTime/issues.length

        res.status(200).json({ avgCloseTime })
        }
      )
    // if an error occurs, pass it to the handler
    .catch(next)
})

// UPDATE -> updates an issue
// PATCH/issue/:issueId
router.patch('/issue/:issueId', requireToken, removeBlanks, (req, res, next) => {
    const issueId = req.params.issueId
    //finds single issue
    Issue.findById(issueId)
      //if no issue is found
      .then(handle404)
      // issue found
      .then((issue) => {
          // checks if user is owner
          requireOwnership(req,issue)
          //updates and saves issue
          issue.set(req.body.issue)
          return issue.save()
          })
        //send 204 no content
       .then(() => res.sendStatus(204))
      // if an error occurs, pass it to the handler
      .catch(next)
})


//DELETE -> removes single issue
//DELETE/issue/:issueId
router.delete('/issue/:issueId', requireToken, (req,res,next)=>{
    const issueId = req.params.issueId
    Issue.findById(issueId)
      //if no issue is found
      .then(handle404)
      //issue found
      .then(issue => {
        //checks if user is the issue owner
        requireOwnership(req,issue)
        issue.delete()
      })
      //send 204 no content
      .then(()=> res.sendStatus(204))
      //if any errors occurs, pass to error handler
      .catch(next)
})

//DELETE all issues -> removes ALL issues from a project
//DELETE/issue/project/:projectId
router.delete('/issue/project/:projectId', requireToken, (req,res,next)=>{
  const projectId = req.params.projectId
  Issue.deleteMany({project:projectId})
    //if no issue is found
    .then(handle404)
    //send 204 no content
    .then(()=> res.sendStatus(204))
    //if any errors occurs, pass to error handler
    .catch(next)
})

//Delete team member -> removes issue team member
//DELETE/issue/:issueId/:userId
router.delete('/issue/:issueId/:userId', requireToken, (req,res,next) => {
  const issueId = req.params.issueId
  const userId = req.params.userId
  Issue.findByIdAndUpdate(issueId, {
    '$pull': {
        'team':{ '_id': userId }
    }
  })
  //send 204 no content
  .then(()=>res.sendStatus(204))
  //if any errors occurs, pass to error handler
  .catch(next)
})


module.exports = router
