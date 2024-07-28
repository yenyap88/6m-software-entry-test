/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x or y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y){
    // Task 1: Add code here

    if (typeof x !== 'number' || typeof y !== 'number') {  	// if x or y is not numeric.
        return -1; // to return -1 if x or y is no numeric.
    }
	
	// Task 2: Add code here
	
	  // Swap the values of x and y // can use the destructuring assignment [x, y] = [y, x]; or below
    let temp = x; // Store x in a temporary variable
    x = y; // Assign the value of y to x
    y = temp; // Assign the value of temp (original x) to y
		
    // Print the swapped values
    console.log("Swapped values: x =", x, "y =", y);
}

// Test the function with the given scenarios
console.log(swap("Apple", 10));  // This should return and print -1
console.log(swap(9, 17));        // This should print the swapped values: x = 17 y = 9
	
	
	
}
