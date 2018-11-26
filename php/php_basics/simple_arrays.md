# Simple Arrays

PHP uses zero based indices like other programming languages.

## Index
```php
$odd_numbers = [1,3,5,7,9];
$first_odd_number = $odd_numbers[0];
$second_odd_number = $odd_numbers[1];

echo "The first odd number is $first_odd_number\n";
echo "The second odd number is $second_odd_number\n";
```

## Add items
```php
$odd_numbers = [1,3,5,7,9];
$odd_numbers[5] = 11;   // [1,3,5,7,9,11]  
```

## Remove items - unset
```php
$odd_numbers = [1,3,5,7,9];
unset($odd_numbers[2]);     // [1,3,7,9]
```

## Count
```php
$odd_numbers = [1,3,5,7,9];
echo count($odd_numbers);   // 5
```

## First element
```php
$odd_numbers = [1,3,5,7,9];
$first_item = reset($odd_numbers);  // Will reset the internal pointer to the first element

echo $first_item;                   // 1
echo $odd_numbers[0];               // 1 - can also get first element using index syntax
```

## Last element
```php
$odd_numbers = [1,3,5,7,9];             
$last_item = end($odd_numbers);     // Will get the last element of $odd_numbers
echo $last_item;

$last_index = count($odd_numbers) - 1;      // Another way to get last element
$last_item = $odd_numbers[$last_index];
echo $last_item;
```

## Push
```php
$numbers = [1,2,3];
array_push($numbers, 4);    // Now array is [1,2,3,4]
```

## Pop
```php
$numbers = [1,2,3,4];
array_pop($numbers);    // Now array is [1,2,3] - removes the last element
```

## Unshift
```php
$numbers = [1,2,3];
array_unshift($numbers, 0);  // Now array is [0,1,2,3] - pushes an element to the beginning
```

## Shift
```php
$numbers = [0,1,2,3];
array_shift($numbers);      // Now array is [1,2,3] - pops an element from the beginning
```

## Merge
```php
$odd_numbers = [1,3,5,7,9];
$even_numbers = [2,4,6,8,10];
$numbers = array_merge($odd_numbers, $even_numbers); // Merge two arrays in first-second order
```

## Sorting
```php
$numbers = [4,2,3,1,5];
sort($numbers);        // [1,2,3,4,5] - sort the array 
rsort($numbers);       // [5,4,3,2,1] - reverse sort the array
```

## Advanced
```php
$numbers = [1,2,3,4,5,6];

array_slice($numbers, 3);       // Discard the first three OR Keep from 3rd index
array_slice($numbers, 3, 2);    // Same as above, but 2 indicates how many elements to keep
array_splice($numbers, 3, 2);   // Same as above, but removes the rest (slice from original array)
```

