# Current Dilemma of Blockchain

1. Speed
Many blockchains today emphasize their technological superiority by exaggerating their TPS (transaction per second). However, speed of transaction is determined by two factors: TPS and Finality. 
  - TPS is quite self-explanatory. 
  - Finality is how long it takes to confirm the transaction. 

In Bitcoin, it takes 10 minutes to finalize a block.

In Ethereum, Buterin has announced that finality never exists in a Proof of Work setting. Therefore, he made a probabilistic approach to finality - with 6 confirmations, it is very likely that the block will be finalized and thus it is safe to assume that the transaction is valid. 

2. Data storage
Since the creation of its genesis block, Bitcoin network has grown. Theoretically, assuming that the number of nodes on the platform constantly increases, the blockchain network size will get heavier every minute. 

With 100,000 tps that a lot of ICOs seem to boast, the blockchain will accumulate up to 1 Tb of data onto the network. It is physically impossible to store such data on a single personal computer. Future development plans such as Casper in Ethereum include sharding the network to partition the data burden. 
