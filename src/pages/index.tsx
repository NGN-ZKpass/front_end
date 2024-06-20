"use client";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useContractRead,
  useContractWrite,
  useContract,
} from "@starknet-react/core";
import abi from "../abi/abi.json";
import { COUNTER_CONTRACT_ADDRESS } from "@/util/constant";
import { useMemo, useState } from "react";
import logo from "../images/logo.png";
import Image from "next/image";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import { verify } from '../pages/api/transgate';

function App() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();
  const [value, setValue] = useState<number>(0);

  // read state
  const { data, isError, isLoading, error } = useContractRead({
    functionName: "get_counter",
    abi,
    address: COUNTER_CONTRACT_ADDRESS,
    watch: true,
  });
  // increment counter: write action
  const { contract } = useContract({
    abi: abi,
    address: COUNTER_CONTRACT_ADDRESS,
  });

  const calls = useMemo(() => {
    if (!address || !contract) return;
    return contract.populateTransaction["increment_counter"]!();
  }, [contract, address]);

  const {
    writeAsync,
    data: result,
    isPending,
  } = useContractWrite({
    calls,
  });



  // get counter value: read action
  const handleGetCount = async () => {
    let counter = await contract?.get_counter();
    setValue(counter?.toString());
  };

  return (
    <>
      <div className="px-4 py-2 ml-4 mr-4">
        <header className="flex flex-col md:flex-row justify-between items-center p-2">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl">
              <Image src={logo} alt="logo" className="w-32 h-auto md:w-48" />
            </h1>
          </div>

          {isConnected ? (
            <button
              onClick={() => disconnect()}
              className="bg-green-500 text-white py-2 px-4 mt-2 md:mt-0 focus:outline-none shadow hover:bg-green-700 rounded-xl"
            >
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </button>
          ) : (
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
              <button className=" text-white py-2 px-4 mt-2 md:mt-0 focus:outline-none ">
                Help Center
              </button>

              <button
                onClick={() => connect({ connector: connectors[0] })}
                className="bg-green-500 text-white py-2 px-4 focus:outline-none shadow hover:bg-green-700 rounded-lg"
              >
                Connect Wallet
              </button>
       
            </div>
          )}
        </header>
      </div>

      <div className="flex justify-between items-center mt-3">
        <LeftContent />
        <RightContent />
      </div>
    </>
  );
}

export default App;

// <main className="flex justify-center">
//         <div className="">
//           <div className="text-center my-4">
//             <h2>Ensure to connect to Sepolia Test network! </h2>
//             <p className="description">Connected Address: {address}</p>
//             <h2>
//               Count: {isLoading && "Loading"} {data?.toString()}
//             </h2>
//             <h2>
//               value:  {value}
//             </h2>
//             {/* <h2>{isError && error?.message}</h2> */}
//             <div>
//               <div className="flex justify-center space-x-4 my-4">
//                 <div>
//                   <button onClick={() =>  writeAsync()} className="bg-green-500 p-2 rounded-lg" type="button">
//                     Increment Counter
//                   </button>
//                 </div>
//                 <div>
//                   <button className="bg-red-500 p-2 rounded-lg" type="button">
//                     Decrement Counter
//                   </button>
//                 </div>

//                 <div>
//                   <button
//                   onClick={handleGetCount}
//                     className="bg-yellow-500 p-2 rounded-lg"
//                     type="button"
//                   >
//                     Get Counter
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
