async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
   
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Token = await ethers.getContractFactory("NodeP23");
    const token = await Token.deploy("0x87CEf448fF1b1C6e6b427a2b6ccdc855DCC87C5b",["0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913","0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb"]);
  
    console.log("Token address:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  