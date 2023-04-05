import Head from "next/head";
import { ethers } from "ethers";
import type { NextPage } from "next";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const VaultStats: NextPage = () => {
  const { data: invested } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "totalInvested",
  });

  const { data: currentAmount } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "totalAssets",
  });

  const { data: cost } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "convertToAssets",
    args: [ethers.utils.parseEther("1")],
  });

  const { data: balance } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "totalSupply",
  });

  const { data: leverageStakingToggle } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "leverageStakingYieldToggle",
  });

  const { data: borrowPercentage } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "borrowPercentage",
  });

  const { data: aave } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "getAaveUserAccountData",
  });

  const { data: maticPrice } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "getPriceFeedWMatic",
  });

  const { data: maticXPrice } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "getPriceFeedMaticX",
  });

  const customFormatEther = (x: any) => {
    const value = ethers.utils.formatEther(x);
    const digits = parseInt(value).toString().length;
    if (digits >= 7) {
      return [value, Number(value).toFixed(0)];
    } else {
      return [value, Number(value).toFixed(7 - digits)];
    }
  };

  const currentAmountPercentage = () => {
    const base = Number(ethers.utils.formatEther(invested));
    const profit = Number(ethers.utils.formatEther(currentAmount));
    return ((profit - base) * 100) / base;
  };

  const formatSupplied = () => {
    const m = ethers.utils.parseEther("1");
    const value = ethers.utils.formatEther(aave[0].mul(m).div(maticXPrice[1]));
    const digits = parseInt(value).toString().length;
    if (digits >= 7) {
      return [value, Number(value).toFixed(0)];
    } else {
      return [value, Number(value).toFixed(7 - digits)];
    }
  };

  const formatBorrowed = () => {
    const m = ethers.utils.parseEther("1");
    const value = ethers.utils.formatEther(aave[1].mul(m).div(maticPrice[1]));
    const digits = parseInt(value).toString().length;
    if (digits >= 7) {
      return [value, Number(value).toFixed(0)];
    } else {
      return [value, Number(value).toFixed(7 - digits)];
    }
  };

  return (
    <>
      <Head>
        <title>LSD - Vault Stats</title>
        <meta
          name="description"
          content="LSD provides liquid staking derivatives and leverage staking derivatives on your matic!"
        />
        <link rel="shortcut icon" href="/lsd_logo_32x32.png" />
      </Head>

      <div className="flex flex-col mt-8">
        <div className="flex flex-row flex-wrap">
          <div className="card bg-base-100 shadow-xl flex-1 m-4">
            <div className="flex flex-col items-center card-body p-6 pb-4">
              <span className="text-5xl">
                {invested == undefined ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  <div className="tooltip tooltip-secondary" data-tip={customFormatEther(invested)[0]}>
                    <button>{customFormatEther(invested)[1]}</button>
                  </div>
                )}
              </span>
              <span className="mt-11">WMatic Deposited</span>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl flex-1 m-4">
            <div className="flex flex-col items-center card-body p-6 pb-4">
              <span className="text-5xl">
                {currentAmount == undefined ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  <div className="tooltip tooltip-secondary" data-tip={customFormatEther(currentAmount)[0]}>
                    <button>{customFormatEther(currentAmount)[1]}</button>
                  </div>
                )}
              </span>
              {invested == undefined || currentAmount == undefined ? (
                ""
              ) : (
                <span className="text-sm">
                  {currentAmountPercentage() >= 0 ? (
                    <span className="text-green-400">{currentAmountPercentage().toFixed(2)}%</span>
                  ) : (
                    <span className="text-red-400">{currentAmountPercentage().toFixed(2)}%</span>
                  )}{" "}
                  more than deposited amount
                </span>
              )}
              <span className="mt-4">Currently Withdrawable WMatic</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="card bg-base-100 shadow-xl flex-1 m-4">
            <div className="flex flex-col items-center card-body p-6 pb-4">
              <span className="text-3xl">~ 6%</span>
              <div className="flex flex-row">
                <span className="mt-2">APY</span>
                <div
                  className="tooltip tooltip-secondary mt-2 ml-2"
                  data-tip="This is a hardcoded APY value based on the liquid and leverage staking derivate as of building this project. This will be updated with auto calculation of APY in some time!"
                >
                  <button>
                    <InformationCircleIcon className="h-4 w-4 mr-0.5 mt-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl flex-1 m-4">
            <div className="flex flex-col items-center card-body p-6 pb-4">
              <span className="text-3xl">
                {cost == undefined ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  <div className="tooltip tooltip-secondary" data-tip={customFormatEther(cost)[0]}>
                    <button>{customFormatEther(cost)[1]}</button>
                  </div>
                )}
              </span>
              <span className="mt-2">Current Cost Of LSD</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="card bg-base-100 shadow-xl flex-1 m-4">
            <div className="flex flex-col items-center card-body p-6 pb-4">
              <span className="text-2xl">
                {balance == undefined ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  <div className="tooltip tooltip-secondary" data-tip={customFormatEther(balance)[0]}>
                    <button>{customFormatEther(balance)[1]}</button>
                  </div>
                )}
              </span>
              <span className="mt-2">Issued LSD</span>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl flex-1 m-4">
            <div className="flex flex-col items-center card-body p-6 pb-4">
              {leverageStakingToggle == undefined ? (
                <button className="btn btn-ghost loading"></button>
              ) : leverageStakingToggle == true ? (
                <span className="text-2xl text-green-400">Enabled</span>
              ) : (
                <span className="text-2xl text-red-400">Disabled</span>
              )}
              <span className="mt-2">Leverage Staking</span>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl flex-1 m-4">
            <div className="flex flex-col items-center card-body p-6 pb-4">
              <span className="text-2xl">
                {borrowPercentage == undefined ? <button className="btn btn-ghost loading"></button> : borrowPercentage}
                %
              </span>
              <span className="mt-2">Borrow Percentage</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="card bg-base-100 shadow-xl flex-1 m-4">
            <div className="flex flex-col items-center card-body p-6 pb-4">
              <span className="text-2xl">
                {aave == undefined || maticXPrice == undefined ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  <div className="tooltip tooltip-secondary" data-tip={formatSupplied()[0]}>
                    <button>{formatSupplied()[1]}</button>
                  </div>
                )}
              </span>
              <span className="mt-1">Supplied MaticX To Aave</span>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl flex-1 m-4">
            <div className="flex flex-col items-center card-body p-6 pb-4">
              <span className="text-2xl">
                {aave == undefined || maticPrice == undefined ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  <div className="tooltip tooltip-secondary" data-tip={formatBorrowed()[0]}>
                    <button>{formatBorrowed()[1]}</button>
                  </div>
                )}
              </span>
              <span className="mt-1">Borrowed WMatic From Aave</span>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl flex-1 m-4">
            <div className="flex flex-col items-center card-body p-6 pb-4">
              <span className="text-2xl">
                {aave == undefined ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  Number(ethers.utils.formatEther(aave[5])).toFixed(2)
                )}
              </span>
              <span className="mt-1">Aave Health Factor</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VaultStats;
