const checkFile = require('./checkFile')

describe('Check File Exist', () => {
  it('should be able to check file exist', async () => {
    const fileExist = await checkFile.fileExists('./src/tmp/httpd.conf')

    expect(fileExist).toBe(true)
  })
})
