async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
   
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Token = await ethers.getContractFactory("NodeP2");
    const token = await Token.deploy("0x50302d410B1cc1Ce09c4ab797B1178fd29Fd485b","0x50302d410B1cc1Ce09c4ab797B1178fd29Fd485b");
  
    console.log("Token address:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  