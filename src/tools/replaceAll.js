function ReplaceAll (string, search, replace) {
  const stringNew = String(string).split(search).join(replace)

  return stringNew
}

module.exports.ReplaceAll = ReplaceAll
