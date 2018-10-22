# Make

There is a built-in `make` function is Go that helps create slices.


Using the `make` function, user can create dynamically-sized arrays.

```
a := make([]int, 5)
```
The code above allocates a zeroed array and stores the slice in variable a.


Therefore, if you print a:


    - a = [0 0 0 0 0]


    - len(a) = 5


    - cap(b) = 5    // capacity was not specified
 
