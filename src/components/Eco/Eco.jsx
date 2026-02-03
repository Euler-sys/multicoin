

const Eco = () => {
  return (
    <>
   <div className="max-w-6xl mx-auto p-6 bg-white">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    {/* Left Column: Recent Activity */}
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Activity</h2>
      <p className="text-gray-600 mb-6">Log In to see recent activity</p>
      <a 
        href="/wallet" 
        className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition duration-200 shadow-sm hover:shadow-md"
      >
        Connect Wallet
      </a>
    </div>

    {/* Right Column: Leaderboard */}
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Leaderboard</h2>
        <a 
          href="/wallet" 
          className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition"
        >
          View all →
        </a>
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
            {/* Make each row clickable to wallet page */}
            {[
              { position: 15, username: 'olalayaya', wallet: '0xe5...8024', points: '1,067,572' },
              { position: 16, username: 'Artem1', wallet: '0xf8...1319', points: '1,033,035' },
              { position: 17, username: 'Blokoli.somi', wallet: '0xfe...4bc2', points: '1,017,875' },
              { position: 18, username: 'Channe.Somi', wallet: '0xab...fcee', points: '990,345' },
              { position: 19, username: 'Hollyman', wallet: '0xfe...ae65', points: '971,356' },
            ].map((user) => (
              <tr 
                key={user.position}
                className="border-b border-gray-200 hover:bg-gray-50 transition cursor-pointer"
                onClick={() => window.location.href = '/wallet'}
              >
                <td className="py-4 px-4 text-gray-900 font-medium">{user.position}</td>
                <td className="py-4 px-4 text-gray-900">
                  <a href="/wallet" className="hover:text-gray-700 hover:underline">
                    {user.username}
                  </a>
                </td>
                <td className="py-4 px-4">
                  <a 
                    href="/wallet" 
                    className="text-blue-600 hover:text-blue-800 font-mono hover:underline"
                  >
                    {user.wallet}
                  </a>
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
      
      {/* View Wallet Button for mobile */}
      <div className="mt-6 lg:hidden">
        <a 
          href="/wallet" 
          className="block text-center w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition duration-200 shadow-sm hover:shadow-md"
        >
          Go to Wallet
        </a>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Eco;
