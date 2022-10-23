import router from "next/router";

export default function NavBar() {
  return (
    <nav
      id="header"
      class="flex flex-roww-full z-30 top-10 py-1 bg-white shadow-lg border-b border-violet-200"
    >
      <div class="inline-block no-underline hover:text-black cursor-pointer font-medium text-2xl py-4 px-6 lg:-ml-2 justify-start">
        Bednarski
      </div>

      <div class="w-full flex items-center justify-end mt-0  py-2">
        <label for="menu-toggle" class="cursor-pointer md:hidden block">
          <svg
            class="fill-current text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>

        <div
          class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul class="md:flex  text-base text-slate-800 pt-4 md:pt-0">
              <li>
                <a
                  class="inline-block no-underline hover:text-black cursor-pointer font-medium text-lg py-2 px-4 lg:-ml-2"
                  onClick={() => router.push("/")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  class="inline-block no-underline hover:text-black cursor-pointer font-medium text-lg py-2 px-4 lg:-ml-2"
                  onClick={() => router.push("/generate")}
                >
                  Generate contract
                </a>
              </li>
              <li>
                <a
                  class="inline-block no-underline hover:text-black cursor-pointer font-medium text-lg py-2 px-4 lg:-ml-2"
                  onClick={() => router.push("/betting")}
                >
                  Place transaction
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
