# OCaml

## Installation on macOS
```
brew install ocaml
brew install opam
```

## Environment setup
```
opam init
eval `opam env`
```

## Install given version of the compiler
```
opam switch create 4.06.1
eval `opam eval`
```

## Check installation
```
which ocaml
ocaml --version
```

