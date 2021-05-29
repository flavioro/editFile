const fs = require('fs')

const writeFile = async (filePath, strFile) => {
  try {
    const data = await fs.promises.writeFile(filePath, strFile, 'utf8')
    return data
  } catch (err) {
    console.log(err)
  }
}

module.exports.writeFile = writeFile
