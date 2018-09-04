# Smart Contract

## History

  - Nick Szabo, a computer scientists specialized in cryptography, first introduced the concept of Smart Contract in 1994.
  - Accoding to Szabo, a smart contract is an "automated computerized transaction protocol that executes the terms of a contract through lines of coding".
  - Blockchain, on the other hand, guarantees validity of transactions without a trusted third party by allowing all participants on the network to validate, record, and store transactions.
  - Vitalik Buterin, founder of Ethereum, saw the apparent connection between these two concepts and implemented smart contracts in Ethereum.

## Required Smart Contract Specifications

  - Turing completeness of smart contract programming language
  - A user-friendly programming language
  - API for deterministic programming

## Solidity

Solidity is a built-in programming language for building Ethereum smart contracts.
While Solidity is turing-complete and provides API for deterministic programming, Ethereum environment has apparent disadvantages that must be addressed:

  1. Solidity is the 'only' language with which developers can build smart contracts. In order to facilitate more open source developers to contribute to the platform, diverse programming languages such as Java, JavaScript, C, C++, Python, etc. should be available.
  2. Ethereum smart contracts cannot be modified once it is deployed on the main network. Initial purpose of such was to prevent evil parties from modifying the specifications of the contract such as Ether amount or recipient address. However, with the advent of dApps, developers are no longer able to respond to bug reports and fix the codes. 
