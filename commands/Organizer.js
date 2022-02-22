let fs = require("fs")
let path = require("path")

function organizerfn(dirname){
    if(dirname == undefined){
       let currPath = process.cwd()
       let destPath = path.join(dirname, "organized files")
       organizeHelper(currPath, destPath)
       return
    }
    let whetherExist = fs.existsSync(dirname)
    if(!whetherExist){
       console.log("pls enter the correct path")
       return
    }  
    else{
        let destPath = path.join(dirname, "organized files")
        if(fs.existsSync(destPath)){
            organizeHelper(dirname, destPath)
        }
        else{
            fs.mkdirSync(destPath)
        }
    }  

    // input - dir path name
    // create organized files dir
    // identify category of the each file
    // cut and paste the given file in the organized dir category folder

 }

function organizeHelper(src, dest){
   let files = fs.readdirSync(src)
   files.forEach(file => {
       let filePath = path.join(src,file)
        let fileOrFolder = fs.lstatSync(filePath)
        if(fileOrFolder.isFile()){
           let type = getType(filePath)
           cutAndPasteFiles(filePath, dest, type)
        }
   });
}

function getType(filePath){
    let ext = path.extname(filePath)
    ext = ext.slice(1)
    for(let i=0 ;i<types.length; i++){
        if(ext == types[i]){
            return ext
        }
    }
    return "other"

}

function cutAndPasteFiles(src, dest, type){
    console.log("nnnnn")
    let typePath = path.join(dest, type)
    if(!fs.existsSync(typePath)){
        fs.mkdirSync(typePath)
    }
    let fileName = path.basename(src)
    let destFileName = path.join(typePath, fileName)
    fs.copyFileSync(src, destFileName)
    fs.unlinkSync(src)
    console.log(fileName, " copied to ", type)
}

module.exports = {
    organizerKey: organizerfn
}