function sortArray(arr) {

    for(let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]) {
                minIndex=j;
            }
        }
        if (minIndex != i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        console.log(arr);
    }
}

const myArray = [24, 1, 11, 5, 3, 12, 43, 85, 100, 101];

sortArray(myArray);
