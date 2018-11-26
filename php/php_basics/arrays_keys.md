# Arrays with Keys

PHP arrays are actually ordered maps.
All values have keys and items inside preserve order.

## Common use-case: phonebook
```php
$phone_numbers = [
  "Alex" => "415-235-8573",
  "Jessica" => "415-492-4856",
];

print_r($phone_numbers);
echo "Alex's phone number is " . $phone_numbers["Alex"] . "\n";
echo "Jessica's phone number is " . $phone_numbers["Jessica"] . "\n";
```

## Exists
```php
$phone_numbers = [
  "Alex" => "415-235-8573",
  "Jessica" => "415-492-4856",
];
// array_key_exists takes a key value and the array of reference and returns boolean value
// Check if Alex's number is in the phonebook using array_key_exists function
if (array_key_exists("Alex", $phone_numbers)) {
  echo "Alex's phone number is " . $phone_numbers["Alex"] . "\n";
} else {
  echo "Alex's phone number is not in the phonebook!";
}
```

## Key-Values
```php
$phone_numbers = [
  "Alex" => "415-235-8573",
  "Jessica" => "415-492-4856",
];

array_keys($phone_numbers);     // Gets all keys (only) of the given array
array_values($phone_numbers);   // Gets all values (only) of the given array
```

