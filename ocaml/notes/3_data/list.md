# List

Definition: a sequence of values all of which have the same type

In OCaml, lists are implemented as singly-linked lists

## Building a list

**Syntax**

```ocaml
[]
e1::e2
[e1; e2; ...; en]
```
+ An empty list is written `[]`
+ Empty list is pronounced "nil"
+ Given a list `lst` and element `elt`, we prepend by writing `elt::lst`
+ `::` is called "cons"
+ The first element is called a `head` and the rest are `tails`
+ Various syntax
    - Syntactic sugar: `[e1; e2; ...; en]`
    - Desugaring: `e1::e2::...::en::[]`
+ Nested lists: `[[[]]; [[1;2;3]]]`

**Dynamic semantics**

+ `[]` is already a value
+ If `e1 ==> v1`, and if `e2 ==> v2`, then `e1::e2 ==> v1::v2`.
+ If `ei ==> vi` for all `i` in `1..n`, then `[e1; ...; en] ==> [v1; ...; vn]`.

**Static semantics**

+ If elements in list have type `t`, then the type of the list is `t list`
+ `list` is like a type constructor: given a type, it produces a new type
+ Type checking rules:
    - `[] : 'a list` - 'a is unknown; it gets decided when a value gets added to the list
    - if `e1 : t` and `e2 : t list` then `e1::e2 : t list`

## Accessing a list

**Pattern matching**

```ocaml
let rec sum lst =
    match lst with
        | [] -> 0
        | h::t -> h + sum t
```

```ocaml
let rec sum xs =
    match lst with
        | [] -> 0
        | x::xs' -> x + sum xs'
```

```ocaml
let rec length lst =
    match lst with
        | [] -> 0
        | h::t -> 1 + length t
```

```ocaml
let rec append lst1 lst2 =
    match lst1 with
        | [] -> lst2
        | h::t -> h::(append t lst2)
```

```ocaml
let empty lst =
    match lst with
        | [] -> true
        | h::t -> false
```

Notice all recursive functions using list has a base case and a recursive case.

Library functions `List.hd` and `List.tl` - not good to use (empty list)

## Mutating lists

Lists are immutable in OCaml.

```ocaml
let inc_first lst =
    match lst with
        | [] -> []
        | h::t -> (h+1)::t
```
The code above with increment the first element in `lst`.

It will share the tail list `t` between the old list and the new list such that the amount of memory in use does not increase (beyond the one extra piece of memory needed to store `h+1`).

Therefore, there is no need to worry about wasting space while updating an immutable list in OCaml.