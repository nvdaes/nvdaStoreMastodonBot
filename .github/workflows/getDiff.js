module.exports = getDiff
const fs = require('fs')
const differenceWith = require('lodash/differenceWith')
const isEqual = require('lodash/isEqual')
const find = require('lodash/find')
const sortBy = require('lodash/sortBy')

function getDiff({core}) {
	let fileContents = fs.readFileSync('old.json')
	let data1 = JSON.parse(fileContents)
	fileContents = fs.readFileSync('new.json')
	let data2 = JSON.parse(fileContents)
	fileContents = fs.readFileSync('es.json')
	let dataEs = JSON.parse(fileContents)
	let diff = differenceWith(data2, data1, isEqual)
	diff = sortBy(diff, [(o) => o.addonId])
	let mailBody = ``
	diff.forEach((item) => mailBody += `${item.addonId} ${item.addonVersionName}\n${item.description}\n\n`)
	let esDiff = diff.map((item) => find(dataEs, (o) => o.sha256 == item.sha256))
	let esMailBody = ``
	if (esDiff.length > 0) { esMailBody += `Complementos actualizados (${diff.length}):\n`}
	esDiff.forEach((item) => esMailBody += `${item.addonId} ${item.addonVersionName}, ${item.channel} (publicado por ${item.publisher})\n${item.description}\nPágina de inicio: ${item.homepage}\nRevisiones de la comunidad: ${item.reviewUrl}\n\n`)
	core.setOutput('mailBody', mailBody)
	core.setOutput('esSubject', 'Complementos #bot')
	core.setOutput('esMailBody', esMailBody)
	return diff
}