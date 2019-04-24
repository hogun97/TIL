# Expressions

## If expressions

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

### Dynamic semantics

- If `e1` evaluates to `true`, and if `e2` evaluates to a value `v`, then `if e1 then e2 else e3` evaluates to `v`
- If `e1` evaluates to `false`, and if `e3` evaluates to a value `v`, then `if e1 then e2 else e3` evaluates to `v`

These are evaluation rules - they define how to evaluate expressions

### Static semantics

- If `e1` has type `bool`, and `e2` and `e3` both have type `t`, then `if e1 then e2 else e3` has type `t`

This is a typing rule - it describes how to type check an expression

### Note

- The final `else` is mandatory to avoid syntax error
- `e` in OCaml is a metavariable that represents an expression
- `v` in OCaml is a metavariable that represents a value
- `t` in OCaml is a metavariable that represents type
- In OCaml, we use a colon to write "has type" `e : t` means `e` has type `t`

## Let expressions

`let` is usually used to define a variable in toplevel or OCaml files.

However, another way to use `let` is to use it as an expression.

```ocaml
# let x = 42 in x+1
- : int = 43
```
One way to use `let` as an expression is assigning it to another expression `x+1`.

```ocaml
# (let x = 42) + 1
Error: Syntax error: operator expected
```
In this case, `let x = 42` is a definition, not expression - so it would throw an error.

Therefore, the following will work fine:
```ocaml
# (let x = 42 in x) + 1
- : int = 43
```

### Syntax

```ocaml
let x = e1 in e2
```
- `x`: identifier
- `e1`: binding expression - expression that is bound to the identifier
- `e2`: body expression - where binding will be in scope

### Dynamic semantics

`let x = e1 in e2`

- Evaluate `e1` to a value `v1`
- Substitute `v1` for `x` in `e2`, yielding a new expression `e2'`
- Evaluate `e2'` to a value `v2`
- The result of evaluating the let expression is `v2`

  Example:

```ocaml
let x = 1+4 in x*3
(*Evaluate e1 to a value v1*)
let x = 5 in x*3
(*Substitute v1 for x in e2, yielding e2'*)
5*3
(*Evaluate e2' to v2*)
15
(*Result of evaluation is v2*)
```

### Static semantics

If `e1:t1` and if under the assumption that `x:t1` it holds that `e2:t2`, then `(let x = e1 in e2) : t2`.

Explicit annotation:

```ocaml
let x : t = e1 in e2
```

### Note

- `let` definitions at the toplevel are like `let` expressions without the body expression.
- `let` expressions and function application are syntactically different but semantically the same
