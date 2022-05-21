// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for issue comments
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

//CREATE -> makes a comment for an issue
//POST/comment/issue/:issueId
router.post('/comment/issue/:issueId', requireToken,(req,res,next) => {
    const issueId = req.params.issueId
    // assigns owner to comment
    req.body.comment.owner = req.user.id
    //creates new comment
    Issue.findById(issueId)
    .then((issue)=> {
        //pushes comment into comments field
        issue.comments.push(req.body.comment)
        return issue.save()
    })
    // respond with status 201 and JSON of issue w/ comment
    .then((issue)=> {
        res.status(201).json({issue})
    })
    .catch(next)
})

// UPDATE -> updates a comment
// PATCH/comment/:commentId
router.patch('/comment/:issueId/:commentId', requireToken, removeBlanks, (req, res, next) => {
    const commentId = req.params.commentId
    const issueId = req.params.issueId
    //finds issue
    Issue.findById(issueId)
      //if no issue is found
      .then(handle404)
      // issue found
      .then((issue) => {
          // gets comment by its id (subdoc)
          const theComment = issue.comments.id(commentId)
          requireOwnership(req,theComment)
          //updates and saves comment
          theComment.set(req.body.comment)
          return issue.save()
          })
        //send 204 no content
       .then(() => res.sendStatus(204))
      // if an error occurs, pass it to the handler
      .catch(next)
})


//initial test to see if routes are connected to port 8000 - successful
// router.get('/comment',(req,res,next)=> {
//     res.send('this works!!!!')
// })


module.exports = router
