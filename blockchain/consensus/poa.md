# Proof of Authority - PoA

## Stake

Proof of Authority is a consensus with identity as stake.

Simply, the general mechanism of PoA is quite similar to PoS.
Both have validators that create blocks to store transactions.  

The major difference, however, is how the validators are selected.
In PoS, a validator is selected based on the amount of stake.
In PoA, a validator is selected based on established trust and authority.

## Incentive

While both PoS and PoA grant incentives for the validators, the incentive in PoA is not just the transaction fee. 
In PoA, reputation index is included in the validator's identity.
Therefore, validators in PoA do not want to lose their reputation, which is accessible to all nodes on the network.
Losing anonymity and staking one's reputation is a strong incentive/decentive.

In addition to PoS and PoA, PoW also has incentive policies followed by mining.
However, PoW requires too much CPU power and that itself lowers the incentive.

## Hacking Vulnerability

In PoW, a hacker needs 51% of hash rate in order to take advantage of the network.
On the other hand, PoA does not allow validators to make consecutive block commits, which reduces the chance of severe damage on the system.

## PoA Validator Pre-requisites

1. Identity of validators must officially be revealed through a chain that can cross-check domain information.

2. A validator must acquire a notary.

3. There must be a standardized method of acquiring a validator status.

---

## Note

- PoA is not applicable in public networks where trust must be distributed amongst the participants.
- PoA is more applicable in private networks that run identity check before allowing nodes into the system.

- PoA is being tested on a test network named Kovan. 


