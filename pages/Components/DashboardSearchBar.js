import React, {useState} from 'react';

function DashboardSearchBar(){
    return (
        
        <form>
            <div class="flex flex-col w-full justify-center items-center bg-[#8247E5] rounded-md">           
                <label for="price" className="text-xl font-medium text-white">Go to Live or Prize Game</label>
                <input type="search" name="price" id="price" className="rounded-md py-2 px-4 shadow text-l w-3/4" placeholder="Type URL..."/>
                <button type = "submit" className="text-white bg-[#8247E5]">Search</button>       
            </div>
        </form>
    );
}

export default DashboardSearchBar;