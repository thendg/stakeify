import React from 'react';
import router,{ useRouter } from 'next/router'

function PageButton(props) {
    const router = useRouter();
    const name = props.name;
    const reRoute = props.reRoute;
    const handleClick = (e) => {
        e.preventDefault()
        router.push(reRoute);
      }

    return(
        <button onClick={handleClick} className="text-xl text-[#8247E5] bg-white hover:text-white hover:bg-[#8247E5] text-center font-bold shadow py-2 border-[#8247E5] border-2 rounded-md">{name}</button>
    );
}
export default PageButton;