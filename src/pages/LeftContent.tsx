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
            The Nigeria Relief Funds portal is designed to streamline your access to the Nigeria government relief funds. connect your wallet to get started and claim your funds.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 md:mt-16">
          <div className="flex w-48 md:w-60">
          <span className="text-white font-roboto text-small">Powered by:</span>  <Image src={zkpass} alt="zkpass" className="w-2/3 h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftContent;
