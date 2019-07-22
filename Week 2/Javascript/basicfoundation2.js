// Biggie Size
function biggieSize(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "Big";
        }
    }
    return arr;
}

biggieSize(([-1, 3, 5, -5]));

// Print Low Return High
function lowHigh(arr) {
    var max = arr[0];
    var min = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }

    console.log(min);

    return max;
}

lowHigh([1, 2, 3, 4, 5, 6]);

// Print One, Return Another
function printLastReturnFirst(arr) {
    console.log(arr[arr.length - 2]);
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1 && count == 0) {
            count++;
            return arr[i];
        }
    }
    console.log("There were no odd numbers in the array.")
}

printLastReturnFirst([2, 2, 2, 4, 50]);
printLastReturnFirst([21, 2, 2, 14, 50]);
printLastReturnFirst([2, 2, 2, 41, 51]);

// Double Vision
function doubleVision(arr) {
    result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }

    console.log(result);
    return result;
}

doubleVision([2, 3, -4, 10]);

// Count positives
function countPositives(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    arr[arr.length - 1] = count;
    console.log(arr);
    return arr;
}

countPositives([-1, 1, 1, 1])

// Evens and Odds
function evensAndOdds(arr) {
    var oddcount = 0;
    var evencount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0 && oddcount < 3) { //odd
            oddcount++;
            evencount = 0;
        }
        if (arr[i] % 2 == 0 && evencount < 3) {
            evencount++;
            oddcount = 0;
        }

        if (oddcount == 3) {
            console.log("That's odd!");
            oddcount = 0;
        }

        if (evencount == 3) {
            console.log("Even more so!");
            evencount = 0;
        }


    }
}

evensAndOdds([2, 2, 4, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2]);

// Increment the seconds
function addToOdd(arr) {
    for (var i = 1; i < arr.length; i += 2) {
        arr[i] = arr[i] + 1;
        console.log(arr[i]);
    }
    return arr;
}

addToOdd([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 11]);

// pervious Lengths
function previousLengths(arr) {
    for(var i = arr.length -1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }
    console.log(arr);
    return arr;
}

previousLengths(["hello", "dojo", "awesome","yo"]);

// Add Seven
function addSeven(arr) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        result[i] = arr[i] + 7;
    }

    console.log(result);
    return arr;
}

addSeven([1,2,3]);

// reverse array
function reverseArray(arr) {
    var temp = 0;
    var len = arr.length;
    for(var i = 0; i < arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[len -1];
        arr[len-1] = temp;
        len--;
    }

    console.log(arr);
    return arr;
}

reverseArray([1,2,3,4,5]);
reverseArray([5,4,2,6]);
reverseArray([1,0]);

// Outlook negative
function negative(arr) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            result[i] = arr[i] * -1;
        }

        else{
            result[i] = arr[i];
        }
    }

    console.log(result);
    return result;
}

negative([1,-3,5]);

// Swap towards center
function swapTowardsCenter(arr) {
    var temp = 0;
    temp = arr[0];
    arr[0] = arr[arr.length -1];
    arr[arr.length -1] = temp;

    temp = arr[2];
    arr[2] = arr[arr.length -3];
    arr[arr.length -3] = temp;

    console.log(arr);
}

swapTowardsCenter([1,2,3,4,5,6]);

// Scale the array
function scaleArray(arr, num) {
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    console.log(arr);
    return arr;
}

scaleArray([1,2,3], 3);