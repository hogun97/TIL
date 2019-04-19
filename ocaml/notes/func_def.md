# Function Definitions

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
