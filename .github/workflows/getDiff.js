module.exports = getDiff
const fs = require('fs')
const lodash = require('lodash')


function getDiff() {
	let fileContents = fs.readFileSync(first.json)
	let data1 = JSON.parse(fileContents)
	fileContents = fs.readFileSync(last.json)
	let data2 = JSON.parse(fileContents)
	let diff = lodash._difference(data2, data1)
	return diff
}