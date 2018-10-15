# Import

## Difference between . "github..." and "github"

There are two ways to import packages from github.

First method:
```
import (
    "github.com/.../first"
    "github.com/.../second"
)
```

Second method:
```
import (
    . "github.com/.../first"
    . "github.com/.../second"
)
```

The major difference between the two ways is that the first method requires the user to specify the package name.
For example, let's assume that we are trying to use a function named getBalance() from the first package.

First method:

```
first.getBalance()
```

Second method:

```
getBalance()
```

Now, the reason why we have two different ways is quite simple.
If we want to specify the package every time we use a function from that package, we use the first method.
If we do not necessarily need to specify the package name every time, we can use the second method.
  
