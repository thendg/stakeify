import React from 'react';

function PageButton(props) {
    const name = props.name;

    return(
        <button className="text-xl text-[#8247E5] bg-white hover:text-white hover:bg-[#8247E5] text-center font-bold shadow py-2 border-[#8247E5] border-2 rounded-md">{name}</button>
    );
}
export default PageButton;