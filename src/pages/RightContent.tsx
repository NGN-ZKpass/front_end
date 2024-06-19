"use client";
import Image from "next/image";

function RightContent() {
  return (
    <>
      <div
        style={{ maxWidth: "36%" }}
        className="bg-gray-900 border border-gray-700 shadow-lg rounded-lg mx-4 md:mx-auto md:max-w-xl mt-8 md:mt-20 p-4 md:p-6"
      >
        <div className="text-white font-roboto text-base lg:text-lg p-4">
          Claim Your Citizen Reward
        </div>

        <div className="text-white font-roboto text-base lg:text-md p-4">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi
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
              Note that you cannot claim funds more than twice. If you do, you
              would be penalized if caught and be withdrawn from every fund
              scheme of the government.
            </p>
            <p>
              Note that you cannot claim funds more than twice. If you do, you
              would be penalized if caught and be withdrawn from every fund
              scheme of the government.
            </p>
          </div>
        </div>

        <button className="flex justify-center items-center text-white font-roboto text-base p-4 border-2 border-green-500 w-full md:w-1/2 lg:w-1/3 mt-10 mx-auto">
          Claim Funds 🪙
        </button>
      </div>
    </>
  );
}

export default RightContent;
