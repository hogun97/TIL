# For Loops

A simple loop that helps us iterate over an iterable variable by using an index.
There are two types: for-loops and foreach loops.

## For Loop

Printing every item in a list takes time - using a for-loop to iterate over all items is more efficient.
```php
$odd_numbers = [1,3,5,7,9];
for ($i = 0; $i < count($odd_numbers); $i=$i+1) {
    $odd_number = $odd_numbers[$i];
    echo $odd_number . "\n";
}
```
    - Initialization statement: initialize $i to 0
    - Condition statement: loop stops when this condition is met
    - Increment statement: executed every 

## Foreach Loop

Foreach loop iterates over an iterable element such as an array or an object.
```php
$odd_numbers = [1,3,5,7,9];
foreach ($odd_numbers as $odd_number) {
    echo $odd_number . "\n";
}
```

```php
$phone_numbers = [
  "Alex" => "415-111-2222",
  "Jessica => "415-222-1111",
];

foreach ($phone_numbers as $name => $number) {
    echo "$name's number is $number.\n";
}
```
Here, we have two things to display:
    - Array or object that we are referring to
    - How we would like to access the items in that array or object

