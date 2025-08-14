module.exports = getData
const fs = require('fs')

function getData(file) {
	let fileContents = fs.readFileSync(file)
	let data = JSON.parse(fileContents)
	return data
}