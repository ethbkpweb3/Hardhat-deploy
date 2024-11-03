# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:


INSTALL:
1:npm install --save-dev hardhat   

2:npx hardhat
3:npm install --save-dev @nomiclabs/hardhat-etherscan(for verify)


```shell
npx hardhat accounts
npx hardhat compile  // now for compile run this command

npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js 

npx hardhat help
```
FOR DEPLOY:
presaledeploy
npx hardhat run --network baseMainnet scripts/deploy.js 
npx hardhat run --network baseMainnet scripts/presaledeploy.js 
npx hardhat run scripts/verify.js --network  baseMainnet<network_name>

FOR VERIFY_for example:
 npx hardhat verify \
--contract "contracts/presale.sol:" \
--network Bscmainnet 
   npx hardhat verify  --network baseMainnet  0xf332Dc4f07BD6742014ed6F550e60a7bA5C9A809 0x50302d410B1cc1Ce09c4ab797B1178fd29Fd485b 0x50302d410B1cc1Ce09c4ab797B1178fd29Fd485b "[\"0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913\", \"0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb\"]"
"0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace 172800

 npx hardhat verify  --network baseMainnet 0x8A3e8E66e672d528f9A097C1021e3Eb45010a527  0xcb4bA464498962797d4A93DA8B944D8d90663685  0xcb4bA464498962797d4A93DA8B944D8d90663685 0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace 172800 1725348114 1738653714 [       [         "250000000",         "500000000",         "750000000",         "1000000000",         "1250000000",         "1500000000",         "1750000000",         "2000000000",         "2250000000",         "2500000000",         "2750000000",         "3000000000",         "3250000000",         "3500000000",         "3750000000",         "4000000000",         "4250000000",         "4500000000",         "4750000000",         "5000000000",         "5250000000",         "5500000000",         "5750000000",         "6000000000",         "6250000000",         "6500000000",         "6750000000",         "7000000000",         "7250000000",         "7500000000"       ],       [         "600000000000000",         "620000000000000",         "640000000000000",         "660000000000000",         "680000000000000",         "700000000000000",         "720000000000000",         "740000000000000",         "760000000000000",         "780000000000000",         "800000000000000",         "820000000000000",         "840000000000000",         "860000000000000",         "880000000000000",         "900000000000000",         "920000000000000",         "940000000000000",         "960000000000000",         "980000000000000",         "1000000000000000",         "1020000000000000",         "1040000000000000",         "1060000000000000",         "1080000000000000",         "1100000000000000",         "1120000000000000",         "1140000000000000",         "1160000000000000",         "1180000000000000"       ],       [         "1720468800",         "1721073600",         "1721678400",         "1722283200",         "1722888000",         "1723492800",         "1724097600",         "1724702400",         "1725307200",         "1725912000",         "1726516800",         "1727121600",         "1727726400",         "1728331200",         "1728936000",         "1729540800",         "1730145600",         "1730750400",         "1731355200",         "1731960000",         "1732564800",         "1733169600",         "1733774400",         "1734379200",         "1734984000",         "1735588800",         "1736193600",         "1736798400",         "1737403200",         "1738008000"       ]     ]
 npx hardhat verify  --network Bscmainnet 0xA2Ca4fa766DBeDd5AB538DcC646b9B8d79375D51   0x1ff0606BfE6573CfCc1F163ae3d3e911c5d3840D
 // for verify
   npx hardhat verify \ --contract "contracts/PompToken.sol:PresaleV2" \ --network Bscmainnet   0xdAFc7518cE3B1CFc02Ce158b14dDE1ffB2623590  0x997e9C16e3C88d2784029817F24d6264993a1a85 


npx hardhat verify --network baseMainnet "0xA772a406FadF8Ff36B03d034D6c7Ab8aC4eDF3DB" "0x04ed8b52c8739c4a2aA17773CFf2c5B2a80cE73a" "[\"0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913\",\"0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb\"]"






0xAb7357b066d2960e5A859D84843287a6f676Eb48   ujjjjj

0x5539dC78094F89AaEcb2FFb4804D81b0CFd0bA5D  fdfdfdfdf

npx hardhat verify --network baseMainnet 0xA772a406FadF8Ff36B03d034D6c7Ab8aC4eDF3DB 0x04ed8b52c8739c4a2aA17773CFf2c5B2a80cE73a [0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913, 0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb]




["2XOZQT8V6L","UHCRMT4VI4","690BUHGB65","890BUHDF65"]
["20","20","20","20"]
["3","3","3","3"]


698VMD8FM90JYH4








["50000000000000000","70000000000000000","100000000000000000","150000000000000000"]

["2500000000000000000","5000000000000000000","10000000000000000000","25000000000000000000"]



UHCRMT4VI5
2XOZQT8V6L
690BUHGB65
2DSBQ5OJE5
ALOVYXWVIT
QX8BYH8Z61
AL8ZI5KFU9
UTC7AHWZY5
Y9CVEXG3UX
ITKZ2LGBQD
AHCRU9ORI9
AD0321ORQ9
1	firstRefCodeRate_	uint256[]	20
20
20
20
20
20
20
20
20
20
20
20
2	secondRefCodeRate_	uint256[]	3
3
3
3
3
3
3
3
3
3
3
3	UHCRMT4VI5
2XOZQT8V6L
690BUHGB65
2DSBQ5OJE5
ALOVYXWVIT
QX8BYH8Z61
AL8ZI5KFU9
UTC7AHWZY5
Y9CVEXG3UX
ITKZ2LGBQD
AHCRU9ORI9
AD0321ORQ9
1	firstRefCodeRate_	uint256[]	200
200
200
200
200
200
200
200
200
200
200
200
2	secondRefCodeRate_	uint256[]	30
30
30
30
30
30
30
30
30
30
30
30
 
UHCRMT4VI5
2XOZQT8V6L
690BUHGB65
2DSBQ5OJE5
ALOVYXWVIT
QX8BYH8Z61
AL8ZI5KFU9
UTC7AHWZY5
Y9CVEXG3UX
ITKZ2LGBQD
AHCRU9ORI9
AD0321ORQ9




      8453: "0x04ed8b52c8739c4a2aA17773CFf2c5B2a80cE73a",




   8453: "0xb37a35204f9c6D59E86bF3f1fFB9BD461dB5D9A0",


      8453: "0xA772a406FadF8Ff36B03d034D6c7Ab8aC4eDF3DB",


      npx hardhat verify  --network baseMainnet 0x6fa2dEECACF8faCfdB9553252a1Ef3Ce395Fd712  0x87CEf448fF1b1C6e6b427a2b6ccdc855DCC87C5b  0x8250f4aF4B972684F7b336503E2D6dFeDeB1487a 0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace 1728000x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913

      5924500 5924500







































      ["0xdAC17F958D2ee523a2206206994597C13D831ec7","0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","0x6B175474E89094C44Da98b954EedeAC495271d0F"]