// src/config.ts
var preferredEndpoints = {
  osmosis: {
    rpc: ["https://rpc-osmosis.keplr.app/"],
    rest: ["https://lcd-osmosis.keplr.app/"]
  },
  osmosistestnet: {
    rpc: ["https://rpc-test.osmosis.zone/"],
    rest: ["https://lcd-test.osmosis.zone/"]
  },
  cosmoshub: {
    rpc: ["https://rpc-cosmoshub.keplr.app"],
    rest: ["https://lcd-cosmoshub.keplr.app"]
  },
  terra: {
    rpc: ["https://rpc-columbus.keplr.app"],
    rest: ["https://lcd-columbus.keplr.app"]
  },
  secretnetwork: {
    rpc: ["https://rpc-secret.keplr.app"],
    rest: ["https://lcd-secret.keplr.app"]
  },
  akash: {
    rpc: ["https://rpc-akash.keplr.app"],
    rest: ["https://lcd-akash.keplr.app"]
  },
  regen: {
    rpc: ["https://rpc-regen.keplr.app"],
    rest: ["https://lcd-regen.keplr.app"]
  },
  sentinel: {
    rpc: ["https://rpc-sentinel.keplr.app"],
    rest: ["https://lcd-sentinel.keplr.app"]
  },
  persistence: {
    rpc: ["https://rpc-persistence.keplr.app"],
    rest: ["https://lcd-persistence.keplr.app"]
  },
  irisnet: {
    rpc: ["https://rpc-iris.keplr.app"],
    rest: ["https://lcd-iris.keplr.app"]
  },
  cryptoorgchain: {
    rpc: ["https://rpc-crypto-org.keplr.app/"],
    rest: ["https://lcd-crypto-org.keplr.app/"]
  },
  starname: {
    rpc: ["https://rpc-iov.keplr.app"],
    rest: ["https://lcd-iov.keplr.app"]
  },
  emoney: {
    rpc: ["https://rpc-emoney.keplr.app"],
    rest: ["https://lcd-emoney.keplr.app"]
  },
  juno: {
    rpc: ["https://rpc-juno.itastakers.com"],
    rest: ["https://lcd-juno.itastakers.com"]
  },
  microtick: {
    rpc: ["https://rpc-microtick.keplr.app"],
    rest: ["https://lcd-microtick.keplr.app"]
  },
  likecoin: {
    rpc: ["https://mainnet-node.like.co/rpc"],
    rest: ["https://mainnet-node.like.co"]
  },
  impacthub: {
    rpc: ["https://rpc-impacthub.keplr.app"],
    rest: ["https://lcd-impacthub.keplr.app"]
  },
  bitcanna: {
    rpc: ["https://rpc.bitcanna.io"],
    rest: ["https://lcd.bitcanna.io"]
  },
  bitsong: {
    rpc: ["https://rpc.explorebitsong.com"],
    rest: ["https://lcd.explorebitsong.com"]
  },
  kichain: {
    rpc: ["https://rpc-mainnet.blockchain.ki"],
    rest: ["https://api-mainnet.blockchain.ki"]
  },
  panacea: {
    rpc: ["https://rpc.gopanacea.org"],
    rest: ["https://api.gopanacea.org"]
  },
  bostrom: {
    rpc: ["https://rpc.bostrom.cybernode.ai"],
    rest: ["https://lcd.bostrom.cybernode.ai"]
  },
  comdex: {
    rpc: ["https://rpc.comdex.one"],
    rest: ["https://rest.comdex.one"]
  },
  cheqd: {
    rpc: ["https://rpc.cheqd.net"],
    rest: ["https://api.cheqd.net"]
  },
  stargaze: {
    rpc: ["https://rpc.stargaze-apis.com"],
    rest: ["https://rest.stargaze-apis.com"]
  },
  chihuahua: {
    rpc: ["https://rpc.chihuahua.wtf"],
    rest: ["https://api.chihuahua.wtf"]
  },
  lumnetwork: {
    rpc: ["https://node0.mainnet.lum.network/rpc"],
    rest: ["https://node0.mainnet.lum.network/rest"]
  },
  vidulum: {
    rpc: ["https://mainnet-rpc.vidulum.app"],
    rest: ["https://mainnet-lcd.vidulum.app"]
  },
  desmos: {
    rpc: ["https://rpc.mainnet.desmos.network"],
    rest: ["https://api.mainnet.desmos.network"]
  },
  dig: {
    rpc: ["https://rpc-1-dig.notional.ventures"],
    rest: ["https://api-1-dig.notional.ventures"]
  },
  sommelier: {
    rpc: ["https://rpc-sommelier.keplr.app"],
    rest: ["https://lcd-sommelier.keplr.app"]
  },
  sifchain: {
    rpc: ["https://rpc.sifchain.finance"],
    rest: ["https://api-int.sifchain.finance"]
  },
  bandchain: {
    rpc: ["https://rpc.laozi3.bandchain.org"],
    rest: ["https://laozi1.bandchain.org/api"]
  },
  konstellation: {
    rpc: ["https://node1.konstellation.tech:26657"],
    rest: ["https://node1.konstellation.tech:1318"]
  },
  umee: {
    rpc: ["https://rpc.aphrodite.main.network.umee.cc"],
    rest: ["https://api.aphrodite.main.network.umee.cc"]
  },
  gravitybridge: {
    rpc: ["https://gravitychain.io:26657"],
    rest: ["https://gravitychain.io:1317"]
  },
  decentr: {
    rpc: ["https://poseidon.mainnet.decentr.xyz"],
    rest: ["https://rest.mainnet.decentr.xyz"]
  },
  shentu: {
    rpc: ["https://shenturpc.certikpowered.info"],
    rest: ["https://azuredragon.noopsbycertik.com"]
  },
  carbon: {
    rpc: ["https://tm-api.carbon.network"],
    rest: ["https://api.carbon.network"]
  },
  injective: {
    rpc: ["https://public.api.injective.network"],
    rest: ["https://public.lcd.injective.network"]
  },
  cerberus: {
    rpc: ["https://rpc.cerberus.zone:26657"],
    rest: ["https://api.cerberus.zone:1317"]
  },
  fetchhub: {
    rpc: ["https://rpc-fetchhub.fetch.ai:443"],
    rest: ["https://rest-fetchhub.fetch.ai"]
  },
  assetmantle: {
    rpc: ["https://rpc.assetmantle.one/"],
    rest: ["https://rest.assetmantle.one/"]
  },
  provenance: {
    rpc: ["https://rpc.provenance.io/"],
    rest: ["https://api.provenance.io"]
  },
  galaxy: {
    rpc: ["https://rpc.galaxychain.zone"],
    rest: ["https://rest.galaxychain.zone"]
  },
  meme: {
    rpc: ["https://rpc-meme-1.meme.sx:443"],
    rest: ["https://api-meme-1.meme.sx:443"]
  },
  evmos: {
    rpc: ["https://rpc-evmos.keplr.app/"],
    rest: ["https://lcd-evmos.keplr.app/"]
  },
  terra2: {
    rpc: ["https://rpc.terrav2.ccvalidators.com/"],
    rest: ["https://phoenix-lcd.terra.dev/"]
  },
  rizon: {
    rpc: ["https://rpcapi.rizon.world/"],
    rest: ["https://restapi.rizon.world/"]
  },
  kava: {
    rpc: ["https://rpc-kava.keplr.app"],
    rest: ["https://lcd-kava.keplr.app"]
  },
  genesisl1: {
    rpc: ["https://26657.genesisl1.org"],
    rest: ["https://api.genesisl1.org"]
  }
};

// src/extension/chain-wallet.ts
import { ChainWalletBase } from "@cosmos-kit/core";
var ChainCoin98Extension = class extends ChainWalletBase {
  constructor(walletInfo, chainInfo) {
    super(walletInfo, chainInfo);
  }
};

// src/extension/main-wallet.ts
import { MainWalletBase } from "@cosmos-kit/core";

// src/extension/client.ts
import { chainRegistryChainToKeplr } from "@chain-registry/keplr";
var Coin98Client = class {
  constructor(client) {
    this.client = client;
  }
  async enable(chainIds) {
    await this.client.enable(chainIds);
  }
  async connect(chainIds) {
    await this.client.enable(chainIds);
  }
  async getSimpleAccount(chainId) {
    await this.enable(chainId);
    const { address, username } = await this.getAccount(chainId);
    return {
      namespace: "cosmos",
      chainId,
      address,
      username
    };
  }
  async getAccount(chainId) {
    await this.enable(chainId);
    const key = await this.client.getKey(chainId);
    return {
      username: key.name,
      address: key.bech32Address,
      algo: key.algo,
      pubkey: key.pubKey
    };
  }
  getOfflineSigner(chainId, preferredSignType) {
    switch (preferredSignType) {
      case "amino":
        return this.getOfflineSignerAmino(chainId);
      case "direct":
        return this.getOfflineSignerDirect(chainId);
      default:
        return this.getOfflineSignerAmino(chainId);
    }
  }
  getOfflineSignerAmino(chainId) {
    return this.client.getOfflineSignerOnlyAmino(chainId);
  }
  getOfflineSignerDirect(chainId) {
    return this.client.getOfflineSigner(chainId);
  }
  async addChain(chainInfo) {
    const suggestChain = chainRegistryChainToKeplr(
      chainInfo.chain,
      chainInfo.assetList ? [chainInfo.assetList] : []
    );
    if (chainInfo.preferredEndpoints?.rest?.[0]) {
      suggestChain.rest = chainInfo.preferredEndpoints?.rest?.[0];
    }
    if (chainInfo.preferredEndpoints?.rpc?.[0]) {
      suggestChain.rpc = chainInfo.preferredEndpoints?.rpc?.[0];
    }
    await this.client.experimentalSuggestChain(suggestChain);
  }
  async signAmino(chainId, signer, signDoc, signOptions) {
    return await this.client.signAmino(chainId, signer, signDoc, signOptions);
  }
  async signDirect(chainId, signer, signDoc, signOptions) {
    return await this.client.signDirect(chainId, signer, signDoc, signOptions);
  }
  async signArbitrary(chainId, signer, data) {
    return await this.client.signArbitrary(chainId, signer, data);
  }
  async sendTx(chainId, tx, mode) {
    return await this.client.sendTx(chainId, tx, mode);
  }
};

// src/extension/utils.ts
import { ClientNotExistError } from "@cosmos-kit/core";
var getCoin98FromExtension = async () => {
  if (typeof window === "undefined") {
    return void 0;
  }
  const provider = window.coin98?.keplr;
  if (provider) {
    return provider;
  }
  if (document.readyState === "complete") {
    if (provider) {
      return provider;
    } else {
      throw ClientNotExistError;
    }
  }
  return new Promise((resolve, reject) => {
    const documentStateChange = (event) => {
      if (event.target && event.target.readyState === "complete") {
        if (provider) {
          resolve(provider);
        } else {
          reject(ClientNotExistError.message);
        }
        document.removeEventListener("readystatechange", documentStateChange);
      }
    };
    document.addEventListener("readystatechange", documentStateChange);
  });
};

// src/extension/main-wallet.ts
var Coin98ExtensionWallet = class extends MainWalletBase {
  constructor(walletInfo, preferredEndpoints2) {
    super(walletInfo, ChainCoin98Extension);
    this.preferredEndpoints = preferredEndpoints2;
  }
  async initClient() {
    this.initingClient();
    try {
      const coin98 = await getCoin98FromExtension();
      this.initClientDone(coin98 ? new Coin98Client(coin98) : void 0);
    } catch (error) {
      this.logger?.error(error);
      this.initClientError(error);
    }
  }
};

// src/constant.ts
var ICON = "data:image/png;base64,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";

// src/extension/registry.ts
var Coin98ExtensionInfo = {
  name: "coin98-extension",
  prettyName: "Coin98",
  logo: ICON,
  mode: "extension",
  //Enable for dapp browser
  mobileDisabled: false,
  rejectMessage: {
    source: "Request rejected"
  },
  downloads: [
    {
      device: "desktop",
      browser: "chrome",
      link: "https://chrome.google.com/webstore/detail/aeachknmefphepccionboohckonoeemg"
    },
    {
      link: "https://coin98.com/wallet"
    }
  ]
};

// src/coin98.ts
var coin98Extension = new Coin98ExtensionWallet(
  Coin98ExtensionInfo,
  preferredEndpoints
);
var wallets = [coin98Extension];
export {
  wallets
};
//# sourceMappingURL=coin98.mjs.map