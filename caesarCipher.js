const alphabet = "abcdefghijklmnopqrstuvwxyz";
const args = process.argv.slice(2);

const words = args[0].split(' ');
let shift = parseInt(args[1]);

shift = Math.abs(shift) > alphabet.length ? shift % alphabet.length : shift;

words.forEach((word, index, array) => {
    for (let i = 0; i < word.length; i++) {
        
        const position = alphabet.indexOf(word[i].toLowerCase());
        
        let newPos = (position + shift + alphabet.length) % alphabet.length;
        
        console.log(newPos);

        word = word.slice(0, i).concat(alphabet[newPos], word.slice(i + 1));
    }

    array[index] = word; 
});

words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();

console.log("RESULT:" + words.join(" "));