/**
 *

<VirtualHost 162.241.103.39:443>
  ServerName api.archshop.com.br
  ServerAlias www.api.archshop.com.br
  DocumentRoot /home/archshopcom/public_html/api
  ServerAdmin webmaster@api.archshop.com.br
  UseCanonicalName Off
  ProxyPreserveHost On

 */
require('dotenv').config()

const fileExists = require('../tools/checkFile')
const readFile = require('../tools/readFile').readFile
const writeFile = require('../tools/writeFile').writeFile
const breakLine = require('../tools/breakLineByOS').breakLine
const ReplaceAll = require('../tools/replaceAll').ReplaceAll

async function InsertTxt(filePath) {
  const hasFile = await fileExists.fileExists(filePath)

  if (hasFile) {
    let strFile = await readFile(filePath)

    // OK, WORK
    const strSearchStart = `<VirtualHost 162.241.103.39:443>
  ServerName api.archshop.com.br
  ServerAlias www.api.archshop.com.br
  DocumentRoot /home/archshopcom/public_html/api
  ServerAdmin webmaster@api.archshop.com.br
  UseCanonicalName Off
`
    // const strSearchStart = '<VirtualHost 162.241.103.39:443>' + breakLine() +
    //   '  ServerName api.archshop.com.br' + breakLine() +
    //   '  ServerAlias www.api.archshop.com.br' + breakLine() +
    //   '  DocumentRoot /home/archshopcom/public_html/api' + breakLine() +
    //   '  ServerAdmin webmaster@api.archshop.com.br' + breakLine() +
    //   '  UseCanonicalName Off' + breakLine()

    // const strSearchAdd = '  ProxyPreserveHost On' + breakLine() +
    //   '  ProxyPass / http://localhost:3333/' + breakLine() +
    //   '  ProxyPassReverse / http://localhost:3333/' + breakLine()

    const strSearchAdd = `  ProxyPreserveHost On
  ProxyPass / http://localhost:3333/
  ProxyPassReverse / http://localhost:3333/
`
    // '  # Lines add by nodejs' + breakLine()

    const strFull = strSearchStart + strSearchAdd

    // Not found
    if (strFile.search(strFull) < 0) {
      // Find text, replace
      console.log('443 pass 1')
      console.log(strFile.search(strSearchStart))
      console.log(strSearchStart)
      if (strFile.search(strSearchStart) > 0) {
        const strFileNew = ReplaceAll(strFile, strSearchStart, strFull)
        console.log('443 pass 2', strFileNew)
        await writeFile(process.env.FILE_HTTPD_CONF, strFileNew)
        strFile = strFileNew
      }
    }

    // Repeat to port 80
    const strFull80 = ReplaceAll(strFull, '<VirtualHost 162.241.103.39:443>', '<VirtualHost 162.241.103.39:80>')

    // Not found
    if (strFile.search(strFull80) < 0) {
      const strSearchStart80 = ReplaceAll(strSearchStart, '<VirtualHost 162.241.103.39:443>', '<VirtualHost 162.241.103.39:80>')
      // Find text, replace
      if (strFile.search(strSearchStart) > 0) {
        // console.log(strSearchStart80)
        const strFileNew = ReplaceAll(strFile, strSearchStart80, strFull80)
        // console.log('80', strFileNew)
        await writeFile(process.env.FILE_HTTPD_CONF, strFileNew)
      }
    }

    console.info('Finished')
  }
}

console.log(process.env.FILE_HTTPD_CONF)
InsertTxt(process.env.FILE_HTTPD_CONF)
