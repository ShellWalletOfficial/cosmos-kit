// src/extension/signer.ts
import {
  Fee as TerraFee,
  Msg as TerraMsg,
  SignatureV2
} from "@terra-money/feather.js";
var OfflineSigner = class {
  constructor(extension, accountInfo) {
    this.extension = extension;
    this.accountInfo = accountInfo;
  }
  async getAccounts() {
    return [
      {
        address: this.accountInfo.address,
        algo: this.accountInfo.algo || "secp256k1",
        pubkey: this.accountInfo.pubkey
      }
    ];
  }
  async signAmino(signerAddress, signDoc) {
    const signDocFee = signDoc.fee;
    const feeAmount = signDocFee.amount[0].amount + signDocFee.amount[0].denom;
    const fakeMsgs = signDoc.msgs.map(
      (msg) => JSON.stringify(TerraMsg.fromAmino(msg).toData())
    );
    const signResponse = await this.extension.sign({
      chainID: signDoc.chain_id,
      msgs: fakeMsgs,
      fee: new TerraFee(
        parseInt(signDocFee.gas),
        feeAmount,
        signDocFee.payer,
        signDocFee.granter
      ),
      memo: signDoc.memo,
      signMode: SignatureV2.SignMode.SIGN_MODE_LEGACY_AMINO_JSON
    });
    const signature = {
      pub_key: signResponse.payload.result.auth_info.signer_infos[0].public_key.key,
      signature: signResponse.payload.result.signatures[0]
    };
    return {
      signed: signDoc,
      signature
    };
  }
};
export {
  OfflineSigner
};
//# sourceMappingURL=signer.mjs.map