const arr = [6, 6, 100, 1, 2, 2, 4, 5]

const sort = (arr) => {
    const copyArr = [...arr].sort((a, b) => a - b)
    console.log('sort', copyArr)
}

const sortWithoutSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    let midIndex = Math.floor(arr.length / 2)
    let pivot = arr[midIndex]
    let right = []
    let left = []

    for (let i = 0; i < arr.length; i++) {
        if (i === midIndex) {
            continue
        }

        if (arr[i] <= pivot) {
            left.push(arr[i])
        }

        if (arr[i] > pivot) {
            right.push(arr[i])
        }
    }

    return [...sortWithoutSort(left), pivot, ...sortWithoutSort(right)]
}

sort(arr)
console.log('sortWithoutSort', sortWithoutSort(arr))
