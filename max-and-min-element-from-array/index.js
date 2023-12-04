const arr = [1, 2, 2, 4, 5, 6, 6]

const maxAndMin = (arr) => {
    let max = arr[0]
    let min = arr[0]
    arr.forEach(el => {
        if (el > max) {
            max = el
        }

        if (el < min) {
           min = el
        }
    })
    console.log('maxAndMin', {max, min})
}
const maxAndMinWithMath = (arr) => {
    let max = arr[0]
    let min = arr[0]

    arr.forEach(el => {
        max = Math.max(el, max)
        min = Math.min(el, min)
    })
    console.log('maxAndMinWithMath', {max, min})
}
const maxAndMinWithReduce = (arr) => {
    let result = arr.reduce((accumulator, currentValue) => {
        return {
            'max': Math.max(accumulator['max'], currentValue),
            'min': Math.min(accumulator['min'], currentValue)
        }
    }, {max: arr[0], min: arr[0]})
    console.log('maxAndMinWithReduce', result)
}
const maxAndMinWithSort = (arr) => {
    const copyArr = [...arr]
    copyArr.sort((a, b) => a - b)
    console.log('maxAndMinWithSort', {max: copyArr[copyArr.length - 1], min: copyArr[0]})
}
const maxAndMinWithDestructuring = (arr) => {
    console.log('maxAndMinWithDestructuring', {max: Math.max(...arr), min: Math.min(...arr)})
}

maxAndMin(arr)
maxAndMinWithMath(arr)
maxAndMinWithReduce(arr)
maxAndMinWithSort(arr)
maxAndMinWithDestructuring(arr)
