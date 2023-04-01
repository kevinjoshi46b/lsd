import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployLSD: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();
    const { deploy } = hre.deployments;

    await deploy("LSD", {
        from: deployer,
        args: [
            "LSD",
            "LSD",
            true,
            25,
            "0xfd225c9e6601c9d38d8f98d8731bf59efcf8c0e3",
            "0x794a61358d6845594f94dc1db02a252b5b4814ad",
            "0x929EC64c34a17401F460460D4B9390518E5B473e",
            "0xba12222222228d8ba445958a75a0704d566bf2c8",
            "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0",
            "0x5d37E4b374E6907de8Fc7fb33EE3b0af403C7403",
            "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
            "0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6",
            "0x80cA0d8C38d2e2BcbaB66aA1648Bd1C7160500FE",
            "0xc17636e36398602dd37bb5d1b3a9008c7629005f0002000000000000000004c4",
        ],
        log: true,
        autoMine: true,
        value: hre.ethers.utils.parseEther("1"),
    });

    const lsd = await hre.ethers.getContract("LSD", deployer);

    if ((await hre.getChainId()) == "31337") {
        await lsd.transferOwnership("0x662C2e2F9C98150C20DDCe35df42f17b11C671df");
    }
};

export default deployLSD;

deployLSD.tags = ["LSD"];
