import { StdSignDoc, AminoSignResponse } from '@cosmjs/amino';
import { OfflineSigner, OfflineDirectSigner, DirectSignResponse } from '@cosmjs/proto-signing';
import { Key, StdTx, BroadcastMode } from '@keplr-wallet/types';

interface Trust {
    enable(chainIds: string | string[]): Promise<void>;
    mode: 'extension';
    getKey(chainId: string): Promise<Key>;
    getOfflineSigner(chainId: string): OfflineSigner & OfflineDirectSigner;
    getOfflineSignerOnlyAmino(chainId: string): OfflineSigner;
    getOfflineSignerAuto(chainId: string): Promise<OfflineSigner | OfflineDirectSigner>;
    signAmino(chainId: string, signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse>;
    signDirect(chainId: string, signerAddress: string, signDoc: {
        /** SignDoc bodyBytes */
        bodyBytes?: Uint8Array | null;
        /** SignDoc authInfoBytes */
        authInfoBytes?: Uint8Array | null;
        /** SignDoc chainId */
        chainId?: string | null;
        /** SignDoc accountNumber */
        accountNumber?: Long | null;
    }): Promise<DirectSignResponse>;
    sendTx(chainId: string, tx: StdTx | Uint8Array, mode: BroadcastMode): Promise<Uint8Array>;
}

export { Trust };
