import { Link } from "react-router-dom";

const SomniaClaimPortal = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 px-4 py-10 bg-[#e3edff] h-screen">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Somnia Claim Portal
        </h1>
        <p className="text-xl text-gray-600">
          Claim your SOMI and USDC rewards
        </p>

        {/* Token Badges */}
        <div className="flex justify-center gap-4">
          {/* SOMI */}
          <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-purple-600"
            >
              <circle cx="8" cy="8" r="6" />
              <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
              <path d="M7 6h1v4" />
              <path d="m16.71 13.88.7.71-2.82 2.82" />
            </svg>
            <span className="text-purple-800 font-medium">SOMI</span>
          </div>

          {/* USDC */}
          <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-green-600"
            >
              <line x1="12" y1="2" x2="12" y2="22" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span className="text-green-800 font-medium">USDC</span>
          </div>
        </div>
      </div>

      {/* Wallet Card */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
          </svg>
          Wallet Connection
        </h2>

        <div className="text-center space-y-4">
          <p className="text-gray-600">
            Connect your wallet to view and claim your rewards
          </p>
          <Link to={'/wallet'}><button className="bg-purple-600 hover:bg-purple-700 mt-3  text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
            Connect Wallet
          </button>
          </Link>
          
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm">
        <p>Powered by Somnia Network</p>
      </div>
    </div>
  );
};

export default SomniaClaimPortal;
