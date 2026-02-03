import React from 'react';

const Footer = () => {
  // Leaderboard data
  const leaderboardData = [
    { position: 15, username: 'olalayaya', wallet: '0xe5...8024', points: '1,067,572' },
    { position: 16, username: 'Artem1', wallet: '0xf8...1319', points: '1,033,035' },
    { position: 17, username: 'Blokoli.somi', wallet: '0xfe...4bc2', points: '1,017,875' },
    { position: 18, username: 'Channe.Somi', wallet: '0xab...fcee', points: '990,345' },
    { position: 19, username: 'Hollyman', wallet: '0xfe...ae65', points: '971,356' },
  ];

  // Point boost data
  const boostData = [
    { percentage: '200%', image: '/assets/images/Quills.png', name: 'Quills', cap: 25 },
    { percentage: '50%', image: '/assets/images/Somniac.png', name: 'OG Somniac', cap: 1 },
    { percentage: '75%', image: '/assets/images/Pixcape.png', name: 'Pixcape', cap: 10 },
    { percentage: '75%', image: '/assets/images/Demons.png', name: 'Demons', cap: 10 },
    { percentage: '75%', image: '/assets/images/Variance.png', name: 'Variance', cap: 10 },
    { percentage: '75%', image: '/assets/images/founder_pass.png', name: 'Founder Simulator Genesis', cap: 10 },
    { percentage: '50%', image: '/assets/images/founder_pass.png', name: 'Founders Pass', cap: 10 },
    { percentage: '75%', image: '/assets/images/mullet_cop.png', name: 'Mullet Cop: Mint Condition', cap: 10 },
    { percentage: '75%', image: '/assets/images/capyAgent.png', name: 'Play Capy Game', cap: 10 },
    { percentage: '75%', image: '/assets/images/neuro.png', name: 'Neuro Nemesis', cap: 10 },
    { percentage: '100%', image: '/assets/images/somzies.png', name: 'Somzies', cap: 10 },
    { percentage: '5%', image: '/assets/images/odyssey_star.png', name: 'Odyssey Star', cap: 25 },
  ];

  // Footer navigation data
  const footerLinks = {
    app: ['Liquidity Points', 'Yapstorm', 'Testnet'],
    company: ['Careers', 'Brand Assets', '3D Website'],
    learn: ['Docs', 'Grants', 'Blog', 'Litepaper'],
    help: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
  };

  const navigateToWallet = (e) => {
    e.preventDefault();
    // If using React Router:
    // navigate('/wallet');
    // For regular href:
    window.location.href = '/wallet';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        
        {/* Recent Activity & Leaderboard Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Activity */}
          <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            <p className="text-gray-600 mb-6">Log In to see recent activity</p>
            <button 
              onClick={navigateToWallet}
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition duration-200 shadow-sm hover:shadow-md"
            >
              Connect Wallet
            </button>
          </div>

          {/* Leaderboard */}
          <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Leaderboard</h2>
              <button 
                onClick={navigateToWallet}
                className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition"
              >
                View all →
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Position</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Username</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Wallet</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((user) => (
                    <tr 
                      key={user.position}
                      className="border-b border-gray-200 hover:bg-gray-50 transition cursor-pointer"
                      onClick={navigateToWallet}
                    >
                      <td className="py-4 px-4 text-gray-900 font-medium">{user.position}</td>
                      <td className="py-4 px-4 text-gray-900">
                        <button onClick={navigateToWallet} className="hover:text-gray-700 hover:underline">
                          {user.username}
                        </button>
                      </td>
                      <td className="py-4 px-4">
                        <button 
                          onClick={navigateToWallet}
                          className="text-blue-600 hover:text-blue-800 font-mono hover:underline"
                        >
                          {user.wallet}
                        </button>
                      </td>
                      <td className="py-4 px-4 text-gray-900 font-medium">{user.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-500 text-sm mt-6 italic">
              Leaderboard positions are updated on a daily basis.
            </p>
          </div>
        </div>

        {/* Point Boost Section */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Point Boost</h2>
            <button 
              onClick={navigateToWallet}
              className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition"
            >
              View in Wallet →
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {boostData.map((item, index) => (
              <button
                key={index}
                onClick={navigateToWallet}
                className="group border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer text-left"
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                    {item.percentage}
                  </h3>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                      <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-gray-500 text-xs">{item.name.charAt(0)}</span>
                      </div>
                    </div>
                    <div className="text-left">
                      <h5 className="font-medium text-gray-900 group-hover:text-blue-600 transition line-clamp-2">
                        {item.name}
                      </h5>
                      <span className="text-sm text-gray-500">(Cap {item.cap})</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button 
              onClick={navigateToWallet}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition duration-200 shadow-sm hover:shadow-md"
            >
              Connect Wallet to Activate Boosts
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            {/* Left Content - Logo & Social */}
            <div className="mb-8 lg:mb-0 lg:w-1/3">
              <button onClick={navigateToWallet} className="inline-block mb-4">
                <div className="h-10 w-32 bg-gray-100 rounded flex items-center justify-center">
                  
                </div>
              </button>
              
              <div className="flex space-x-4">
                <button 
                  onClick={navigateToWallet}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  aria-label="X (Twitter)"
                >
                  <svg fill="currentColor" viewBox="64 64 896 896" width="24" height="24">
                    <path d="M921 912L601.11 445.75l.55.43L890.08 112H793.7L558.74 384 372.15 112H119.37l298.65 435.31-.04-.04L103 912h96.39L460.6 609.38 668.2 912zM333.96 184.73l448.83 654.54H706.4L257.2 184.73z"></path>
                  </svg>
                </button>
                
                <button 
                  onClick={navigateToWallet}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  aria-label="Discord"
                >
                  <svg fill="currentColor" viewBox="64 64 896 896" width="24" height="24">
                    <path d="M405 158l-25 3s-112.13 12.26-194.02 78.02h-.96l-1.02.96c-18.37 16.9-26.37 37.67-39 68.04a982.08 982.08 0 00-38 112C83.27 505.87 64 609.87 64 705v8l4 8c29.63 52 82.24 85.12 131 108 48.74 22.88 90.89 35 120 36l19.02.99 9.98-17 35-62c37.13 8.38 79.88 14 129 14 49.12 0 91.87-5.62 129-14l35 62 10.02 17 18.97-1c29.12-.98 71.27-13.11 120-36 48.77-22.87 101.38-56 131.01-108l4-8v-8c0-95.13-19.26-199.13-43-284.98a982.08 982.08 0 00-38-112c-12.63-30.4-20.63-51.14-39-68l-1-1.03h-1.02C756.16 173.26 644 161.01 644 161.01L619 158l-9.02 23s-9.24 23.37-14.97 50.02a643.04 643.04 0 00-83.01-6.01c-17.12 0-46.72 1.12-83 6.01a359.85 359.85 0 00-15.02-50.01zm-44 73.02c1.37 4.48 2.74 8.36 4 12-41.38 10.24-85.51 25.86-126 50.98l34 54.02C356 296.5 475.22 289 512 289c36.74 0 156 7.49 239 59L785 294c-40.49-25.12-84.62-40.74-126-51 1.26-3.62 2.63-7.5 4-12 29.86 6 86.89 19.77 134 57.02-.26.12 12 18.62 23 44.99 11.26 27.13 23.74 63.26 35 104 21.64 78.11 38.63 173.25 40 256.99-20.15 30.75-57.5 58.5-97.02 77.02A311.8 311.8 0 01720 795.98l-16-26.97c9.5-3.52 18.88-7.36 27-11.01 49.26-21.63 76-45 76-45l-42-48s-18 16.52-60 35.02C663.03 718.52 598.87 737 512 737s-151-18.5-193-37c-42-18.49-60-35-60-35l-42 48s26.74 23.36 76 44.99a424.47 424.47 0 0027 11l-16 27.02a311.8 311.8 0 01-78.02-25.03c-39.48-18.5-76.86-46.24-96.96-76.99 1.35-83.74 18.34-178.88 40-257A917.22 917.22 0 01204 333c11-26.36 23.26-44.86 23-44.98 47.11-37.25 104.14-51.01 134-57m39 217.99c-24.74 0-46.62 14.11-60 32-13.38 17.89-20 39.87-20 64s6.62 46.11 20 64c13.38 17.89 35.26 32 60 32 24.74 0 46.62-14.11 60-32 13.38-17.89 20-39.87 20-64s-6.62-46.11-20-64c-13.38-17.89-35.26-32-60-32m224 0c-24.74 0-46.62 14.11-60 32-13.38 17.89-20 39.87-20 64s6.62 46.11 20 64c13.38 17.89 35.26 32 60 32 24.74 0 46.62-14.11 60-32 13.38-17.89 20-39.87 20-64s-6.62-46.11-20-64c-13.38-17.89-35.26-32-60-32m-224 64c1.76 0 4 .64 8 6.01 4 5.35 8 14.72 8 25.99 0 11.26-4 20.64-8 26.01-4 5.35-6.24 5.99-8 5.99-1.76 0-4-.64-8-6.02a44.83 44.83 0 01-8-25.98c0-11.27 4-20.64 8-26.02 4-5.34 6.24-5.98 8-5.98m224 0c1.76 0 4 .64 8 6.01 4 5.35 8 14.72 8 25.99 0 11.26-4 20.64-8 26.01-4 5.35-6.24 5.99-8 5.99-1.76 0-4-.64-8-6.02a44.83 44.83 0 01-8-25.98c0-11.27 4-20.64 8-26.02 4-5.34 6.24-5.98 8-5.98"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Content - Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:w-2/3">
              {Object.entries(footerLinks).map(([category, items]) => (
                <div key={category}>
                  <h5 className="font-semibold text-gray-900 mb-4 capitalize">
                    {category === 'help' ? 'Need Help' : category}
                  </h5>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item}>
                        <button 
                          onClick={navigateToWallet}
                          className="text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-200 text-left"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright Section */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h5 className="text-gray-600 mb-4 md:mb-0">© 2024 - Somnia Network</h5>
              <button 
                onClick={navigateToWallet}
                className="text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-200 text-sm"
              >
                All rights reserved
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;