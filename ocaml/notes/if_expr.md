# If Expressions

Basic syntax: `if e1 then e2 else e3`
- If `e1` evaluates to `true`, `e2` will be returned
- If `e1` evaluates to `false`, `e3` will be returned

```
# if true then "yes" else "no";;
- : string = "yes"
```

Unlike other imperative languages, if-then-else in OCaml is just like other expressions:
```
# 4 + (if 'a' = 'b' then 1 else 2);;
- : int = 6
```

## Dynamic semantics

- If `e1` evaluates to `true`, and if `e2` evaluates to a value `v`, then `if e1 then e2 else e3` evaluates to `v`
- If `e1` evaluates to `false`, and if `e3` evaluates to a value `v`, then `if e1 then e2 else e3` evaluates to `v`

These are evaluation rules - they define how to evaluate expressions

## Static semantics

- If `e1` has type `bool`, and `e2` and `e3` both have type `t`, then `if e1 then e2 else e3` has type `t`

This is a typing rule - it describes how to type check an expression

## Note

- The final `else` is mandatory to avoid syntax error
- `e` in OCaml is a metavariable that represents an expression
- `v` in OCaml is a metavariable that represents a value
- `t` in OCaml is a metavariable that represents type
- In OCaml, we use a colon to write "has type" `e : t` means `e` has type `t`
