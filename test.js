console.log("args: ",process.argv);

//run program on terminal: node test.js
var init = require('./index');
var program = new init(process.argv);

program.addCommand('opt1',runSimpleExample);
program.addCommand('opt2',runSimpleExample);
program.addCommand('opt3',runSimpleExample);

//add options to this program, each option corresponds to a function call.




/**
 * 
 */
function runSimpleExample() {
    
}


//add options to this program, each option corresponds to a function call.
program.checkCommands();
program.run();
program.quit();