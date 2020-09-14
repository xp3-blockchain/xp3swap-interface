const fs = require('fs')

fs.writeFile('/Users/guyaqi5858/Documents/code/uniswap-interface-master/a.txt', "hel123131lo", function (error) {
  if (error) {
    console.log(error)
  } else {
    console.log(`modify success`)
  }
})