Solana Full-stack Demo

A counter program only deployer can increase the `count`, default using `Devnet`

# How to play
1. follow guide.md to setup environment
2. $ cd counter
3. $ anchor build
4. $ anchor keys sync
5. change `programId` in `front-end/src/anchor/setup.ts`
6. $ solana program deploy ./target/deploy/counter.so --use-rpc
7. $ cd ../front-end
8. follow guide.md to install dependencies
9. $ yarn dev
10. open website and click `init` first

# full-stack-solana-dev
View this guide on [Solana docs](https://solana.com/developers/guides/getstarted/full-stack-solana-development) or open up `guide.md` in a markdown viewer like HackMD. 

## How to use this guide
1. Open guide.md in markdown viewer
2. Follow it step by step
3. Ask ChatGPT/Claude for help when you get stuck
4. Take breaks if things aren't making sense

This is a dense guide and you're not expected to understand all of it if you don't know any Rust.
