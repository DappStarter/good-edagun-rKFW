require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food film cost oven punch coral light army gift'; 
let testAccounts = [
"0x8f03bd8929da6e5b859e59baddb8ffb5291fc67b23617d82dbbb8cafeb427337",
"0xa32de27e7e5b0d13f7d1677ff1cacc68c29cf2f58f1caaa3e6c2a366266abb11",
"0x62445887aaa61daee181bb2a06dc07f5f0ab390928d291771bf0e1fced366012",
"0x85de4f0e7c65ab75cc341bf4fed59db6e756c8564328153e89de7bec66b3b376",
"0x53755d6911338b91a6c879d9bda81bc6e4bb783f713e6e5aee18ebf1dedf3164",
"0x2111695b6558ab9107735f912d4e8985f8b6ff33cd58c6cabd1b4bec4dceec46",
"0x0e79fd5e7b7670e4c1e5028830b5d6541dad357f79136929a3fa6f44e9746858",
"0x055024ea8161eb6bc58020c4b9f2a150773b127155d7568baf9ab76b89b8a67d",
"0x587bb5edf51b98b231929a74a4762f132e18b9197d47be6626f51e6550abdf13",
"0xd03bbd956b8782be119e7c6b2d7247ca54e71fcf8a2617ea0268d823503e3239"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

