import { jose } from "../deps.ts";
import { config } from "./config.ts";

export async function verifyFirebaseJWT(token: string) {
  const decodedHeader = jose.decodeProtectedHeader(token);
  const publicKey = await getPublicKey(
    decodedHeader.kid as string,
    decodedHeader.alg as string,
  );
  const { payload } = await jose.jwtVerify(token, publicKey);
  return payload;
}

async function getPublicKey(kid: string, alg: string) {
  const res = await fetch(config.firebaseConfig.publicKeyUrl);
  const publicKeys = await res.json();
  return jose.importX509(publicKeys[kid], alg);
}
