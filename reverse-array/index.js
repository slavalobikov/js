const arr = [1, 2, 2, 4, 5, 6, 6];

const reverseWithForCycle = (arr) => {
    const copy = [...arr]
    const result = []
    for (let i = copy.length - 1; i >= 0; i--) {
        result.push(copy[i])
    }
    console.log('reverseWithForCycle', result)
}

const reverseWithMap = (arr) => {
    const result = arr.map((el, index, arr) => arr[arr.length - index - 1])
    console.log('reverseWithMap', result)
}

const reverse = (arr) => {
    const result = [...arr].reverse()
    console.log('reverse', result)
}

reverseWithForCycle(arr)
reverseWithMap(arr)
reverse(arr)
