const arr = [1, 2, 2, 4, 5, 6, 6]

const sum = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum +=arr[i]
    }
    console.log('sum', sum)
}

const sumWithReduce = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)

sum(arr)
console.log('sumWithReduce', sumWithReduce)
