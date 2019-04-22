# Function

## Function Definitions

```ocaml
let f x = ...
```
- Non-recursive functions
    + `f`: function name
    + `x`: parameter

```ocaml
let rec f x = ...
```
- Recursive functions
    + `rec`: keyword that indicates function `f` is recursive
    + Syntax: `let rec f x1 x2 ... xn = e`

```ocaml
(* requires: n >= 0 *)
(* returns: n! *)
let rec fact n =
    if n=0 then 1 else n * fact (n-1)

(* requires: y >= 0 *)
(* returns: x to the power of y *)
let rec pow x y =
    if y=0 then 1
    else x * pow x (y-1)
```
- Example of a recursive functions (factorial, power)
    + `requires` specifies preconditions
    + `returns` specifies postconditions
    + OCaml compiler infers the types for us automatically

#### Mutually recursive functions

_Needs an `and` keyword_

Syntax:
```
let rec f x1 ... xn = e1
and g y1 ... yn = e2
```

Example:
```ocaml
(* [even n] is whether [n] is even.
 * requires: [n >= 0] *)
 let rec even n =
    n=0 || odd (n-1)

(* [odd n] is whether [n] is odd.
 * requires: [n >= 0] *)
 and odd n =
    n<>0 && even (n-1);;
```

**Syntax for function types:**
```ocaml
t -> u
t1 -> t2 -> u
t1 -> ... -> tn -> u
```
`t -> u` means an input of type t returns an output u.
Having multiple inputs of type t1, ... ,tn is taking multiple arguments to output u.

**Dynamic semantics**
OCaml just records the name `f` to a function with given arguments.
Therefore, there are no dynamic semantics.

**Static semantics**
- Non-recursive: if by assuming that `x1:t1` and `x2:t2` and ... and `xn:tn`, we can conclude that `e:u`, then `f : t1 -> t2 -> ... -> tn -> u`.

- Recursive: if by assuming that `x1:t1` and `x2:t2` and ... and `xn:tn` and `f : t1 -> t2 -> ... -> tn -> u`, we can conclude that `e:u`, then `f : t1 -> t2 -> ... -> tn -> u`.

## Anonymous Functions

We can have values that are not bound to names.

```ocaml
# 42;;
- : int = 42
```

Similar to variables, functions in OCaml can also be anonymous.<br>
In `fun x -> x + 1`,
- `fun` indicates that the function is anonymous
- `x` is the argument
- `->` separates the argument from the body

With `->`, we have two ways of writing a function:
```ocaml
let inc x = x + 1
let inc = fun x -> x + 1
```
The two ways above are _syntactically_ different but _semantically_ identical.

__Syntax__
```ocaml
fun x1 ... xn -> e
```

__Static semantics__

If by assuming that `x1:t1` and `x2:t2` and ... and `xn:tn`, we can conclude that `e:u`, then `fun x1 ... xn -> e : t1 -> t2 -> ... -> tn -> u`.

__Dynamic semantics__

An anoymous function is already a value. There is no computation to be performed.

## Function Application

__Syntax__
```ocaml
e0 e1 e2 ... en
```

__Static semantics__

If `e0 : t1 -> ... -> tn -> u` and `e1:t1` and ... and `en:tn` then `e0 e1 ... en : u`.

__Dynamic semantics__

To evalue `e0 e1 ... en`;

1. Evaluate `e0` to a function. Also evaluate the argument expression `e1` through `en` to values `v1` through `vn`.

    For `e0`, the result might be an anonymous function `fun x1 ... xn -> e`. Or it might be a name `f`, and we have to find the definition of `f`, in which cas let's assume that definition is `let rec f x1 ... xn = e`. Either way, we now know the argument names `x1` through `xn` and the body `e`.

2. Substitute each value `vi` for the corresponding argument name `xi` in the body `e` of the function. That results in a new expression `e'`.
3. Evaluate `e'` to a value `v`, which is the result of evaluating `e0 e1 ... en`.

__Pipeline__

Pipelines are useful when you have a big chain of function applications.

```ocaml
5 |> inc |> square |> inc |> inc |> square
square (inc (inc (square (inc 5))))
```
Both lines of code will return the same value but the former is easier to follow through linearly.


## Polymorphic Functions

Polymorphic functions are functions that can be applied to many(_poly_) types(_morph_) of values.

```ocaml
# let id x = x;;
id : 'a -> 'a = <fun>
```
Above is an identity function - a function that returns the argument.
Here, `'a` returns `'a`. `'a` in OCaml represents a type variable - it stands for an unknown type.

In Ocaml, we usually use `'a`, `'b`, and `'c` and refer to them as alpha, beta, and gamma.
