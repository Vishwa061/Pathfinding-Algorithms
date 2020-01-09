export let TwoDArray = size => {
    let arr = []

    for (let i = 0; i < size; i++) {
        arr[i] = []
    }
    return arr
}

export function ArrayContains(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].equals(element)) {
            return true
        }
    }
    return false
}