const perform = (str) => {
    let result = [];
    let prev = '';
    let count = 1;

    for (let i = 0; i <= str.length; i++) {
        if (prev === str[i]) {
            count++;
        }

        if ((prev !== str[i]) && i !== 0) {
            result.push(prev + count)
            count = 1
        }
        prev = str[i]
    }
    return console.log(result.join(''))
}

perform('aaaabbbccdddeeeeeeeaa')
