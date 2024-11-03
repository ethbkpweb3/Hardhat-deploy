// scripts/verify.js
const hre = require("hardhat");

async function main() {
  const contractAddress = "0x5539dC78094F89AaEcb2FFb4804D81b0CFd0bA5D";
  const arg1 = "0x8A3e8E66e672d528f9A097C1021e3Eb45010a527";
  const arg2 =     ["0xdAC17F958D2ee523a2206206994597C13D831ec7","0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","0x6B175474E89094C44Da98b954EedeAC495271d0F"];

  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [arg1, arg2],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
