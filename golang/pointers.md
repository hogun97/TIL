# Pointers in Go

- A pointer, unlike a variable, holds the 'memory address' of a value

### Example 

```
package main

import "fmt"

func main() {
    i, j := 100, 300

    p := &i
    fmt.Println(*p)
    *p = 10
    fmt.Println(i)

    p = &j
    *p = *p / 6
    fmt.Println(j)
}
```

The printed values of this go file should be:
    100
    10
    50

Simply, the & operator points to the memory address of a value and * operator points to the value itself.

Likewise, the first Println points to the value of i because * operator is used - 100
The second Println points to the value of i but the value has been modified to 10 in the previous line.
Final Println points to the value of the memory address of j, so dividing that by 6 would yield 50. 
