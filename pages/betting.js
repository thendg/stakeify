export default function Betting() {
  return (
    <>
      <div class="grid place-items-center h-screen">
        <div class="flex flex-col justify-center items-center">
          <label for="price" class="text-4xl font-medium text-gray-700 pb-8 ">
            Place Your Bet!
          </label>
          <div class="relative mt-1 rounded-md shadow">
            <input
              type="text"
              name="price"
              id="price"
              class="block py-3 w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
              placeholder="0.000"
            ></input>
            <div class="absolute inset-y-0 right-0 ">
              <label for="currency" class="sr-only">
                Currency
              </label>
              <select
                id="currency"
                name="currency"
                class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-l"
              >
                <option>MATIC</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
