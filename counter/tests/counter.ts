import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Counter, IDL } from "../target/types/counter";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

describe("counter", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = new anchor.Program(IDL, "6Jt2TKMTuejidRbctw4zGPmTMr7xcqsunRCA3DUHDBp3", provider);

  const [counterPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("counter")],
    program.programId
  );
  console.log("counterPDA: ", counterPDA);

  it("Is initialized!", async () => {
    const txSig = await program.methods.initialize().rpc();

    const accountData = await program.account.counter.fetch(counterPDA);
    console.log(`Transaction Signature: ${txSig}`);
    console.log(`Count: ${accountData.count}`);
  });

  it("Increment", async () => {
    const transactionSignature = await program.methods.increment().rpc();

    const accountData = await program.account.counter.fetch(counterPDA);

    console.log(`Transaction Signature: ${transactionSignature}`);
    console.log(`Count: ${accountData.count}`);
  });
});
