const replaceStr = require('./replaceAll')

describe('Search and replace text', () => {
  it('should be able to search and replace text', async () => {
    const strReplace = replaceStr.ReplaceAll('Do more', 'more', 'more and more')

    expect(strReplace).toBe('Do more and more')
  })
})
