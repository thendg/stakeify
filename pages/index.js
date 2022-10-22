import React from 'react';
import HeaderBar from './Components/HeaderBar';
import PageButton from './Components/PageButton';
import DashboardSearchBar from './Components/DashboardSearchBar';

function HomePage() {
    return (
        <div>
            <HeaderBar />
            <div className="mt-14 font-sans text-xl text-justify mx-32">
                <p>Stakeify is a staking platform built on Polygon for prize distribution in competitive gaming environments.</p>
                <p className="mt-4">Players will place their stakes into a stake pool. Depending on the percentage of the stake pool that the winner provided, the winner will receive their stake back plus the proportionate percentage from the stakes of other players.</p>
                <p className="mt-4">We define two protocols for each of these staking mechanisms: live staking and prize staking. Live staking is geared towards individual lobbies. Prize staking is geared towards championships such as the Rocket League Championship Series.</p>
            </div>
            <div class="content-evenly grid grid-cols-2 gap-4 mt-14 mx-32">
                <PageButton name="Create Contract"/> 
                <DashboardSearchBar/>
            </div>
        </div>
        
    );
}

export default HomePage;