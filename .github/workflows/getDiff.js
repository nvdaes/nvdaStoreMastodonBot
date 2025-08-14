module.exports = getDiff
const fs = require('fs')
const differenceWith = require('lodash/differenceWith')
const isEqual = require('lodash/isEqual')


function getDiff() {
	let fileContents = fs.readFileSync('old.json')
	let data1 = JSON.parse(fileContents)
	fileContents = fs.readFileSync('new.json')
	let data2 = JSON.parse(fileContents)
	let diff = differenceWith(data2, data1, isEqual)
	diff.forEach((item) => console.log(item.sha256))
	let mailBody = ``
	diff.forEach((item) => mailBody += `${item.addonId} ${item.addonVersionName}\n$${item.description}\n`)
	console.log(mailBody)
	return diff
}