function handleProgram(args){
    this.arguments = processArgs(args);
    this.commands = {};
    this.args = [];
    
}

handleProgram.prototype.addCommand = function(name,fnc){
    this.commands[name] = fnc;
}

handleProgram.prototype.call = function(functionName){
    if (this.commands[functionName]!=null){
        console.log('calling ' + functionName);
    }
    else{

    }
}

function processArgs(args){
    //this program takes up to three arguments, all optional parameters in coding perspective.
    //var arg1 = || arg1;
    var arguments = args.slice(2,args.length);
    var length = arguments.length;
    //how many arguments does this program want to handle?
    console.log(arguments);
    return arguments;
}

module.exports = handleProgram;