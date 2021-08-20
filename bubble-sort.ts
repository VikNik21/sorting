function sortArray(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] < arr[j - 1]) {
                const temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
        console.log(arr);
    }
}
const myArray = [24, 1, 11, 5, 3];
const myArray2 = [24, 1, 11, 5, 3, 12, 43, 58, 100, 101, 102, 103];

sortArray(myArray2);
