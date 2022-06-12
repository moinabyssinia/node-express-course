const { readFileSync, writeFileSync } = require('fs')

console.log('start');

const first = readFileSync('./content/Daniel.json', 'utf8')
const second = readFileSync('./content/Matthew.json', 'utf8')

console.log(first.chapters, second.chapters);

first_ch1 = JSON.parse(first).chapters[0].verses[0].text
second_ch1 = JSON.parse(second).chapters[0].verses[0].text



// writing files
// if the file exists, node will overwrite it 
writeFileSync('./content/result-sync.txt', 
    `Here is the result : ${first_ch1}, ${second_ch1}`)

// if we want to append to the file 
writeFileSync('./content/result-sync.txt', '... that is the appended version.', { flag: 'a' })

console.log('done with this task');
console.log('starting the next one');
