
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import bg1 from "../../assets/bg1.png";
import profile_icon from "../../assets/profile_icon.png";
import profile_icon1 from "../../assets/profile_icon1.png";
import btc from "../../assets/btc_icon.png";
import eth from "../../assets/eth_icon.webp";
import tet from "../../assets/tether_icon.png";
import block from "../../assets/blockchain.png";
import block2 from "../../assets/web3_img.svg";

import { FaDiscord, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import swap1 from "../../assets/swap.png";
import swap2 from "../../assets/swap2.png";
import swap3 from "../../assets/swap3.png";
import swap4 from "../../assets/swap4.png";
import swap5 from "../../assets/swap5.png";
import swap6 from "../../assets/swap6.png";
import swap7 from "../../assets/swap7.png";
import swap8 from "../../assets/swap8.png";
import swap9 from "../../assets/swap9.png";
import swap10 from "../../assets/swap10.png";
import swap11 from "../../assets/swap11.png";
import swap12 from "../../assets/swap12.png";
import swap13 from "../../assets/swap13.png";
import swap14 from "../../assets/swap14.png";
import swap15 from "../../assets/swap15.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { title: "Swap/Exchange", img: swap1, text: "We will support you in any related issues with swapping and/or exchange of coins." },
    { title: "Connect to Dapps", img: swap2, text: "Connect decentralised web applications to mobile wallets." },
    { title: "NFTs", img: swap3, text: "Issues related to minting, transferring or receiving NFTs." },
    { title: "Claim Reward", img: swap4, text: "Issues claiming rewards?" },
    { title: "Claim Airdrop", img: swap5, text: "Issues claiming airdrops?" },
    { title: "Wallet glitch/error", img: swap6, text: "Experiencing wallet glitches?" },
    { title: "Login Issues", img: swap7, text: "Problems logging into your wallet?" },
    { title: "Missing Funds", img: swap8, text: "Lost access to funds or missing balance." },
    { title: "High Fees", img: swap9, text: "Concerned about high transaction fees?" },
    { title: "Bridge Transfer", img: swap10, text: "Issues transferring tokens between chains." },
    { title: "Transaction Delay", img: swap11, text: "Experiencing delayed transactions?" },
    { title: "Trading Issues", img: swap12, text: "Problems with trading account?" },
    { title: "Locked Account", img: swap13, text: "Account locked due to suspicious activity." },
    { title: "Migrate", img: swap14, text: "Seamless wallet migration help." },
    { title: "Unable to Purchase", img: swap15, text: "Issues buying crypto or adding coins." },
  ];

  return (
    <div className="w-full text-white bg-black font-sans">

      {/* NAVBAR */}
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <img src={logo} className="h-10" />

        <div className="flex items-center gap-3">
          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/wallet" className="hover:text-blue-400">Home</Link>
            <Link to="/wallet" className="hover:text-blue-400">Services</Link>
            <Link to="/wallet" className="hover:text-blue-400">NFTs</Link>
            <Link to="/wallet" className="hover:text-blue-400">Support</Link>
          </div>

          {/* CONNECT BUTTON */}
          <Link to="/wallet">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-900 px-4 py-2 rounded-lg font-bold text-sm">
              Connect Wallet
            </button>
          </Link>

          {/* HAMBURGER */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              <div className="space-y-1">
                <span className="block w-6 h-[2px] bg-white"></span>
                <span className="block w-6 h-[2px] bg-white"></span>
                <span className="block w-6 h-[2px] bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0f0f1a] px-6 pb-6 space-y-4">
          <Link to="/wallet" className="block">Home</Link>
          <Link to="/wallet" className="block">Services</Link>
          <Link to="/wallet" className="block">NFTs</Link>
          <Link to="/wallet" className="block">Support</Link>
        </div>
      )}

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-4 mt-10 grid md:grid-cols-2 gap-10 items-center text-center md:text-left">
  <div className="flex flex-col items-center md:items-start">
    <div className="inline-flex mb-4">
      <span className="bg-[#706fd2] px-6 py-2 rounded-l-full"></span>
      <span className="bg-[#ada4d4] text-[#8d0707] font-bold text-xs px-4 py-2 rounded-r-full">
        PEOPLE-POWERED NETWORKS.
      </span>
    </div>

    <h1 className="text-4xl md:text-5xl text-[#706fd2]">See The Future.</h1>
    <h2 className="text-3xl mt-2">Transact With Confidence.</h2>

    <p className="text-gray-400 mt-4 text-sm max-w-md">
      A modern app that allows you to import and manage all your crypto wallets in one place.
    </p>

    <div className="flex  sm:flex-row gap-4 mt-6">
      <Link to="/wallet" className="bg-gradient-to-r from-blue-600 to-indigo-900 px-6 py-3 rounded-lg font-bold">
        WALLETS
      </Link>
      <Link to="/wallet" className="bg-gradient-to-r from-pink-700 to-red-500 px-6 py-3 rounded-lg font-bold">
        NFTS
      </Link>
    </div>
  </div>

  <div className="flex justify-center md:justify-end mt-6 md:mt-0">
    <img src={bg1} className="w-full max-w-md" />
  </div>
</div>

<div className="flex justify-center items-center gap-6 mt-6 text-sm">

  {/* USERS */}
  <div className="flex items-center gap-2">
    <img src={profile_icon} className="h-6" alt="users" />
    <span className="text-white">
      <span className="text-[#4c58b5] font-semibold">50,00</span>+ Users
    </span>
  </div>

  {/* WALLETS */}
  <div className="flex items-center gap-2">
    <img src={profile_icon1} className="h-6" alt="wallets" />
    <span className="text-white">
      <span className="text-[#4c58b5] font-semibold">50,00</span>+ Wallets
    </span>
  </div>

</div>

      {/* WALLET IMPORT */}
      <div className="max-w-3xl mx-auto border border-gray-600 rounded-lg p-6 mt-10 text-center text-gray-400 text-sm">
        Easily import your existing wallets with 12/18/24-word recovery phrase

        <h4 className="mt-4 text-white">Made possible with your favorite cryptocurrencies</h4>

        <div className="flex justify-center gap-6 mt-4">
          <img src={btc} className="h-6" />
          <img src={eth} className="h-6" />
          <img src={tet} className="h-6" />
        </div>
      </div>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {links.map((item, i) => (
          <Link to="/wallet" key={i}>
            <div className="border border-white  m-5 rounded-lg p-6 text-center hover:scale-105 transition h-full">
              <img src={item.img} className="h-12 mx-auto" />
              <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
              <p className="text-[#ada4d4] text-sm mt-2">{item.text}</p>
              <span className="inline-block bg-white text-black px-6 py-2 rounded mt-4 font-bold">
                Click here!
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* BLOCKCHAIN + WEB3 */}
      <div className="max-w-7xl m-8 mx-auto px-4 mt-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold">
            The most efficient solution provider in the blockchain.
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            Most trusted platform for transaction issues, staking, balance irregularities, and more.
          </p>
          <img src={block} className="mt-4 h-40" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            The most complex part of web3, made simple.
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            Manage all your crypto wallets in one unified platform.
          </p>
          <img src={block2} className="mt-4 h-40" />
        </div>
      </div>

      {/* SUBSCRIBE */}
      <div className="max-w-xl mx-auto text-center px-4 mt-16">
        <h2 className="text-xl font-bold">Subscribe</h2>
        <p className="text-gray-400 text-sm mt-2">
          Get exclusive news & offers
        </p>

        <input
          type="email"
          placeholder="Email address"
          className="w-full mt-4 p-3 rounded-lg text-black"
        />

        <button className="w-full mt-4 bg-blue-800 py-3 rounded-lg font-bold">
          SUBSCRIBE
        </button>
      </div>

      {/* FOOTER */}
      <div className="text-center mt-16 pb-10 border-t border-gray-800 pt-6">
        <img src={logo} className="h-10 mx-auto" />

        <div className="flex justify-center gap-4 mt-4 text-xl">
          <FaDiscord className="hover:text-indigo-400 cursor-pointer transition hover:scale-125" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer transition hover:scale-125" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer transition hover:scale-125" />
          <FaYoutube className="hover:text-red-500 cursor-pointer transition hover:scale-125" />
        </div>

        <p className="text-gray-400 text-xs mt-6">
          Copyright 2026. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default NavBar;