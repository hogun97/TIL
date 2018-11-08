# Import and Export Modules in JavaScript

## What is a Module?

Before we start importing/exporting modules, we first need to understand what a module is.
Module refers to small units of independent, reusable code.
Simply, modules are like chapters of a book.
Like a chapter in a book, there are "good" modules.

A good module is highly self-contained with distinct functionality, allowing them to be shuffled, removed, or added as necessary, without disrupting the system as a whole.

We use modules for 3 good reasons:

1. Maintainability
2. Namespacing
3. Reusability

## Exporting Modules

In order to export modules, first classify the modules to achieve distinct functionality.
Then, use `module.exports` syntax to export.

```
// lib/SimpleMath.js

module.exports = {
    sum: function(x, y) {
        return x + y;
    }

    mul: function(x, y) {
        return x * y;
    }
};
```

## Importing Modules

Simply by importing modules from a source, we can access them in different files.
`require` syntax is necessary to import modules.

```
var simple_math = require("./lib/SimpleMath.js");
```
The line above shows how to import modules from the designated path.
To be more verbose, we can reproduce the line above as follows:

```
var simple_math = {
    sum: function(x, y) {
        return x + y;
    }

    mul: function(x, y) {
        return x * y;
    }
};
```

