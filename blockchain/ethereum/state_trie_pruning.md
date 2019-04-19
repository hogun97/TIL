# Ethereum State Trie Pruning

Ethereum stores current state in a modified merkle particia trie (MPT).

Using MPT is more efficient:
- MPT does not need to look at the entire state trie
- MPT only needs to recalculate the edited branch's hash

MPT solved the speed of calculating branch's hash but there is a problem of memory storage.

Ethereum's current state is around 25 GB and 300 GB including all the past states. 
On top of that, size is only going to increase. 

