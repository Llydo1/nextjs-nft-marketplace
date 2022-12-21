import React from "react";
import { ConnectButton } from "web3uikit";
import Link from "next/link";

const Header = () => {
    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <h1 className="py-4 px-4 font-bold text-3xl">NFT Marketplace</h1>
            <div className="flex flex-row items-center">
                <Link href="/">
                    <p className="mr-4 p-6">Home page</p>
                </Link>
                <Link href="/sell-nft">
                    <p className="mr-4 p-6">Sell Nft</p>
                </Link>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    );
};

export default Header;
