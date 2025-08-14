module.exports = getDiff
const fs = require('fs')
const lodash = require('lodash')


function getDiff() {
	let fileContents = fs.readFileSync(first.json)
	let data1 = JSON.parse(fileContents)
	fileContents = fs.readFileSync(last.json)
	let data2 = JSON.parse(fileContents)
	const rejected = lodash._reject(data2, function(o) { return data1._find(o)})
	console.log(rejected.length)
}