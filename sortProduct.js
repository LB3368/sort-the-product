const sortThisProduct = (arr) => {
    const sortedArr = arr.map((value, index) => {
        return [value * (index + 1), value]
    })
    sortedArr.sort((a, b) => a[0] - b[0])
    return sortedArr.map(([product, value])=> value)
}
const arr = [23, 2, 3, 4, 5]
const sortedArr = sortThisProduct(arr)
console.log(sortedArr)

//Another option for solving the problem
/*const sortProduct = (arr) => {
    arr.sort((a, b) => a * (arr.indexOf(a) + 1) - b * (arr.indexOf(b) + 1))  
    return arr  
}

const input = [23, 2, 4, 8, 33]
const output = sortProduct(input)
console.log(output)
*/

