# Strings

Strings are variables that hold text.
```php
$name = "John";
$introduction = "Hello $name";   // A string can be stored in a string 
echo $name;
echo $introduction;
```

We can concatenate strings using the dot operator:
```php
$first_name = "John";
$last_name = "Doe";
$name = $first_name . " " . $last_name;
echo $name;
```

We can measure length of a string using `strlen`
`strlen` just takes one parameter: string to be counted
```php
$string = "Hello World";
echo strlen($string)      // 11 
```

We can cut a part of a string and return it as a new string using `substr`
`substr` takes two parameters: original string and the number of character to be cut out
```php
$filename = "image.png";
$extension = substr($filename, strlen($filename) - 3);
echo "$extension";      // png
```

We can join arrays to form strings using `explode` function
`explode` takes two parameters: separator symbol and the in string list
```php
$fruits = "apple,banana,orange";
$fruit_list = explode(",", $fruits)  // [apple, banana, orange]
echo "The second fruit in the list is $fruit_list[1]";  // banana
```

We can join back an array to a single string using `implode` function
`implode` takes two parameters: separator symbol and array with string variables
```php
$fruit_list = ["apple","banana","orange"];
$fruits = implode(",", $fruit_list);
echo "The fruits are $fruits";
```

