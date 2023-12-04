const arr = [{name: 'John Doe', age: 20}, {name: 'Alex', age: 25}, {name: 'alex', age: 30}]

const sortByName = (arr) => {
    console.log([...arr].sort((a, b) => {
       return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
    }))
}

sortByName(arr)
