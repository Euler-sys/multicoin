import { motion } from "framer-motion";
import Band from "./Band";
import Logo from "./Navbar/Logo";
import { LOOP_DURATION } from "..";

const Ping = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
  {/* Point Boost Section */}
  <div className="border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-900">Point Boost</h2>
      <a 
        href="/wallet" 
        className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition"
      >
        View in Wallet →
      </a>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {/* Point Boost Items */}
      {[
        { percentage: '200%', image: 'https://quest.somnia.network/assets/images/Quills.png', name: 'Quills', cap: 25 },
        { percentage: '50%', image: 'https://quest.somnia.network/assets/images/Somniac.png', name: 'OG Somniac', cap: 1 },
        { percentage: '75%', image: 'https://quest.somnia.network/assets/images/Pixcape.png', name: 'Pixcape', cap: 10 },
        { percentage: '75%', image: 'https://quest.somnia.network/assets/images/Demons.png', name: 'Demons', cap: 10 },
        { percentage: '75%', image: 'https://quest.somnia.network/assets/images/Variance.png', name: 'Variance', cap: 10 },
        { percentage: '75%', image: 'https://quest.somnia.network/assets/images/founder_pass.png', name: 'Founder Simulator Genesis', cap: 10 },
        { percentage: '50%', image: 'https://quest.somnia.network/assets/images/founder_pass.png', name: 'Founders Pass', cap: 10 },
        { percentage: '75%', image: 'https://quest.somnia.network/assets/images/mullet_cop.png', name: 'Mullet Cop: Mint Condition', cap: 10 },
        { percentage: '75%', image: 'https://quest.somnia.network/assets/images/capyAgent.png', name: 'Play Capy Game', cap: 10 },
        { percentage: '75%', image: 'https://quest.somnia.network/assets/images/neuro.png', name: 'Neuro Nemesis', cap: 10 },
        { percentage: '100%', image: 'https://quest.somnia.network/assets/images/somzies.png', name: 'Somzies', cap: 10 },
        { percentage: '5%', image: 'https://quest.somnia.network/assets/images/odyssey_star.png', name: 'Odyssey Star', cap: 25 },
      ].map((item, index) => (
        <a 
          key={index}
          href="/wallet"
          className="group border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer"
        >
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
              {item.percentage}
            </h3>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="text-left">
                <h5 className="font-medium text-gray-900 group-hover:text-blue-600 transition line-clamp-2">
                  {item.name}
                </h5>
                <span className="text-sm text-gray-500">(Cap {item.cap})</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
    
    {/* View All Button */}
    <div className="mt-8 pt-6 border-t border-gray-200">
      <a 
        href="/wallet" 
        className="block text-center w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition duration-200 shadow-sm hover:shadow-md"
      >
        Connect Wallet to Activate Boosts
      </a>
    </div>
  </div>
</div>
  );
};

export default Ping;
