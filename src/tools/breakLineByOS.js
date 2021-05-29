const os = require('os')

// console.log(os.type()) // "Windows_NT"
// console.log(os.release()) // "10.0.14393"
// console.log(os.platform()) // "win32"

// Returns the operating system name as returned by uname(3). For example, it
// returns:
//  'Linux' on Linux,
//  'Darwin' on macOS, and
//  'Windows_NT' on Windows.

function breakLine () {
  if (os.type() === 'Windows_NT') {
    return '\r\n'
  }
  return '\n' // Linux and macOs
}

module.exports.breakLine = breakLine
