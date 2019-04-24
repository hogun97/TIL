# Debugging in OCaml

1. Print statements

```ocaml
let inc =
    let () = print_int(x) in
    x+1

# inc 3;;
3- : int = 4
```

2. Function traces (trace recursive calls)

```ocaml
let rec fib x = if x<=1 then 1 else fib(x-1) + fib(x-2)
# #trace fib;;
fib is now traced

# fib2;;

fib <-- 2
fib <-- 0
fib <-- 1
fib <-- 1
fib <-- 1
fib <-- 2
```

3. Debugger - `ocamldebug`


## Defensive programming

There are several ways to implement defensive programming.

```ocaml
(* Possibility 1 *)
let random_int bound =
    assert (bound > 0 && bound < 1 lsl 30);
    (* proceed with the implementation of the function *)

(* Possibility 2 *)
let random_int bound =
    if not (bound > 0 && bound < 1 lsl 30)
    then invalid_arg "bound";
    (* proceed with the implementation of the function *)

(* Possibility 3 *)
let random_int bound =
    if not (bound > 0 && bound < 1 lsl 30)
    then failwith "bound";
    (* proceed with the implementation of the function *)

(* Possibility 4 *)
(** [random_int bound] is a random integer between 0 (inclusive)
    and [bound] (exclusive). Raises: [Invalid_argument "bound"]
    unless [bound] is greater than 0 and less than 2^30. *)
```

1. Most useful when debugging my own code
2. Most informative to client because there is a built-in function `invalid_arg`
3. Same as 2 but useful when precondition involves more than just a single invalid argument
4. Remove precondition and restate it as a postcondition
