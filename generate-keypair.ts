import 'dotenv/config';
import { Keypair } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment('SECRET');

console.log("Public key:", keypair.publicKey.toBase58());

console.log("Secret key:", keypair.secretKey.toString());