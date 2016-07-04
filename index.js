var esprima = require('esprima');
var doctrine = require('doctrine');
var fs = require('fs');
var utility = require('utilityFileSystem');
function handleProgram(process){
    this.arguments = processArgs(process);
    this.commands = {};
    this.args = [];
    this.docs = getDocs();
    
}
/**
 * 
 */
handleProgram.prototype.addCommand = function(name,fnc,description){
    var description = description || '';
    var command = {};
    command.call = fnc;
    command.description = description;
    //when a command is added...the corresponding function's jsdoc is used for its description.
    this.commands[name] = command;
}

handleProgram.prototype.call = function(functionName){
    if (this.commands[functionName]!=null){
        console.log('calling ' + functionName);
    }
    else{

    }
}
handleProgram.prototype.quit = function(){
    process.exit(1);
}

handleProgram.prototype.args = function(){
    console.log(this.args);
}

handleProgram.prototype.checkCommands = function(){
    for (command in this.commands){
        console.log(String.raw `${command} command calls function: ${this.commands[command].description} `);
    }
}
handleProgram.prototype.run = function(){
    
}

function processArgs(process){
    //this program takes up to three arguments, all optional parameters in coding perspective.
    //var arg1 = || arg1;
    var args = process.argv;
    console.log("args in function: ",args);
    var arguments = args.slice(2,args.length);
    var length = arguments.length;
    //how many arguments does this program want to handle?
    console.log(arguments);
    return arguments;
}

function getDocs(){
    console.log('getting docs');
    // var src = "<div>cool</div>";
    var currentPath = __dirname;
    console.log(currentPath);
    console.log(__filename);
    //console.log(__dirname.sep);
    console.log(currentPath.split("\\"));
    
    utility.readFile(__filename);
    var src = utility.readFile(__filename);
    var ast;
    if(src){
        ast = esprima.parse(src,{attachComment:true,loc:true});
        // console.log(ast);    
    }
    return ast.comments;
}

module.exports = handleProgram;