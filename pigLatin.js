const words = process.argv.slice(2);
const consonants =  /[bcdfghjklmnpqrstvwxyz]/i;

words.forEach((word, index, array) => {

    if (isConsonant(word.at(0)) && !isConsonant(word.at(1))) {
        const char = word.at(0);
        word = word.toLowerCase().slice(1).concat(char.toLowerCase(),"ay");
    } else if (isConsonant(word.at(0)) && isConsonant(word.at(1))) {
            const subStr = word.substring(0, 2);
            word = word.toLowerCase().slice(2).concat(subStr.toLowerCase(),"ay");
        } else if (!isConsonant(word.at(0)))
            {
                word = word.toLowerCase().concat("way");
            } 

    array[index] = word;
});

words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();

console.log(words.join(" "));





function isConsonant(char){
    const regex =  /[bcdfghjklmnpqrstvwxyz]/i;

    return (regex.test(char.toLowerCase()));
}