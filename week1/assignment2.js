const crypto = require('crypto')

function findHashStartWith(prefix){
    let input = 0;
    while (true) {
        let inputStr = input.toString()
        // When we have to include some word in start like 100xdevs
        const hash = crypto.createHash('sha256').update(`100xdevs${inputStr}`).digest('hex')
        
        if(hash.startsWith(prefix)){
            return {input:inputStr , hash:hash}
        }

        input++
    }
}

const result = findHashStartWith('00000')
console.log(`The result is this object :`, result);
