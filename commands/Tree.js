let fs = require("fs")
let path = require("path")

function treefn(dirPath){
    if(dirPath == undefined){
       let currPath = process.cwd()
       treeHelper(currPath,"")
       return
    }
    let whetherExist = fs.existsSync(dirPath)
    if(!whetherExist){
       console.log("pls enter the correct path")
       return
    }  
    else{
       treeHelper(dirPath,"")
    }  
}

function treeHelper(dirPath,indentation){
   let fileOrFolder = fs.lstatSync(dirPath)
   
   if(fileOrFolder.isFile()){
       let fileName = path.basename(dirPath)
       console.log(indentation, fileName)
   }else{
       let dirName = path.basename(dirPath)
       console.log(indentation, dirName+" -->")
       let files = fs.readdirSync(dirPath)
       for(let i=0; i<files.length; i++){
           let filePath = path.join(dirPath, files[i])
           treeHelper(filePath, indentation+"\t") 
       }
       
   }
}

module.exports= {
    treeKey : treefn
}