# Documentation

## How?

```ocaml
(** [sum lst] is the sum of the elements of [lst]. *)
let rec sum lst = ...
```
- `(**` identifies a comment as an OCamldoc
- `[]` renders the content as typewriter font in HTML

There are various doc tags like `@author`, `@deprecated`, `@param`, `@return`, etc.

When creating OCamldocs, avoid being redundant - be simple and declarative.

```ocaml
(** [sum lst] is the sum of the elements of [lst]. *)
let rec sum lst = ...

(* is better than *)

(** Sum a list.
    @param lst The list to be summed.
    @return The sum of the list. *)
let rec sum lst = ...
```

### Recommendation

1. Specifying exceptions or special cases

```ocaml
(** [sum lst] is the sum of the elements of [lst].
    The sum of an empty list is 0. *)
let rec sum lst = ...
```

2. Clarify type of the arguments

```ocaml
(** [sum lst] is the sum of the elements of list [lst].
    The sum of an empty list is 0. *)
let rec sum lst = ...
```

## Preconditions and Postconditions

Examples:

```ocaml
(** [lowercase_ascii c] is the lowercase ASCII equivalent of
    character [c]. *)

(** [index s c] is the index of the first occurence of
    character [c] in string [s]. Raises: [Not_found]
    if [c] does not occur in [s]. *)

(** [random_int bound] is a random integer between 0 (inclusive)
    and [bound] (exclusive). Requires: [bound] is greater than 0
    and less than 2^30. *)
```

- `Requires`: a precondition that must be satisfied to return a value in a function
- `Raises`: exception and the postcondition that guarantees that function raises an exception

**Note**

`Requires` is not used to checking types - compiler is responsible for it.
