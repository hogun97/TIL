# Arguments

## Labeled/Optional arguments

Sometimes, types may not be enough to tell us how to use a function.

For example,

```ocaml
# String.sub;;
- : string -> int -> int -> string
```
`String.sub` function shows us the types of arguments and return values but honestly, it's not quite clear as to how `Strings.sub` is really used.

```ocaml
# let f ~name1:arg1 ~name2:arg2 = arg1 + arg2;;
val f : name1:int -> name2:int -> int = <fun>

f ~name2:3 ~name1:4;;
- : int = 7
```
OCaml supports labeling arguments to functions.

The function can then be called by passing the labeled arguments.

Labels are often the same as the variable names

__Default argument__

```ocaml
# let f ?name:(arg1=8) arg2 = arg1 + arg2;;
val f : ?name:int -> int -> int = <fun>

(* Examples *)

# f ~name:2 7;;
- : int = 9

# f 7;;
- : int = 15
