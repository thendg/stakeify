import { useState, useEffect, useRef } from "react";
import MetamaskLogoSVG from "../components/betting/MetamaskLogoSVG";

export default function Betting() {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const amountRef = useRef(null);
  const addressRef = useRef(null);

  useEffect(() => setHasMetamask(typeof window.ethereum !== "undefined"));

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
      } catch (e) {
        console.log(e);
      }
    } else setIsConnected(false);
  }

  async function execute() {
    if (typeof window.ethereum !== "undefined") {
      alert("Not yet implemented");
    } else console.log("Please install Metamask");
  }

  return (
    <div className="flex h-screen flex-col justify-center items-center space-y-5">
      <div>
        <label className="text-4xl font-medium text-gray-700 pb-8 ">
          Place Your Bet!
        </label>
        <div className="relative mt-1 rounded-md shadow">
          <input
            ref={amountRef}
            type="text"
            name="price"
            id="price"
            className="block py-3 w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
            placeholder="0.000"
          ></input>
          <div className="absolute inset-y-0 right-0 ">
            <label className="sr-only">Currency</label>
            <select
              id="currency"
              name="currency"
              className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-l"
            >
              <option>MATIC</option>
            </select>
          </div>
        </div>
      </div>

      <input
        ref={addressRef}
        type="text"
        name="price"
        id="price"
        className="rounded-md px-4 py-2 w-1/3 shadow text-l"
        placeholder=" Contract Address"
      ></input>

      <div>
        {hasMetamask ? (
          isConnected ? (
            <button className="hover:underline text-3xl" onClick={execute}>
              Place
            </button>
          ) : (
            <button
              type="button"
              className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
              onClick={connect}
            >
              <MetamaskLogoSVG />
              Connect to Metamask
            </button>
          )
        ) : (
          "Please install metamask"
        )}
      </div>
    </div>
  );
}
