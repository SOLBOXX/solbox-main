'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Deposit() {
    const [selectedCoin, setSelectedCoin] = useState('SOL'); 

  const handleCoinChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCoin(e.target.value);
  };

  return (
    <div className='flex flex-col justify-center h-screen'>
      <form action="">
        <div className='my-3'>
            <label htmlFor="address" className="flex justify-between text-sm font-medium leading-6 text-white pb-2">
                <p>Recipient</p>
                <p>Address <i className='bx bxs-chevron-down pl-3'></i> </p>
            </label>  
            <input 
                type="text" 
                id="address"
                name="address"
                placeholder='Enter wallet address'
                className='font-medium rounded-md shadow-lg bg-lapis p-4 outline-none focus:outline-gray-400 placeholder:text-indigo text-white text-base w-full'
            />
        </div>

        <div className='my-5'>
            <label htmlFor="amount" className="flex justify-between text-sm font-medium leading-6 text-white">
                <p>Amount</p>
                <p>Max: 2.05</p>
            </label>

            <div className="flex items-center justify-between mt-2 rounded-md shadow-lg bg-lapis p-4">
                {/* Coin select (on the left) */}
                <div className="flex items-center pl-3">
                    {selectedCoin === 'SOL' ? (
                        <Image src='/SOL.png' alt='sol icon' width={20} height={20} />
                    ) : (
                        <Image src='/USDC.png' alt='usdc icon' width={20} height={20} />
                    )}
                    <select
                        id="coin"
                        name="coin"
                        value={selectedCoin}
                        onChange={handleCoinChange}
                        className="bg-transparent text-white ml-2 border-none focus:ring-0 focus:outline-none appearance-none"
                    >
                        <option>SOL</option>
                        <option>USDT</option>
                    </select>
                </div>

                <input
                id="amount"
                name="amount"
                type="text"
                placeholder="0"
                className="block w-[100px] px-4 py-1.5 border-0 text-right placeholder:text-indigo text-white  sm:text-sm bg-transparent outline-none"
                />
            </div>
        </div>
        </form>

    </div>
  )
}
