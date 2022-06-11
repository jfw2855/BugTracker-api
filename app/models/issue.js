// import dependencies
const mongoose = require('mongoose')
const commentSchema = require('./comment')

//ISSUE MODEL - stores info of a Project's issue
const issueSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		priority: {
			type: String,
			required: true,
		},
        status: {
            type: String,
            required: true,
        },
		description: {
			type: String,
			required: false,
		},
        team: Array,
        comments: [commentSchema],
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project',
            required: true,
        },
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		}
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Issue', issueSchema)