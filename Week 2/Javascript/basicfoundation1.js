// Get 1 to 255
function numArr() {
    var result = [];
    for (var i = 1; i <= 255; i++) {
        result.push(i);
    }
    console.log(result);
    return Array;
}

numArr();

// Get even 10000
function evenSum() {
    sum = 0;
    for (var i = 1; i < 1001; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    console.log(sum);
    return sum;
}

evenSum();

// Sum odd 5000
function oddSum() {
    sum = 0;
    for (var i = 1; i < 5001; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    console.log(sum);
    return sum;
}

oddSum();

// Iterate an array
function arrSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum;
}

arrSum([1, 2, 3, 4]);

// Find max
function findMax(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
    return max;
}

findMax([3, 3, 4, 80, -30, -100]);

// Find average
function arrAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log(avg);
    return avg;
}

arrAvg([1, 3, 5, 7, 20]);

// Array odd
function arrOdd(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0 && arr[i] < 50) {
            result.push(arr[i]);
        }
    }
    console.log(result);
    return result;
}

arrOdd([1, 4, 6, 9, 16, 5, 49, 101, 50, 51, 2, 21, 22]);

// Greater than Y
function greaterThanY(arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (y < arr[i]) {
            count++;
        }
    }

    console.log("count is" + count);
    return count;
}

greaterThanY([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);

// Squares
function squares(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2;
    }
    console.log(arr);
    return arr;
}

squares([1, 5, 10, -2]);

// Negatives
function negatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
    return arr;
}

negatives([1, 5, 10, -2]);

// min max average
function minMaxAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0]; 
    var avg = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    avg = sum/arr.length;
    console.log([max, min, avg]);
    return [max, min, avg];
}


minMaxAvg([-1, -2, -3, -4]);
minMaxAvg([-4, -3, -2, -1]);
minMaxAvg([1, 2, 3, 4, 5]);

// Swap first and last values of an array
function swapVals(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;

    console.log(arr);
    return arr;
}

swapVals([1,5,10,-2]);

// Number to string
function numToString(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
    return arr;
}

numToString([-1,-3,4,-5,1,2,3]);