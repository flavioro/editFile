const fs = require('fs')

async function fileExists (nameFile) {
  try {
    await fs.promises.access(nameFile)
    console.info(`Success find file ${nameFile}`)
    return true
  } catch (error) {
    console.error(`Not found file ${nameFile}`, error)
    return false
  }
};

module.exports.fileExists = fileExists
