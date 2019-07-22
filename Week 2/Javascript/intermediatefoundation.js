// 1. Sigma
function sigma(num) {
    if (num <= 0) {
        return 0;
    }

    else {
        return (num + sigma(num - 1));

    }
}

var s = sigma(4);
console.log(s);

// 2. Factorial
function factorial(num) {
    if (num <= 0) {
        return 1;
    }

    else {
        return num * factorial(num - 1);
    }
}

var fac = factorial(4);
console.log(fac);

// 3. Fibonacci
function fibonacciIterative(num) {
    if (num == 0) {
        return 0;
    }

    if (num == 1) {
        return 1;
    }

    var prev = 0;
    var twoPrev = 0;
    var current = 1;
    for (var i = 1; i < num; i++) {
        twoPrev = prev;
        prev = current;
        current = twoPrev + prev;
    }
    return current;
}

var fib = fibonacciIterative(4);
console.log("Iterative: " + fib);

// 4. second to last
function secondToLast(arr) {
    if (arr.length < 2) {
        return null;
    }
    else {
        return arr[arr.length - 2];
    }
}

var s = secondToLast([42, true, 4, "Liam", 7]);
console.log(s);

// 5. Array: Nth to Last
function nthToLast(arr, num) {
    if (arr.length < 2) {
        return null;
    }
    else {
        return arr[arr.length - num];
    }
}

var n = nthToLast([5, 2, 3, 6, 4, 9, 7], 3);
console.log(n);

// 6. Array Second Largest
function secondLargest(arr) {
    var largest = arr[0];
    var nextlargest = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            nextlargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > nextlargest && arr[i] != largest) {
            nextlargest = arr[i];
        }
    }

    console.log("Second Largest: " + nextlargest);
}

secondLargest([4,2,3,2,5]);



// 7. Double Trouble
function doubleTrouble(arr) {
    var len = arr.length;
    for (var i = len; i > 0; i--) {
        arr[2 * len - 1] = arr[len - 1];
        arr[2 * len - 2] = arr[len - 1];
        len--;
    }

    console.log(arr);
}

doubleTrouble([1, 2, 3, 4]);

//////////////////////// Part 2/////////////////////////////////

function fibonacciRecursive(n) {
    if (n == 0) {
        return 0;
    }

    if (n == 1) {
        return 1;
    }

    else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}

var fibrec = fibonacciRecursive(2);
console.log("recursive: " + fibrec);

// Recursive fill
function fill(x, y, original_color, color) {

    if (y < 0 || x < 0 || y >= world.length || x >= 10) {
        return false;
    }

    if (world[y][x] != original_color) {
        return false;
    }

    world[y][x] = color;

    fill(x, y - 1, original_color, color);
    fill(x, y + 1, original_color, color);
    fill(x + 1, y, original_color, color);
    fill(x - 1, y, original_color, color);


    drawWorld();

}