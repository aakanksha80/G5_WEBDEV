const { unlink } = require('node:fs/promises');

(async function(path) {
  try {
    await unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error('there was an error:', error.message);
  }
})('./something.txt');const addTwoNumber = () =>{
    console.log("SUM OF TWO NUMBER");
}

const subNumber = () =>{
    console.log("SUB OF TWO NUMBER");
}


//NEW UPDATE

const divNumber = () => {
    console.log("THIS IS DIV");
}

// NEW UPDATE 

const multiplyNumber = () =>{ 
    console.log("THIS IS MULTIPLY")
}

//AFTER CHANGESET INSTALLATION

const helloWorld = () =>{
    console.log("HELLO STUDENTS");
}

module.exports = { addTwoNumber, subNumber, divNumber, multiplyNumber, helloWorld};

