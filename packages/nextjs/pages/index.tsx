import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import type { NextPage } from "next";
import { useAccount, useNetwork } from "wagmi";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, Cog6ToothIcon, WalletIcon } from "@heroicons/react/24/solid";
import { useAccountBalance, useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import scaffoldConfig from "~~/scaffold.config";
import { getTargetNetwork } from "~~/utils/scaffold-eth";
import { contracts } from "~~/utils/scaffold-eth/contract";

const Home: NextPage = () => {
  const { chain } = useNetwork();
  const { address } = useAccount();
  const { balance } = useAccountBalance(address);
  const [tabOption, setTabOption] = useState(0);
  const [slippage, setSlippage] = useState(0.5);
  const [depositOption, setDepositOption] = useState(0);
  const [depositValue, setDepositValue] = useState(0);
  const [minimumReceiveLSDActual, setMinimumReceiveLSDActual] = useState("0");
  const [minimumReceiveLSD, setMinimumReceiveLSD] = useState("0");
  const [hideButton, setHideButton] = useState(true);

  const writeDisabled = !chain || chain?.id !== getTargetNetwork().id;

  const { data: receiveLSD } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "convertToShares",
    args: [
      depositValue.toString() == ""
        ? ethers.utils.parseEther("0")
        : ethers.utils.parseEther(Number(depositValue).toFixed(18)),
    ],
  });

  const { data: wmaticBalance } = useScaffoldContractRead({
    contractName: "WMATIC",
    functionName: "balanceOf",
    args: [address],
  });

  const { data: wmaticAllowance } = useScaffoldContractRead({
    contractName: "WMATIC",
    functionName: "allowance",
    args: [address, contracts[scaffoldConfig.targetNetwork.id][0]["contracts"]["LSDWrapper"]["address"]],
  });

  const { writeAsync: w1 } = useScaffoldContractWrite({
    contractName: "WMATIC",
    functionName: "approve",
    args: [
      contracts[scaffoldConfig.targetNetwork.id][0]["contracts"]["LSDWrapper"]["address"],
      ethers.constants.MaxUint256,
    ],
  });

  const { writeAsync: w2 } = useScaffoldContractWrite({
    contractName: "LSDWrapper",
    functionName: "deposit",
    args: [
      depositValue.toString() == "" ? ethers.utils.parseEther("0") : ethers.utils.parseEther(depositValue.toString()),
      address,
      ethers.utils.parseEther(minimumReceiveLSDActual.toString()),
    ],
  });

  const { writeAsync: w3 } = useScaffoldContractWrite({
    contractName: "LSDWrapper",
    functionName: "depositGateway",
    args: [address, ethers.utils.parseEther(minimumReceiveLSDActual.toString())],
    value: depositValue.toString(),
  });

  useEffect(() => {
    if (receiveLSD != undefined) {
      minimumCalculator(receiveLSD);
    }
  }, [slippage, receiveLSD]);

  const customFormatEther = (x: any) => {
    const value = ethers.utils.formatEther(x);
    const digits = parseInt(value).toString().length;
    if (digits >= 7) {
      return [value, Number(value).toFixed(0)];
    } else {
      return [value, Number(value).toFixed(7 - digits)];
    }
  };

  const minimumCalculator = (x: any) => {
    x = x.sub(x.mul(ethers.utils.parseEther((slippage * 100).toString())).div(ethers.utils.parseEther("10000")));
    const data = customFormatEther(x);
    setMinimumReceiveLSDActual(data[0]);
    setMinimumReceiveLSD(data[1]);
  };

  const setCustomSlippage = (e: any) => {
    if (e.target.value == "" || Number(e.target.value) > 100) {
      setSlippage(0);
    } else {
      setSlippage(Number(Number(e.target.value).toFixed(2)));
    }
  };

  const router = useRouter();

  const addTokenToWallet = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const tokenInfo = {
      type: "ERC20",
      options: {
        address: contracts[scaffoldConfig.targetNetwork.id][0]["contracts"]["LSD"]["address"],
        symbol: "LSD",
        decimals: 18,
        image: `${window.location.origin}${router.pathname}lsd_logo.png`,
      },
    };

    signer
      .getAddress()
      .then(address => window.ethereum.request({ method: "wallet_watchAsset", params: { ...tokenInfo, address } }))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    if (window.ethereum) {
      setHideButton(false);
    }
  }, []);

  // Tab 1

  const [redeemValue, setRedeemValue] = useState("0");
  const [unwrap, setUnwrap] = useState(false);
  const [minimumReceiveWMaticActual, setMinimumReceiveWMaticActual] = useState("0");
  const [minimumReceiveWMatic, setMinimumReceiveWMatic] = useState("0");

  const { data: lsdBalance } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "balanceOf",
    args: [address],
  });

  const { data: receiveWMatic } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "convertToAssets",
    args: [
      redeemValue.toString() == ""
        ? ethers.utils.parseEther("0")
        : ethers.utils.parseEther(Number(redeemValue).toFixed(18)),
    ],
  });

  const { data: lsdAllowance } = useScaffoldContractRead({
    contractName: "LSD",
    functionName: "allowance",
    args: [address, contracts[scaffoldConfig.targetNetwork.id][0]["contracts"]["LSDWrapper"]["address"]],
  });

  const { writeAsync: w4 } = useScaffoldContractWrite({
    contractName: "LSD",
    functionName: "approve",
    args: [
      contracts[scaffoldConfig.targetNetwork.id][0]["contracts"]["LSDWrapper"]["address"],
      ethers.constants.MaxUint256,
    ],
  });

  const { writeAsync: w5 } = useScaffoldContractWrite({
    contractName: "LSDWrapper",
    functionName: "redeem",
    args: [
      redeemValue.toString() == "" ? ethers.utils.parseEther("0") : ethers.utils.parseEther(redeemValue.toString()),
      address,
      ethers.utils.parseEther(minimumReceiveWMaticActual.toString()),
    ],
  });

  const { writeAsync: w6 } = useScaffoldContractWrite({
    contractName: "LSDWrapper",
    functionName: "redeemGateway",
    args: [
      redeemValue.toString() == "" ? ethers.utils.parseEther("0") : ethers.utils.parseEther(redeemValue.toString()),
      address,
      ethers.utils.parseEther(minimumReceiveWMaticActual.toString()),
    ],
  });

  useEffect(() => {
    if (receiveWMatic != undefined) {
      minimumCalculator2(receiveWMatic);
    }
  }, [slippage, receiveWMatic]);

  const minimumCalculator2 = (x: any) => {
    x = x.sub(x.mul(ethers.utils.parseEther((slippage * 100).toString())).div(ethers.utils.parseEther("10000")));
    const data = customFormatEther(x);
    setMinimumReceiveWMaticActual(data[0]);
    setMinimumReceiveWMatic(data[1]);
  };

  return (
    <>
      <Head>
        <title>LSD - Home</title>
        <meta
          name="description"
          content="LSD provides liquid staking derivatives and leverage staking derivatives on your matic!"
        />
        <link rel="shortcut icon" href="/lsd_logo_32x32.png" />
      </Head>

      <div className="flex justify-around mt-12">
        <div className="card w-11/12 lg:w-5/12 bg-base-100 shadow-xl mx-4 ">
          <div className="card-body p-6">
            <div className="tabs tabs-boxed">
              <div className="grow">
                {tabOption == 0 ? (
                  <a className="tab tab-active font-medium">DEPOSIT</a>
                ) : (
                  <a className="tab font-medium" onClick={() => setTabOption(0)}>
                    DEPOSIT
                  </a>
                )}
                {tabOption == 1 ? (
                  <a className="tab tab-active font-medium">REDEEM</a>
                ) : (
                  <a className="tab font-medium" onClick={() => setTabOption(1)}>
                    REDEEM
                  </a>
                )}
              </div>
              <div>
                {tabOption == 2 ? (
                  <a className="tab tab-active">
                    <Cog6ToothIcon className="h-4 w-4" />
                  </a>
                ) : (
                  <a className="tab" onClick={() => setTabOption(2)}>
                    <Cog6ToothIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* Tab Content */}
          {/* Tab 0 */}
          <div className={`card-body px-6 pt-0 pb-6 ${tabOption == 0 ? "" : "hidden"}`}>
            <div>
              <div className="flex flex-row mt-2">
                <input
                  type="number"
                  placeholder="Deposit amount"
                  className="input input-bordered input-primary grow min-w-0"
                  value={depositValue}
                  onChange={e => {
                    setDepositValue(e.target.value);
                  }}
                />
                <div className="dropdown dropdown-hover dropdown-end">
                  <label tabIndex={0} className="btn btn-secondary ml-2">
                    <div className="flex flex-row">
                      {depositOption == 0 ? "WMatic" : "Matic"} <ChevronDownIcon className="h-4 w-4 ml-1.5" />
                    </div>
                  </label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52">
                    <li>
                      <a className="active:bg-secondary" onClick={() => setDepositOption(0)}>
                        WMatic
                      </a>
                    </li>
                    <li>
                      <a className="active:bg-secondary" onClick={() => setDepositOption(1)}>
                        Matic
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`flex flex-row justify-end mt-2 ${writeDisabled ? "hidden" : ""}`}>
                <div
                  className="tooltip tooltip-secondary"
                  data-tip="Ensure that the depositing value is less then or equal to the balance!"
                >
                  <button>
                    <InformationCircleIcon className="h-4 w-4 mr-0.5 mt-1" />
                  </button>
                </div>
                {depositOption == 0 ? (
                  <>
                    <button
                      className="btn btn-ghost btn-xs opacity-70"
                      onClick={() => setDepositValue(ethers.utils.formatEther(wmaticBalance))}
                    >
                      MAX
                    </button>
                    <span className="m-0 ml-0.5 mt-px text-sm opacity-50">
                      Balance:{" "}
                      {wmaticBalance != undefined ? Number(ethers.utils.formatEther(wmaticBalance)).toFixed(4) : "0"}
                    </span>
                  </>
                ) : (
                  <>
                    <button className="btn btn-ghost btn-xs opacity-70" onClick={() => setDepositValue(balance)}>
                      MAX
                    </button>
                    <span className="m-0 ml-0.5 mt-px text-sm opacity-50">Balance: {balance?.toFixed(4)}</span>
                  </>
                )}
              </div>
            </div>
            <div className="divider">WILL RECEIVE</div>
            <div>
              <div className="flex flex-row justify-between">
                <p className="m-0 ml-3 text-2xl">
                  {receiveLSD == undefined ? (
                    <button className="btn btn-ghost loading"></button>
                  ) : (
                    <div className="tooltip tooltip-secondary" data-tip={customFormatEther(receiveLSD)[0]}>
                      <button>{customFormatEther(receiveLSD)[1]}</button>
                    </div>
                  )}{" "}
                  LSD
                </p>
                <button
                  className={`btn btn-secondary btn-xs ${hideButton || writeDisabled ? "hidden" : ""}`}
                  onClick={addTokenToWallet}
                >
                  <WalletIcon className="h-4 w-4 mr-2" /> Add LSD
                </button>
              </div>
              <p className="m-0 ml-3 text-sm opacity-50">
                Minimum:{" "}
                {receiveLSD == undefined ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  <button>{minimumReceiveLSD}</button>
                )}
              </p>
            </div>
            {!writeDisabled &&
            depositOption == 0 &&
            wmaticAllowance != undefined &&
            Number(depositValue) > Number(ethers.utils.formatEther(wmaticAllowance)) ? (
              <button className="btn btn-primary mt-4 w-full" onClick={w1}>
                Approve
              </button>
            ) : (
              ""
            )}
            <button
              className="btn btn-primary mt-4 w-full"
              onClick={depositOption == 0 ? w2 : w3}
              disabled={
                writeDisabled ||
                (depositOption == 0 &&
                  wmaticAllowance != undefined &&
                  Number(depositValue) > Number(ethers.utils.formatEther(wmaticAllowance)))
              }
            >
              Deposit
            </button>
          </div>
          {/* Tab 1 */}
          <div className={`card-body px-6 pt-0 pb-6 ${tabOption == 1 ? "" : "hidden"}`}>
            <div>
              <div className="flex flex-row mt-2">
                <input
                  type="number"
                  placeholder="Deposit amount"
                  className="input input-bordered input-primary grow"
                  value={redeemValue}
                  onChange={e => {
                    setRedeemValue(e.target.value);
                  }}
                />
                <button className="ml-3 btn btn-secondary no-animation">LSD</button>
              </div>
              <div className={`flex flex-row justify-end mt-2 ${writeDisabled ? "hidden" : ""}`}>
                <div
                  className="tooltip tooltip-secondary"
                  data-tip="Ensure that the redeeming value is less then or equal to the balance!"
                >
                  <button>
                    <InformationCircleIcon className="h-4 w-4 mr-0.5 mt-1" />
                  </button>
                </div>
                <button
                  className="btn btn-ghost btn-xs opacity-70"
                  onClick={() => setRedeemValue(ethers.utils.formatEther(lsdBalance))}
                >
                  MAX
                </button>
                <span className="m-0 ml-0.5 mt-px text-sm opacity-50">
                  Balance: {lsdBalance != undefined ? Number(ethers.utils.formatEther(lsdBalance)).toFixed(4) : "0"}
                </span>
              </div>
            </div>
            {!writeDisabled ? (
              <div className="form-control">
                <label className="label cursor-pointer justify-normal">
                  <span className="label-text mr-4">Unwrap WMatic</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-success"
                    checked={unwrap}
                    onChange={() => setUnwrap(!unwrap)}
                  />
                </label>
              </div>
            ) : (
              ""
            )}

            <div className="divider">WILL RECEIVE</div>
            <div>
              <p className="m-0 ml-3 text-2xl">
                {receiveWMatic == undefined ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  <div className="tooltip tooltip-secondary" data-tip={customFormatEther(receiveWMatic)[0]}>
                    <button>{customFormatEther(receiveWMatic)[1]}</button>
                  </div>
                )}{" "}
                {unwrap ? "Matic" : "WMatic"}
              </p>
              <p className="m-0 ml-3 text-sm opacity-50">
                Minimum:{" "}
                {receiveWMatic == undefined ? (
                  <button className="btn btn-ghost loading"></button>
                ) : (
                  <button>{minimumReceiveWMatic}</button>
                )}
              </p>
            </div>
            {!writeDisabled &&
            lsdAllowance != undefined &&
            Number(redeemValue) > Number(ethers.utils.formatEther(lsdAllowance)) ? (
              <button className="btn btn-primary mt-4 w-full" onClick={w4}>
                Approve
              </button>
            ) : (
              ""
            )}
            <button
              className="btn btn-primary mt-4 w-full"
              onClick={unwrap ? w6 : w5}
              disabled={
                writeDisabled ||
                (lsdAllowance != undefined && Number(redeemValue) > Number(ethers.utils.formatEther(lsdAllowance)))
              }
            >
              Redeem
            </button>
          </div>
          {/* Tab 2 */}
          <div className={`card-body px-6 pt-0 pb-6 ${tabOption == 2 ? "" : "hidden"}`}>
            <h2 className="card-title text-2xl ml-2 mb-0">SLIPPAGE %</h2>
            <div className="flex flex-overflow justify-around items-end">
              {slippage == 0.5 ? (
                <button className="btn btn-primary py-1.5 px-6">0.5</button>
              ) : (
                <button className="btn btn-secondary py-1.5 px-6" onClick={() => setSlippage(0.5)}>
                  0.5
                </button>
              )}
              {slippage == 1 ? (
                <button className="btn btn-primary py-1.5 px-6 ml-3">1</button>
              ) : (
                <button className="btn btn-secondary py-1.5 px-6 ml-3" onClick={() => setSlippage(1)}>
                  1
                </button>
              )}
              {slippage != 0.5 && slippage != 1 ? (
                <div className="form-control w-full max-w-xs">
                  <label className="label pt-0">
                    <span className="label-text pl-4">CUSTOM:</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Custom"
                    className="input input-bordered input-primary w-full max-w-xs ml-3"
                    value={slippage}
                    onChange={e => {
                      setCustomSlippage(e);
                    }}
                  />
                </div>
              ) : (
                <div className="form-control w-full max-w-xs">
                  <label className="label pt-0">
                    <span className="label-text pl-4">CUSTOM:</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Custom"
                    className="input input-bordered input-secondary w-full max-w-xs ml-3"
                    value={slippage}
                    onChange={e => {
                      setCustomSlippage(e);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
