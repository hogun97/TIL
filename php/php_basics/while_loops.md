# While Loops

While loops are simple blocks that execute repeatedly until the while loop condition is not met.
```php
$counter = 0;

while ($counter < 10) {
    $counter += 1;      // counter will increment until it reaches 10
    echo "Executing - counter is $counter.\n";
}
```

For Loop: iterate over an array or object
While Loop: execute unknown amount of times depending on variable condition

## Flow statements

Loops can be controlled using the `break` and `continue` flow statements
`break`: immediately quits the for loop at the middle of the block
`continue`: returns to the top of the while loop, re-checking whether the loop condition is met.

### Continue

Here, all even numbers will be skipped. 
Once an even number is skipped, the loop will go back to the condition.
The loop will be re-iterated without crashing.
```php
$counter = 0;

while ($counter < 10) {
    $counter += 1;

    if ($counter % 2 == 0) {
        echo "Skipping number $counter because it is even.\n";
        continue;
    }

    echo "Executing - counter is $counter.\n";
}
```

### Break

Here, we will add one break condition of stopping the loop iteration when a specified condition has been met.
In this case, if the incremented counter is larger than 8, the loop will break. 
```php
$counter = 0;

while ($counter < 10) {
    $counter += 1;
    
    if ($counter > 8) {
        echo "counter is larger than 8, stopping the loop.\n"
        break;
    }
    
    if ($counter % 2 == 0) {
        echo "Skipping number $counter because it is even.\n";
        continue;
    }

    echo "Executing - counter is $counter.\n";
}
```

