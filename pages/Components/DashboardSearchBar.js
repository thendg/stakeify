import React, { useState } from "react";
import router, { useRouter } from "next/router";
import { useRef } from "react";

function DashboardSearchBar() {
  const inputRef = useRef(null);
  //inputRef.current.value

  return (
    <form action="/helloword" method="post">
      <div class="flex flex-col w-full justify-center items-center bg-[#8247E5] rounded-md">
        <label for="price" className="text-xl font-medium text-white">
          Go to Live or Prize Game
        </label>
        <input
          id="input"
          ref={inputRef}
          type="text"
          name="price"
          className="rounded-md py-2 px-4 shadow text-l w-3/4"
          placeholder="Type contract address..."
        />
        <button
          type="submit"
          className="text-white bg-[#8247E5]"
          onClick={() =>
            router.push(`/dashboard?contractAddress=${inputRef.current.value}`)
          }
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default DashboardSearchBar;
