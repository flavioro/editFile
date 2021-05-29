const fs = require('fs')

const readFile = async filePath => {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8')
    return data
  } catch (err) {
    console.log(err)
  }
}

module.exports.readFile = readFile
