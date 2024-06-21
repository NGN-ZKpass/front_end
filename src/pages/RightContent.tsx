"use client";
import Image from "next/image";
import { verify } from '../pages/api/transgate';



// Define the type for the props
interface RightContentProps {
  writeAsync: () => Promise<void>; // Adjust the return type based on your actual async function
}


const RightContent: React.FC<{ claim: () => void }> = ({ claim }) => {
  
  const handleVerify = async () => {
    await verify();
  };



  return (
    <>
      <div
        style={{ maxWidth: "36%" }}
        className="bg-gray-900 border border-gray-700 shadow-lg rounded-lg mx-4 md:mx-auto md:max-w-xl mt-8 md:mt-20 p-4 md:p-6"
      >
        <div className="text-white font-roboto text-base lg:text-lg p-4">
          Claim Your Citizen Relief Funds
        </div>

        <div className="text-white font-roboto text-base lg:text-md p-4">
        Welcome to the NIgeria Relief Funds portal, designed to streamline your access to the Nigeria government relief funds. 
        </div>

        <div className="text-white font-roboto text-base lg:text-lg p-4 ">
          Terms and Conditions
        </div>
        <div className="mt-2 flex items-start space-x-4">
          <input
            type="checkbox"
            required
            className="mt-1 h-5 w-5 text-green-500"
          />
          <div className="text-white font-roboto text-base lg:text-md p-4">
            <p className="mb-2">
              Note:  Ensure you've genrated Nigerian citizenship proof from the <button
                onClick={() => handleVerify()} className="font-bold  text-green-500 rounded hover:text-red-500"> NIMC website</button> before claiming funds. 

            </p>
            <p>
              Note: that you cannot claim funds more than twice. If you do, you
              would be penalized if caught and be withdrawn from every fund
              scheme of the government.
            </p>
          </div>
        </div>

        <button className="flex justify-center items-center text-white font-roboto text-base p-4 border-2 border-green-500 w-full md:w-1/2 lg:w-1/3 mt-10 mx-auto"
        onClick={claim}>
          Claim Funds 🪙
        </button>
      </div>
    </>
  );
}

export default RightContent;
