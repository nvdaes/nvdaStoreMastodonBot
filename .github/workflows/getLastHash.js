module.exports = getHash

async function getLastHash({github}) {
	const cacheUrl = 'https://addonstore.nvaccess.org/cacheHash.json'
          const result = await github.request(cacheUrl)
          const data = result.data
          return data.trim()
}