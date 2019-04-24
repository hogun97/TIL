# Interacting with OCaml

## Basic CLI syntax

- End an expression with a double semi-colon `;;`
- To quit, enter `#quit;;` (with additional # at the front)

## Types and values

```ocaml
# 42;;
- : int = 42
```
+ `42` is the value
+ `int` is the type of the value
+ The value was not assigned a name `-`

```ocaml
# let x = 42;;
val x : int = 42
```
+ Same as above but value was assigned the name `x`

## Functions

```ocaml
# let increment x = x + 1;;
val increment : int -> int = <fun>
```

+ `increment` is the identifier to which value was bound (function name).
+ `int -> int` means the function takes `int` as an input and returns an `int`.
+ `<fun>` is a placeholder - `<fun>` itself is not a value

```ocaml
# increment 0;;
- : int = 1
# increment(21);;
- : int = 22
# increment (increment 5);;
- : int = 7
```

+ OCaml is flexible with parentheses and whitespaces
+ When do we use parentheses?

## Storing code in files

### Create a file
```
touch hello.ml
open hello.ml
```

### Store Hello World
```ocaml
let _ = print_endline "Hello world!"
```
- _ means we do not care about function name

### Compile hello.ml
```
ocamlc -o hello.byte hello.ml
```
- `ocamlc` is the compiler in OCaml
- `-o hello.byte` creates an executable named `hello.byte` to execute `hello.ml`

### Run the executable
```
./hello.byte
```
- Will print `Hello world!`

## ocamlbuild

### Install ocamlbuild
```
brew install ocamlbuild
```

### Clean the compiled files
```
_build/sanitize.sh
rm hello.byte
```
- This process is necessary because we already compiled `hello.ml`

### Use ocamlbuild
```
ocamlbuild hello.byte
```
- `ocamlbuild -clean` will remove `_build` directory and `hello.byte` link

## Loading code in CLI

### Create a file
```
touch mycode.ml
open mycode.ml
```

### Store inc function
```ocaml
let inc x = x + 1
```

### Start OCaml and use the file
```
ocaml

#use "mycode.ml";;
```

### Test the function
```
inc 3;;
- : int = 4
```

## Printing

`print_int`
`print_string`
`print_float`
`print_endline`

The type for printing statements is `unit`.

`unit` evaluates to `()` only.

```ocaml
print_endline "THIS";
print_endline "IS";
print_endline "3110";;
```

In this case, `e1; e2` will evaluate `e1` to `()`, discard that value, and evaluate `e2`. This is because `e1` and `e2` both have `unit` as type.

However, if `e1` does not have type `unit`, it will throw a warning - whether the value should be ignored or not.

```ocaml
# 3; 5;;
Warning 10: this expression should have type unit
- : int = 5
```

If that is the case, add `ignore` keyword.
```ocaml
# ignore 3; 5;;
- : int = 5
```
