import React, { useState } from "react";
import PrizeForm from "../components/generate/PrizeForm";

const PRIZE = "prize";
const LIVE = "live";

function Title({ children }) {
  return <div className="text-2xl text-black underline">{children}</div>;
}

function getContent(content) {
  switch (content) {
    case PRIZE:
      return <PrizeForm />;
    case LIVE:
      return <Title>Coming soon!</Title>;
    default:
      return <Title>Select a type!</Title>;
  }
}

export default function Generate() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <div>
        <div className="flex justify-center p-16">
          <div>
            <div className="inline-flex">
              <button
                className="bg-[#8247e5] hover:bg-white text-2xl text-white hover:text-[#8247e5] font-bold py-8 px-16 rounded-l outline outline-[#8247e5] outline-2"
                onClick={() => setSelected(PRIZE)}
              >
                Prize
              </button>
              <button
                className="bg-[#8247e5] hover:bg-white text-2xl text-white hover:text-[#8247e5] font-bold py-8 px-16 rounded-r outline outline-[#8247e5] outline-2"
                onClick={() => setSelected(LIVE)}
              >
                Live
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full justify-center items-center">
          {getContent(selected)}
        </div>
      </div>
    </>
  );
}
