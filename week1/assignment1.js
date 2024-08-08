const crypto = require('crypto')

function findHashStartWith(prefix){
    let input = 0;
    while (true) {
        let inputStr = input.toString()
        const hash = crypto.createHash('sha256').update(inputStr).digest('hex')
        
        if(hash.startsWith(prefix)){
            return {input:inputStr , hash:hash}
        }

        input++
    }
}

const result = findHashStartWith('00000')
console.log(`The result is this object :`, result);
