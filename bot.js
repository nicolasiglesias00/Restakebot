const {JsonRpcBatchProvider} = require("@ethersproject/providers");
const fetch = require("node-fetch");
const TelegramBot = require("node-telegram-bot-api");
const {CONNECTING} = require("ws");
const token = "Your Token";
const bot = new TelegramBot(token, {polling: true});

const restakeArray = [
  {
    name: "bitcanna",
    zeros: 0.000001,
    rpc: "https://rest.cosmos.directory/bitcanna/",
    address: "bcnavaloper1gsq4dsxvgsswkgrsftz0k905rzjc0n2hv26xgj",
    restake: {
      address: "bcna1hl0jgxre5z0nkyjj07c5vfdy44yk44atr0jd80",
      run_time: "22:30",
      minimum_reward: 20000000,
    },
  },
  {
    name: "cosmoshub",
    zeros: 0.000001,
    rpc: "https://cosmoshub-lcd.stakely.io",
    address: "cosmosvaloper16yupepagywvlk7uhpfchtwa0stu5f8cyhh54f2",
    restake: {
      address: "cosmos1hl0jgxre5z0nkyjj07c5vfdy44yk44atelzv0a",
      run_time: "22:30",
      minimum_reward: 50000,
    },
  },
  {
    name: "cryptoorgchain",
    zeros: 0.00000001,
    rpc: "https://lcd-crypto-org.keplr.app",
    address: "crocncl1tkev46yqrjzrjzrqtty30ex68eja2zcltyq2vj",
    restake: {
      address: "cro1hl0jgxre5z0nkyjj07c5vfdy44yk44atpy24nv",
      run_time: "22:30",
      minimum_reward: 1000000,
    },
  },
  {
    name: "desmos",
    zeros: 0.000001,
    rpc: "https://rest.cosmos.directory/desmos",
    address: "desmosvaloper1s5gnmccngltteh6ugtsz7fdrykc294tnw2e7pz",
    restake: {
      address: "desmos1hl0jgxre5z0nkyjj07c5vfdy44yk44atd80uc9",
      run_time: "22:30",
      minimum_reward: 100000,
    },
  },
  {
    name: "evmos",
    zeros: 0.000000000000000001,
    rpc: "https://lcd-evmos.keplr.app",
    address: "evmosvaloper19fxanpnjlggzuur3m3x0puk5ez7j9lrttexwsw",
    restake: {
      address: "evmos135e4ecavyr73p6238edqlpwfwty3fhjng49qae",
      run_time: "22:30",
      minimum_reward: 10000000000000000,
    },
  },
  {
    name: "juno",
    zeros: 0.000001,
    rpc: "https://juno-lcd.stakely.io",
    address: "junovaloper1hx9yj7qgnp8zhkrqfanvz74mcsg9d8eyskvsxg",
    restake: {
      address: "juno1hl0jgxre5z0nkyjj07c5vfdy44yk44at0dphgp",
      run_time: "22:30",
      minimum_reward: 50000,
    },
  },
  {
    name: "lumnetwork",
    zeros: 0.000001,
    rpc: "https://rest.cosmos.directory/lumnetwork",
    address: "lumvaloper1zs59ua4l0h6a2hnh08v8qn76f6qh7uxc22vey5",
    restake: {
      address: "lum1hl0jgxre5z0nkyjj07c5vfdy44yk44atv4l96f",
      run_time: "22:30",
      minimum_reward: 100000,
    },
  },
  {
    name: "osmosis",
    zeros: 0.000001,
    rpc: "https://lcd.osmosis.zone",
    address: "osmovaloper1z5xyynz9ewuf044uaweswldut34z34z3cwpt7y",
    restake: {
      address: "osmo1hl0jgxre5z0nkyjj07c5vfdy44yk44at3y3ue0",
      run_time: "22:30",
      minimum_reward: 1000,
    },
  },
  {
    name: "regen",
    zeros: 0.000001,
    rpc: "https://rest.cosmos.directory/regen",
    address: "regenvaloper1kzhxmgp8z05zrj90nd8h5qx9pm949an5y7nwsz",
    restake: {
      address: "regen1hl0jgxre5z0nkyjj07c5vfdy44yk44atxafsee",
      run_time: "22:30",
      minimum_reward: 1000000,
    },
  },
  {
    name: "secretnetwork",
    zeros: 0.000001,
    rpc: "https://rest.cosmos.directory/secretnetwork",
    address: "secretvaloper1vzkdmu0sa8gaj686jh5all7hpmmsp8x87vyz8z",
    restake: {
      address: "secret1hl0jgxre5z0nkyjj07c5vfdy44yk44atm6k9jp",
      run_time: "22:30",
      minimum_reward: 100000,
    },
  },
  {
    name: "sifchain",
    zeros: 0.000000000000000001,
    rpc: "https://rest.cosmos.directory/sifchain",
    address: "sifvaloper1r9ssdmc2xm3kv2y5m35mhrvnqms4pjw27umt2l",
    restake: {
      address: "sif1hl0jgxre5z0nkyjj07c5vfdy44yk44atuzd6qk",
      run_time: "22:30",
      minimum_reward: 100000,
    },
  },
  {
    name: "crescent",
    zeros: 0.000001,
    rpc: "https://rest.cosmos.directory/crescent",
    address: "crevaloper1wr0l9tnw3rsmk9tyqr707tta40f7qh2m7ueyq8",
    restake: {
      address: "cre1hl0jgxre5z0nkyjj07c5vfdy44yk44atah3f6s",
      run_time: "22:30",
      minimum_reward: 1000000,
    },
  },
  {
    name: "terra2",
    zeros: 0.000001,
    rpc: "https://phoenix-lcd.terra.dev/",
    address: "terravaloper16vc0num5aaq4mqdh4vjhs02s3ypd0j8c7ujxpm",
    restake: {
      address: "terra1hl0jgxre5z0nkyjj07c5vfdy44yk44atlmcvda",
      run_time: "22:30",
      minimum_reward: 100000,
    },
  },
];

const all = async () => {
  const arrayOfEmptyWallets = [];

  for (const array of restakeArray) {
    let Link = array.rpc + "/cosmos/bank/v1beta1/balances/" + array.restake.address;
    let res = await fetch(Link);
    res = await res.json();
    let balance = res.balances[0].amount * array.zeros;
    let MinimumBalance = array.restake.minimum_reward * array.zeros;
    console.log(array.name, balance)
    if (balance <= MinimumBalance) {
      arrayOfEmptyWallets.push(array.name);
    }
  }

  let text = `ATENCIÓN 🚨🚨 \n
Rellenar wallets de:`;
  
  for (const array of arrayOfEmptyWallets) {
    text = text + "\n" + "- " + array;
  }

  await bot.sendMessage('chatId', text);
  return text;
};
all();

module.exports = {
  all,
};
