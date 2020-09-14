var fs = require("fs")
var path = require("path")


const altDict = {
  "7a250d5630B4cF539739dF2C5dAcb4c659F2488D": "b0fA7AFB86Ffa5dc18F7Cd660F8EE2e8C840a593",
  "5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f": "8AC49b48d87bb3aBfd35be7BAfc993Bb3C6C4be7",
  "96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f": "0da2080c10040035a1cb4377d9505d608f0685e5df68c7dc08faaf2ed6d47961"
}

const searchTargets = [
  "src/constants",
  "src/state/swap",
  "node_modules/@uniswap/sdk/dist",
  "node_modules/@uniswap/v2-periphery/build",
  "node_modules/@uniswap/v2-periphery/contracts/libraries",
]

function findAndReplace(_path) {
  fs.readFile(_path, function (error, data) {
    if (error) {
      console.log(error)
      return
    }
    let str = data.toString();  
    let changed = false; 
    for(let k in altDict) {
      if (str.search(k) != -1) {
        str = str.replace(new RegExp(k, 'g'), altDict[k])
        // console.log(`${k} replaced to ${altDict[k]} in ${_path}`)
        changed = true;
      }
    }
    if (changed) {
      
      fs.writeFile(_path, str, function (error) {
        if (error) {
          console.log(error)
        } else {
          console.log(`modify ${_path}`)
        }
      })
    }
    
  })
}

function readDirSync(_path){
	var pa = fs.readdirSync(_path);
	pa.forEach(function(ele,index){
		var info = fs.statSync(_path+"/"+ele)	
		if(info.isFile()){
      findAndReplace(path.join(_path, ele))
		}
	})
}

for (let seachTarget of searchTargets) {
  const fullPath = path.join(__dirname, seachTarget)
  readDirSync(fullPath)
}