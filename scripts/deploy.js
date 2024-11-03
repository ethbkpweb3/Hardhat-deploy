async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
 
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("PresaleChainlinker");
  const token = await Token.deploy("0xf332Dc4f07BD6742014ed6F550e60a7bA5C9A809","0x8250f4aF4B972684F7b336503E2D6dFeDeB1487a","0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace","172800");

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
