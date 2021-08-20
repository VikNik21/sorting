function sortArray(arr) {

    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] < arr[j - 1]) {
                const temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            console.log('sorted', arr);
            return;
        }
        console.log(arr);
    }
}

const myArray = [24, 1, 11, 5, 3, 12, 6, 4, 15, 14];
const myArray2 = [24, 1, 11, 5, 3, 12, 43, 58, 100, 101, 102, 103];

sortArray(myArray2);
