module.exports = getDiff
const fs = require('fs')
const differenceWith = require('lodash/differenceWith')
const isEqual = require('lodash/isEqual')
const find = require('lodash/find')


function getDiff() {
	let fileContents = fs.readFileSync('old.json')
	let data1 = JSON.parse(fileContents)
	fileContents = fs.readFileSync('new.json')
	let data2 = JSON.parse(fileContents)
	fileContents = fs.readFileSync('es.json')
	let dataEs = JSON.parse(fileContents)
	let diff = differenceWith(data2, data1, isEqual)
	let mailBody = ``
	diff.forEach((item) => mailBody += `${item.addonId} ${item.addonVersionName}\n${item.description}\n\n`)
	esDiff = diff.map((item) => find(dataEs, (o) => o.sha256 === item.sha256), item.sha256)
	console.log(esDiff)

	return diff
}