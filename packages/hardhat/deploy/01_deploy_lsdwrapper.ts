import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployLSDWrapper: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();
    const { deploy } = hre.deployments;

    const lsd = await hre.ethers.getContract("LSD", deployer);

    await deploy("LSDWrapper", {
        from: deployer,
        args: [lsd.address, "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"],
        log: true,
        autoMine: true,
    });
};

export default deployLSDWrapper;

deployLSDWrapper.tags = ["LSDWrapper"];
