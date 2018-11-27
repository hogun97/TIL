# Objects

PHP is an object oriented language.

## Class and Object

- `class` is a definition of an object
- `object` is an instance of an object - can create multiple objects in a class

```php
class Student {
    // constructor
    public function __construct($first_name, $last_name) {
        $this->first_name = $first_name;
        $this->last_name = $last_name;
    }

    public function say_name() {
        echo "My name is " . $this->first_name . " " . $this->last_name . ".\n";
    }
}

$alex = new Student("Alex", "Jones");
$alex->say_name();
```
### Analysis

A constructor function is executed when an object of class Student is created.
The constructor then receives arguments for later use - when `new` keyword is called.
Here, we created a variable $alex to store a new object of class Student. 
We also created `say_name()` method to print out the name of the student.
`say_name()` will not receive any arguments because first and last names of the student has already been defined in the constructor.

### Definitions

- Classes: define how objects behave - do not contain data `Student`
- Objects: instances of classes - contain data `Alex Jones`
- Members: variables that belong to an object `$alex`
- Methods: functions that belong to an object - have access to its members `say_name()`
- Constructor: a special method that is executed when an object is created

## Inheritance

The most important feature of OOP is inheritance
Inheritance allows us to reuse code we've written and extend it

```php
class Student {
    // constructor
    public function __construct($first_name, $last_name) {
        $this->first_name = $first_name;
        $this->last_name = $last_name;
    }

    public function say_name() {
        echo "My name is" . $this->first_name . " " . $this->last_name . ".\n";
    }
}

$alex = new Student("Alex", "Jones");
$alex->say_name();

class MathStudent extends Student {
    function sum_numbers($first_number, $second_number) {
        $sum = $first_number + $second_number;
        echo $this->first_name . "says that" . $first_number . " + " . $second_number . "is " . $sum;
    }
}

$eric = new MathStudent("Eric", "Chang");
$eric->say_name();
$eric->sum_numbers(3,5);
```
Here, we can see that the new class MathStudent extends Student.
Therefore, it has access to the `say_name()` method previously defined in class Student.
Also, `sum_numbers()` method takes two arguments - becomes unnecessary to use $this syntax.

## Public and Private Functions

We can use `public` and `private` modifiers.
These modifiers define whether a function can be accessed from outside the object or not.
Using these modifiers gives a better understanding of how objects should be used - internal or external

```php
// for external use
public function say_name() {
    echo "My name is " . $this->full_name() . "\n";
}

// for internal use
private function full_name() {
    return $this->first_name . " " . $this->last_name;
}

$alex = new Student("Alex", "Jones");

$alex->say_name();      // will work since say_name() is external
$alex->full_name();     // will not work since full_name() is internal
```

