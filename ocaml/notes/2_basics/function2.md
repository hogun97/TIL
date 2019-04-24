# Partial Application

```ocaml
let add x y = x + y
let add x = fun y -> x + y
let add = fun x -> (fun y -> x + y)
```

All three `add` functions above are syntactically different but semantically the same.

For example,
```ocaml
let addx x = fun y -> x + y
(* takes x as an input and returns a function of type int -> int
 * that will add x to whatever passed *)

# let add5 = addx 5;;
add5 : int -> int = <fun>

# add5 2;;
- : int = 7

# let add5 = add 5;;
add5 : int -> int = <fun>

# add5 2;;
- : int = 7
```

What happened here is called partial application.

We partially applied function `add` to one argument.

_This is possible because they are syntactically different but semantically the same._


## Function associativity

**Every OCaml function takes exactly one argument**

```ocaml
let add x y = x + y

(* is equivalent to *)

let add = fun x -> (fun y -> x + y)
```
To sum up,
```ocaml
(* function types are right associative *)

t1 -> t2 -> t3 -> t4

t1 -> (t2 -> (t3 -> t4)))

(* function applications are left associative *)

e1 e2 e3 e4

((e1 e2) e3) e4
```
Function types are end results. It start from the right to get the return type, moves on to the left, and so on.

Function application, on the other hand, keeps evaluating expressions from left to right.

## Operators

`+` operator has type `int->int->int`. In OCaml, operators are written with prefix order.

```ocaml
# (+);;
- : int -> int -> int = <fun>

# (+) 3 4;;
- : int = 7

# let add3 = (+) 3;;
- : int -> int = <fun>

# add3 2;;
- : int = 5
```

All other operators are built-in.

For multiplication, however, it must be written `( * )` to avoid mistaking it as a comment.