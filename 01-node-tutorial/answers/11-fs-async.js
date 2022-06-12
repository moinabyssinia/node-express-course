const { readFile, writeFile } = require('fs')

console.log('start');

readFile('./content/Daniel.json', 'utf-8' ,(err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;

    console.log('finished first task');

    readFile('./content/Matthew.json', 'utf-8' ,(err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;

        console.log('finished second task');

        writeFile('./content/result-async.txt', 
        `Here is the result : ${first}, ${second}`,
        (err, result) => {
            if (err){
                console.log(err);
                return
            }
            console.log(result);
            console.log('finished writing files');
        })


    })

})

console.log('Finished everything');