import { useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { ContractUI } from "~~/components/scaffold-eth";
import { ContractName } from "~~/utils/scaffold-eth/contract";
import { getContractNames } from "~~/utils/scaffold-eth/contractNames";

const Debug: NextPage = () => {
  const contractNames = getContractNames();
  const [selectedContract, setSelectedContract] = useState<ContractName>(contractNames[0]);

  return (
    <>
      <Head>
        <title>LSD - Debug</title>
        <meta
          name="description"
          content="LSD provides liquid staking derivatives and leverage staking derivatives on your matic!"
        />
        <link rel="shortcut icon" href="/lsd_logo_32x32.png" />
      </Head>
      <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
        {contractNames.length === 0 ? (
          <p className="text-3xl mt-14">No contracts found!</p>
        ) : (
          <>
            {contractNames.length > 1 && (
              <div className="flex flex-row gap-2 w-full max-w-7xl pb-1 px-6 lg:px-10 flex-wrap">
                {contractNames.map(contractName => (
                  <button
                    className={`btn btn-sm normal-case font-thin ${
                      contractName === selectedContract ? "btn-primary" : "btn-secondary"
                    }`}
                    key={contractName}
                    onClick={() => setSelectedContract(contractName)}
                  >
                    {contractName}
                  </button>
                ))}
              </div>
            )}
            {contractNames.map(contractName => (
              <ContractUI
                key={contractName}
                contractName={contractName}
                className={contractName === selectedContract ? "" : "hidden"}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Debug;
