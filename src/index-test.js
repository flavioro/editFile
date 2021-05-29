const fs = require('fs');
const fileExists = require('./tools/checkFile')
const books = require('./tools/test')


async function validFile() {
  let fileExists1 = await fileExists.fileExists("./src/tmp/httpd.conf");


  if (fileExists1) {
    console.log('Here read file')
  }

  console.log(books.favoriteBook().title)
  console.log('Here text')
  const Cat = books.Cat
  let cat1 = new Cat("Manny");
  console.log(cat1.name)
}



validFile()