let fs = require("fs")
let path = require("path")

function helpfn(dirname){
    console.log(`
    List of all cmds:
        node main.js tree {directoryPath}
        node main.js organize {directoryPath}
        node main.js help
    `);
 }

module.exports = {
    helpKey : helpfn
} 