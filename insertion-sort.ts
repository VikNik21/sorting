function sortArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i-1;
        while( j >= 0 && arr[j] > current){
            arr[j+1]  = arr[j];
         j--;
        }
        arr[j+1] = current;
        console.log(arr);
    }
}

const myArray = [24, 1, 11, 5, 3, 12, 43, 85, 100, 101];

sortArray(myArray);
