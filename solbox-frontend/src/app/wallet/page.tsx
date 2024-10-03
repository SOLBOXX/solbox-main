'use client'
import { FC } from "react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import "@solana/wallet-adapter-react-ui/styles.css"; 

const WalletConnect: FC = () => {
    const { connected, wallet, disconnect } = useWallet();
    const { setVisible } = useWalletModal(); 

    const handleConnect = () => {
        setVisible(true); 
    };

    const handleDisconnect = () => {
        disconnect(); 
    };

    return (
        <div className="flex flex-col justify-center h-screen mx-3">
            <Image 
                src='/walletpicture.png'
                alt="Wallet logo"
                width={200}
                height={200}
                className="my-5 self-center"
            />
            {connected ? (
                <div>
                    <p className="text-white font-semibold text-center">Connected to {wallet?.adapter.name}</p>
                    <button
                        className="bg-secondary text-white p-4 rounded-xl mt-4 font-bold text-2xl w-full"
                        onClick={handleDisconnect}
                    >
                        Disconnect Wallet
                    </button>
                </div>
            ) : (
                <div>
                    <button
                        className="bg-primary text-white p-4 rounded-xl mt-4 w-full font-bold text-2xl"
                        onClick={handleConnect}
                    >
                        Connect Wallet
                    </button>
                </div>
            )}
        </div>
    );
};

export default WalletConnect;
