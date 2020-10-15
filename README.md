# Testeur

Smart contracts Blockchain testing suite.

## Contents
- [Testeur](#testeur)
  - [Contents](#contents)
  - [Description](#description)
  - [Impact](#impact)
  - [Components](#components)


## Description
This system enables efficient testing of Blockchain protocols by simulating complete computer network environments with daemon protocols running on the specified interconnected virtual nodes. Each virtual node runs in a Docker container which may contain any Ethereum daemon node running a custom Blockchain that simulates any Testnet or even Mainnet for testing purposes. Such custom Blockchain will be made to contain any published smart contracts that are necessary for the scenario being tested. For example, there could be a container-simulated client node that may want to perform an atomic swap operation using Uniswap's (or any other related service) smart contracts. A client node has its wallet and performs a swap operation with a simulated liquidity provider running in another Docker container. The topology of the computer network can be specified declaratively in a custom-defined language. All the interactions and operations are scripted, with assertions to test for conditions and operation outcomes.

The main objective of this project is to enable developers to quickly set up a confined, fast, and close-to-real environment with all the required services pre-configured. No need to interact with a full blown testnet network through intermediary services such as Infura. Compatibility with any Ethereum daemons will be given, even Ganache. Developers will be able to simulate node crashes, lossy communication channels, network splits, etc. in order to assess such risks. Also, the underlying containers are generic, so one could also have nodes running Bitcoin-based protocols to simulate, for example, cross-chain interactions.

## Impact
Thorough protocol testing is hard due to the many interactions that may take place between clients communicating to smart-contract services, timing issues, and dependencies to other smart-contracts that are assumed to already be deployed there belonging to third party entities such as Kyber, Uniswap, StablePay, etc. Also, lossy and/or broken communication channels can have a negative effect such as transactions not going through, network splits, etc. It is highly desired to test and diagnose what could happen in such scenarios. Currently, many blockchain developers have to spend a considerable amount of time setting up mocked contracts copying code since some contracts exist on one test network but not in others.

The main benefit will be for Developers and Buidlers working in any Blockchain-protocol either at the smart-contract level, or at the daemon infrastructure level. At the smart-contract level one could test if the smart-contracts are working properly when having complex interactions with already well-known published smart-contracts by third parties.

In addition to smart-contract protocol testing, this tool will also be useful at the infrastructure level. For instance, in the current ongoing Ethereum 2.0 development efforts, with this tool it would be useful and easy to start a simulated computer-network environment running different implementations of the protocol. Bug finding and testing can be enabled by analyzing and probing the interaction among those implementations to see if they are truly compatible as they must.


## Components

The suite will consist of several components that may or may not will be able to use independently. The following is a list of the foreseen components that will be developed.

1. **Deep Contract deployer**: This component will be able to deploy smart contracts along with their dependencies. For example, a contract might reference Aave or Uniswap contract's functionality. However, those contracts may not be available in the local testing environment or in a specific testing network. By resolving such dependencies, such contracts will be deployed and the original contract address reference will be patched to point to the addresses in the testing network.
   
2. **Topology simulator**: This component will initiate a topology of nodes running one or more containers that will support the simulated blockchain network. Initially, such containers will run *geth* processes or simulate client machines doing transactions.

3. **Testing framework**: Once the topology is up (topology simulator) and the contracts have been deployed (deep contract deployer) this component will enable behavior simulation by sending instructions to the topology nodes. The results of such actions can be asserted and make the test pass or fail.
