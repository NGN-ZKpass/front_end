"use client";

import {
  useAccount,
  useConnect,
  useDisconnect,
  useContractRead,
  useContractWrite,
  useContract,
} from "@starknet-react/core";
import { useMemo, useState } from "react";

// import Image from "next/image";
import zkpass from "../images/zkpass.png";
import connect from "../images/connect.png";
import Image from "next/image";
function LeftContent() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();
  return (
    <>
      <div className="mx-4 md:mx-auto md:max-w-xl mt-3 md:mt-20">
        <div className="text-white text-4xl md:text-5xl lg:text-6xl font-roboto font-normal leading-tight">
          Your Gateway to <br /> Receive Government <br /> Relief Funds
        </div>

        <div className="text-white text-base md:text-lg font-roboto font-normal mt-8 md:mt-12">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 md:mt-16">
          <div className="w-32 md:w-48">
            {/* <Image src={connect} alt="connect" className="w-full h-auto" /> */}
            {isConnected ? (
              <button
                onClick={() => disconnect()}
                className="bg-green-500 text-white py-2 px-4 mt-2 md:mt-0 focus:outline-none shadow hover:bg-green-700 rounded-xl"
              >
                Disconnect
              </button>
            ) : (
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                {connectors.map((connector) => (
                  <button
                    key={connector.id}
                    onClick={() => connect({ connector })}
                    className="bg-green-500 text-white py-2 px-4 focus:outline-none shadow hover:bg-green-700 rounded-lg"
                  >
                    {`Connect ${connector.name.toUpperCase()}...`}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="w-32 md:w-48">
            <Image src={zkpass} alt="zkpass" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftContent;
