const { getRandomIndex } = require("./random.js");

const args = process.argv.slice(2);

const values = [{"rock":"🪨"}, {"paper":"📄"}, {"scissors":"✂️"}]; 

const results = ["draw", "win", "lose"]

const choiceArg = args[0]; 

let choiceIndex = parseInt(choiceArg);

if (isNaN(choiceIndex))
{
   choiceIndex = values.findIndex(obj => Object.keys(obj)[0] === choiceArg);
}

if (choiceIndex === undefined)
    throw Error("falsch index");

const randomIndex = getRandomIndex(values.length);

let result = results[0];

if (choiceIndex !== randomIndex)
{
    switch (choiceIndex)
    {
        case 0: result = (randomIndex === 1) ? results[1] : results[2];       
        case 1: result = (randomIndex === 2) ? results[1] : results[2];
        case 2: result = (randomIndex === 0) ? results[1] : results[2];
    } 
}


const frame = Object.values(values[choiceIndex])[0];
console.log(frame);

const frames = [
    `${frame}  vs  🪨`,
    `${frame}  vs  📄`,
    `${frame}  vs  ✂️`,
  ];

  let index = 0;
  
  const loader = setInterval(() => {
    process.stdout.write('\x1Bc');
  
    console.log(frames[index++]);

    index %= frames.length;
  }, 500);
  
  setTimeout(() => {
    clearInterval(loader);
    process.stdout.write('\x1Bc');
    console.log(`${Object.values(values[choiceIndex])[0]}  vs  ${Object.values(values[randomIndex])[0]}`);
    console.log(result === results[0] ? `${result}. try again` : `You ${result}`);
  }, 2000);


  