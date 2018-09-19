# Data Storage in Solidity 

According to Solidity documentation, these two keywords are used for Reference Types where:

Complex types (types that do not always fit into 256 bits) have to be handled more carefully than the value-types.
Due to gas fees, copying complex types can be expensive.
Therefore, we have to think about storing them in either:
- Memory: which is not persisting
- Storage: where the state variables are held
Complex types specify the data location

EVM has three data locations:
1. Storage: all contract state variable reside here
    - Persistent between function calls
    - Quite expensive to use
2. Memory: used to hold temporary values
    - Erased between external function calls
    - Cheaper to use
3. Stack: used to hold small local variables
    - Almost free to use
    - Can only hold a limited amount of values 

# Storage vs Memory

1. The storage and memory keywords are used to reference data in storage and memory respectively.
2. Contract storage is pre-allocated during contract construction and cannot be created in function.
3. Memory cannot be allocated during contract construction but rather created in function execution. Contract state variable is always declared in storage.
4. When assigning a memory referenced data to a storage referenced variable, we are copying data from memory to storage. No new storage is created.
5. When assigning a storage referenced data to a memory referenced variable, we are copying data from storage to memory. New memory is allocated.
6. When storage variable is created in function locally by look up, it simply reference data already allocated on Storage. No new storage is created. 

Forced data location: 
    - Parameters of external functions: call data
    - State variables: storage
Default data location:
    - Parameters of functions: memory
    - All other local variables: storage
     
