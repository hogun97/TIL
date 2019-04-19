# Merkle Patricia Trie

Merkle Patricia Trie (MPT) is a modified version of merkle trees.

## Merkle Tree

Merkle tree was implemented in blockchain to solve the scalability challenge.

If all nodes started creating large block headers that include the entire transaction sets, validation process would take too much time and resources.

Therefore, Merkle tree gets the hash value of the Merkle Root and includes that value in the block header.

## Merkle Path

Merkle Path is a sequence of hash values that a data needs to hashed with in order to reach the Merkle Root.

## Patricia Tree

In Ethereum, Merkle tree is combined with Patricia tree.
Patricia tree is recommended because of state tree properties.
A data structure that satisfies the following properties is needed:
    - Keeping the tree's depth low enough to maintain the speed of search and modify methods
    - Value of root depends only on data but not on the sequence of adding/modifying/deleting data

Vitalik believes that Patricia Tree is a data structure that satisfies both properties above.

## Modified Merkle Patricia Tree

Modified Merkle Patricia Tree is the data structure implemented in Ethereum.
Key-Value pairs can be added, modified and deleted in O(log(n)) time complexity.

## Trie Usage

Each block header in Ethereum blockchain has pointer to three tries: 

    1. State tree
    2. Transaction tree
    3. Receipt tree 

### State Tree
A state tree is a global state tree







