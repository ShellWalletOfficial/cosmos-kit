// src/config.ts
var preferredEndpoints = {
  osmosis: {
    rpc: ["https://rpc-osmosis.omni.app/"],
    rest: ["https://lcd-osmosis.omni.app/"]
  },
  osmosistestnet: {
    rpc: ["https://rpc-test.osmosis.zone/"],
    rest: ["https://lcd-test.osmosis.zone/"]
  },
  cosmoshub: {
    rpc: ["https://rpc-cosmoshub.omni.app"],
    rest: ["https://lcd-cosmoshub.omni.app"]
  },
  terra: {
    rpc: ["https://rpc-columbus.omni.app"],
    rest: ["https://lcd-columbus.omni.app"]
  },
  secretnetwork: {
    rpc: ["https://rpc-secret.omni.app"],
    rest: ["https://lcd-secret.omni.app"]
  },
  akash: {
    rpc: ["https://rpc-akash.omni.app"],
    rest: ["https://lcd-akash.omni.app"]
  },
  regen: {
    rpc: ["https://rpc-regen.omni.app"],
    rest: ["https://lcd-regen.omni.app"]
  },
  sentinel: {
    rpc: ["https://rpc-sentinel.omni.app"],
    rest: ["https://lcd-sentinel.omni.app"]
  },
  persistence: {
    rpc: ["https://rpc-persistence.omni.app"],
    rest: ["https://lcd-persistence.omni.app"]
  },
  irisnet: {
    rpc: ["https://rpc-iris.omni.app"],
    rest: ["https://lcd-iris.omni.app"]
  },
  cryptoorgchain: {
    rpc: ["https://rpc-crypto-org.omni.app/"],
    rest: ["https://lcd-crypto-org.omni.app/"]
  },
  starname: {
    rpc: ["https://rpc-iov.omni.app"],
    rest: ["https://lcd-iov.omni.app"]
  },
  emoney: {
    rpc: ["https://rpc-emoney.omni.app"],
    rest: ["https://lcd-emoney.omni.app"]
  },
  juno: {
    rpc: ["https://rpc-juno.itastakers.com"],
    rest: ["https://lcd-juno.itastakers.com"]
  },
  microtick: {
    rpc: ["https://rpc-microtick.omni.app"],
    rest: ["https://lcd-microtick.omni.app"]
  },
  likecoin: {
    rpc: ["https://mainnet-node.like.co/rpc"],
    rest: ["https://mainnet-node.like.co"]
  },
  impacthub: {
    rpc: ["https://rpc-impacthub.omni.app"],
    rest: ["https://lcd-impacthub.omni.app"]
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
    rpc: ["https://rpc-sommelier.omni.app"],
    rest: ["https://lcd-sommelier.omni.app"]
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
    rpc: ["https://rpc-evmos.omni.app/"],
    rest: ["https://lcd-evmos.omni.app/"]
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
    rpc: ["https://rpc-kava.omni.app"],
    rest: ["https://lcd-kava.omni.app"]
  },
  genesisl1: {
    rpc: ["https://26657.genesisl1.org"],
    rest: ["https://api.genesisl1.org"]
  }
};

// src/wallet-connect/chain-wallet.ts
import { ChainWC } from "@cosmos-kit/walletconnect";

// src/wallet-connect/client.ts
import { WCClient } from "@cosmos-kit/walletconnect";
var OmniClient = class extends WCClient {
  constructor(walletInfo) {
    super(walletInfo);
  }
  async signAmino(chainId, signer, signDoc, signOptions) {
    const { signDoc: signed, signature } = await this._signAmino(
      chainId,
      signer,
      signDoc,
      signOptions
    );
    return {
      signed,
      signature
    };
  }
  async signDirect(chainId, signer, signDoc, signOptions) {
    const { signDoc: signed, signature } = await this._signDirect(
      chainId,
      signer,
      signDoc,
      signOptions
    );
    return {
      signed,
      signature
    };
  }
};

// src/wallet-connect/chain-wallet.ts
var ChainOmniMobile = class extends ChainWC {
  constructor(walletInfo, chainInfo) {
    super(walletInfo, chainInfo, OmniClient);
  }
};

// src/wallet-connect/main-wallet.ts
import { WCWallet } from "@cosmos-kit/walletconnect";
var OmniMobileWallet = class extends WCWallet {
  constructor(walletInfo, preferredEndpoints2) {
    super(walletInfo, ChainOmniMobile, OmniClient);
    this.preferredEndpoints = preferredEndpoints2;
  }
};

// src/constant.ts
var ICON = "data:image/png;base64,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";

// src/wallet-connect/registry.ts
var omniMobileInfo = {
  name: "omni-mobile",
  prettyName: "Omni Mobile",
  logo: ICON,
  mode: "wallet-connect",
  mobileDisabled: false,
  rejectMessage: {
    source: "Request rejected"
  },
  downloads: [
    {
      device: "mobile",
      os: "android",
      link: "https://play.google.com/store/apps/details?id=com.chainapsis.omni&hl=en&gl=US&pli=1"
    },
    {
      device: "mobile",
      os: "ios",
      link: "https://apps.apple.com/us/app/omni-wallet/id1567851089"
    },
    {
      link: "https://www.omni.app/download"
    }
  ],
  connectEventNamesOnWindow: ["omni_keystorechange"],
  walletconnect: {
    name: "Omni",
    projectId: "afbd95522f4041c71dd4f1a065f971fd32372865b416f95a0b1db759ae33f2a7"
  }
};

// src/omni.ts
var omniMobile = new OmniMobileWallet(omniMobileInfo, preferredEndpoints);
var wallets = [omniMobile];
export {
  ChainOmniMobile,
  OmniMobileWallet,
  omniMobileInfo,
  wallets
};
//# sourceMappingURL=index.mjs.map