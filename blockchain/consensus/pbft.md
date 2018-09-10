# PBFT (Practical Byzantine Fault Tolerance)

## History
- First introduced in 1999 by Miguel Castro and Barbara Liskov
- Invented to defend a network - not just blockchain - from malicious attack and software error
- BFT (Byzantine Fault Tolerance) had already been in use but it was implemented only in synchronous systems and was too slow for real-world applications
- A new consensus that can be implemented in an asynchronous environment and has high performance was necessary - PBFT  

## Application
- Tendermint: PBFT + dPoS (delegated Proof of Stake)
- NEO: Bookkeeper dPBFT (delegated PBFT)
- Hyperledger
- R3

## Algorithm
- Assume that there are n nodes in a  network that uses PBFT consensus
- The PBFT network can defend itself from (n-1)/3 malicious nodes - in other words, if there are more than (n-1)/3 nodes committing a malicious attack, the network will fall apart.
- For example, if there are 7 nodes, the system can defend itself from 2 or fewer malicious nodes
- In terms of defending the network, PoW is more advantageous than PBFT.

## Problem
If PBFT can only defend itself from (n-1)/3 malicious nodes, we are naturally prone to increasing the node count to raise the entrance barrier. However, increasing the node count will result in increasing the communication cost and thus taking longer to create a new block. 

Because of this problem, it is optimal to fix the node count to 3X+1.
For example, having 4 or 5 nodes on the network makes no difference in terms of malicious node tolerance - both systems cannot defend the network from more than 1 malicious nodes. If so, decreasing communication cost and lowering block creation time are the factors to consider. In that case, having 4 nodes is optimal. 
4 = 3(1)+1
5 = 3(1)+1+1

- NEO has 4 nodes
- Cosmos has 100 validator nodes 100 = 3(33)+1 

## PBFT Consensus Process

1. Client requests confirmation for the current state of the blockchain and the participating nodes.
2. Primary node (selected among all nodes) collects all transaction data from the client.
3. Primary node creates a new block with all the given transactions and broadcasts the replica of that block to all other nodes.
4. All nodes receive the replica from the primary node and broadcast to other nodes to confirm that they have received the replica.
5. Each node analyzes the broadcast and validates that block only if the replica was received by more than 2/3 of the entire nodes.
6. After the validation process, validators broadcast the result to all other nodes.
7. Each node collects all the validated result and decides whether to add that block to the chain or not.
    - If more than 2/3 of the nodes broadcast that the block is valid, the block should be added to the chain
    - If 1/3 or more nodes broadcast that the block is invalid, the block should not be added to the chain
8. After either adding or dropping the block from the chain, nodes send the current state of the blockchain to the client.

In this process, there is a total of 2n^2 communication among the nodes, including the primary node. Therefore, while the number of nodes increase linearly, the number of communications increases quadratically. This means that increasing the node count places a large burden on the network communication and thus lowering the consensus speed.
