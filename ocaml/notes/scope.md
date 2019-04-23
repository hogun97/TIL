# Scope

Scope of a variable is where its name is meaningful.

```ocaml
let x=42 in
    x + (let y="3110" in
        int_of_string y)
```
Variable `y` is in scope only inside of the `let` expression that binds it above.

A new binding of a variable shadows any old binding of the variable name.<br>
The old binding could reappear as the shadow recedes.

_Shadowing_ is not mutable assignment - both expressions below evaluate to 11:
```ocaml
let x = 5 in ((let x = 6 in x) + x)
let x = 5 in (x + (let x = 6 in x))
```

```ocaml
# let x=42;;
val x : int = 42
# let f y = x+y;;
val f : int -> int = <fun>
# f 0;;
: int = 42
# let x=22;;
val x : int = 22
# f 0;;
- : int = 42
(*x did not mutate*)
```

To sum up, a `let` definition binds an entirely new variable.

If the variable happens to have the same name as the old one, the new one will temporarily shadow the old one.

During the shadowing process, the old variable is still around and is immutable.