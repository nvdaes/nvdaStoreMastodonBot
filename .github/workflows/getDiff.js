module.exports = getDiff
const fs = require('fs')
const difference = require('lodash/difference')


function getDiff() {
	let fileContents = fs.readFileSync('old.json')
	let data1 = JSON.parse(fileContents)
	fileContents = fs.readFileSync('new.json')
	let data2 = JSON.parse(fileContents)
	let diff = difference(data2, data1)
	return diff
}