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
