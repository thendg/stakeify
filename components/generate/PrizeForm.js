export default function () {
  return (
    <>
      <div class="flex flex-col w-full justify-center items-center">
        <label for="price" class="text-xl font-medium text-gray-700">
          Competition Name
        </label>

        <input
          type="text"
          name="price"
          id="price"
          class="rounded-md px-4 py-2 w-1/3 shadow text-l"
          placeholder="e.g. Rocket League Championship Series"
        ></input>
      </div>
      <div class="flex flex-col w-full justify-center items-center pt-8 ">
        <label for="price" class="text-xl font-medium text-gray-700">
          Competition Code
        </label>
        <input
          type="text"
          name="price"
          id="price"
          class="rounded-md w-1/3 shadow px-4 py-2 text-l"
          placeholder="e.g. RLCS"
        ></input>
      </div>
      <div class="flex flex-col w-full justify-center items-center p-8">
        <button class="bg-transparent hover:bg-[#8247e5] text-[#8247e5] font-semibold hover:text-white py-6 px-12 border-2 border-[#8247e5] hover:border-transparent rounded text-xl">
          Deploy Contract
        </button>
      </div>
    </>
  );
}
