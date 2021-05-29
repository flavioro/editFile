const fileExists = require('./tools/checkFile')
const ReplaceAll = require('./tools/replaceAll')

const replaceTextFile = () => {
  console.log(ReplaceAll.ReplaceAll('Do more', 'more', 'more and more'))
}

async function validFile () {
  const fileExists1 = await fileExists.fileExists('./src/tmp/httpd.conf')

  if (fileExists1) {
    replaceTextFile()
  }
}

replaceTextFile()
validFile()
