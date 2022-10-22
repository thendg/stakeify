import React, { Component } from "react";

class Generate extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { content: <></> };

    // Binding this keyword
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    const content = [
      <>
        <div class="flex flex-col w-full justify-center items-center">
          <label for="price" class="text-xl font-medium text-gray-700">
            Competition Name
          </label>

          <input
            type="text"
            name="price"
            id="price"
            class="rounded-md py-2 w-1/3 shadow text-l"
            placeholder=" e.g. Rocket League Championship Series"
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
            class="rounded-md w-1/3 shadow py-2 text-l"
            placeholder=" e.g. RLCS"
          ></input>
        </div>
        <div class="flex flex-col w-full justify-center items-center p-8">
          <button class="bg-transparent hover:bg-[#8247e5] text-[#8247e5] font-semibold hover:text-white py-6 px-12 border-2 border-[#8247e5] hover:border-transparent rounded text-xl">
            Deploy Contract
          </button>
        </div>
      </>,
      <>
        <div class="flex flex-col w-full justify-center items-center">
          <label for="price" class="text-xl font-medium text-gray-700">
            Game Code
          </label>
          <input
            type="text"
            name="price"
            id="price"
            class="rounded-md py-2 w-1/3 shadow text-l"
            placeholder=" e.g. RL"
          ></input>
        </div>
        <div class="flex flex-col w-full justify-center items-center p-8">
          <button class="bg-transparent hover:bg-[#8247e5] text-[#8247e5] font-semibold hover:text-white py-6 px-12 border-2 border-[#8247e5] hover:border-transparent rounded text-xl">
            Deploy Contract
          </button>
        </div>
      </>,
    ];
    this.setState({ content: content[index] });
  }

  render() {
    return (
      <>
        <div>
          <div class="flex justify-center p-16">
            <div>
              <div class="inline-flex">
                <button
                  class="bg-[#8247e5] hover:bg-white text-2xl text-white hover:text-[#8247e5] font-bold py-8 px-16 rounded-l outline outline-[#8247e5] outline-2"
                  onClick={() => this.handleClick(0)}
                >
                  Prize
                </button>
                <button
                  class="bg-[#8247e5] hover:bg-white text-2xl text-white hover:text-[#8247e5] font-bold py-8 px-16 rounded-r outline outline-[#8247e5] outline-2"
                  onClick={() => this.handleClick(1)}
                >
                  Live
                </button>
              </div>
            </div>
          </div>

          {this.state.content}
        </div>
      </>
    );
  }
}

export default Generate;
