#!/usr/bin/env node
let fs = require("fs")
let path = require("path")
let helpObj = require('./commands/Help')
let treeObj = require('./commands/Tree')
let organizerObj = require('./commands/Organizer') 
let types = require('./utility')

let args = process.argv.slice(2)
console.log(args)


// node main.js tree {directoryPath}
// node main.js organize {directoryPath}
// node main.js help


let cmd = args[0]
switch(cmd){
    case "tree":
        treeObj.treeKey(args[1])
        break
    case "organize":
        organizerObj.organizerKey(args[1])
        break
    case "help":
        helpObj.helpKey(args[1])
        break
    default:
        console.log("Pls input right cmd")            
}







