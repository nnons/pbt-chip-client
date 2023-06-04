export declare const hashMessageEIP191SolidityKeccakNoNonce: (
  address: string,
  hash: string
) => string;
export declare const hashMessageEIP191SolidityKeccak: (
  address: string,
  hash: string,
  nonce: number
) => string;
export declare const unpackDERsignature: (signature: string) => {
  r: string;
  s: string;
};
