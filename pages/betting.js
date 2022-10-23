function place() {
  console.log("place");
}

export default function Betting() {
  return (
    <div className="flex h-screen flex-col justify-center items-center space-y-5">
      <div>
        <label for="price" className="text-4xl font-medium text-gray-700 pb-8 ">
          Place Your Bet!
        </label>
        <div className="relative mt-1 rounded-md shadow">
          <input
            type="text"
            name="price"
            id="price"
            className="block py-3 w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
            placeholder="0.000"
          ></input>
          <div className="absolute inset-y-0 right-0 ">
            <label for="currency" className="sr-only">
              Currency
            </label>
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
        type="text"
        name="price"
        id="price"
        className="rounded-md px-4 py-2 w-1/3 shadow text-l"
        placeholder=" Contract Address"
      ></input>

      <button className="hover:underline text-3xl" onclick={place}>
        Place
      </button>
    </div>
  );
}
