let somethingElse = require('./something-else')
let someVar = 'someVar'

class Something {
  constructor() {
    console.log(`I'm Something`)
    console.log(`And this someVar is ${someVar}`)
  }
}

console.log('do stuff')
new Something()
