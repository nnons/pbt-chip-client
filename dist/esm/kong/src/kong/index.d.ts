export declare function parseKeys(payload: string):
  | false
  | {
      primaryPublicKeyHash: string;
      primaryPublicKeyRaw: string;
      secondaryPublicKeyHash: string;
      secondaryPublicKeyRaw: string;
      tertiaryPublicKeyHash: string | null;
      tertiaryPublicKeyRaw: string | null;
    };
export declare const getSignatureFromScan: ({
  rpId,
  chipPublicKey,
  address,
  hash,
  nonce,
}: {
  chipPublicKey: string;
  address: string;
  hash: string;
  nonce: number;
  rpId?: string | undefined;
}) => Promise<string | undefined>;
export declare const getPublicKeysFromScan: ({
  rpId,
}?: {
  rpId?: string | undefined;
}) => Promise<
  | {
      primaryPublicKeyHash: string;
      primaryPublicKeyRaw: string;
      secondaryPublicKeyHash: string;
      secondaryPublicKeyRaw: string;
      tertiaryPublicKeyHash: string | null;
      tertiaryPublicKeyRaw: string | null;
    }
  | undefined
>;
