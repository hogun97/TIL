# Functions

Functions are simple code blocks we can call from anywhere.
There are two types of functions:
    1. Library functions: ones that are part of PHP library - public
    2. User functions: own functions - private (only across codes)

```php
// define a function called 'sum' that will 
// receive a list of numbers as an argument
function sum($numbers) {
    // initialize the variable we will return
    $sum = 0;

    // sum up the numbers
    foreach ($numbers as $number) {
        $sum = $sum + $number;
    }

    // return the sum to the user
    return $sum;
}

// example usage
echo sum([1,2,3,4,5,6,7,8,9,10]);
```

To exemplify a user function, one could store the above code in sum.php.
And to call `sum` from sum.php, one would have to:
```php
include("sum.php");     // Will import all functions from sum.php

echo sum([1,2,3,4,5,6,7,8,9,10]);
```

