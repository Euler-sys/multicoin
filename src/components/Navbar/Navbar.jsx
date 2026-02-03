import { useNavigate } from "react-router-dom";
import logo from '../../assets/somnia-logo.png'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo (visible on all screens) */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Somnia"
            className="h-8"
          />
        </div>

        {/* Desktop Center Menu */}
        <div className="hidden md:flex items-center gap-3">
          {["Learn", "Ecosystem", "Docs"].map((item) => (
            <button
              key={item}
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-900 text-sm font-medium hover:bg-gray-200 transition"
            >
              {item}
            </button>
          ))}

          <button
            onClick={() => navigate("/claim")}
            className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:opacity-90 transition"
          >
            Claim
          </button>
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-2">
          {/* X */}
          <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
            <svg viewBox="64 64 896 896" className="w-4 h-4">
              <path d="M921 912L601.11 445.75L890.08 112H793.7L558.74 384L372.15 112H119.37L418.02 547.31L103 912H199.39L460.6 609.38L668.2 912z" />
            </svg>
          </button>

          {/* Discord */}
          <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
            <svg viewBox="64 64 896 896" className="w-4 h-4">
              <path d="M512 737c-86.9 0-151-18.5-193-37l-42 48s26.7 23.4 76 45c45.6 19.5 104.4 37 159 37s113.4-17.5 159-37c49.3-21.6 76-45 76-45l-42-48c-42 18.5-106.1 37-193 37z" />
            </svg>
          </button>

          {/* Network */}
          <button onClick={() => navigate("/wallet")} className="px-3 py-2 rounded-lg bg-black  text-white text-sm font-medium">
            Mainnet
          </button>

          {/* Connect Wallet */}
          <button
            onClick={() => navigate("/wallet")}
            className="p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
          >
           
              Connect Wallet
            
          </button>
        </div>

        {/* Mobile Only: Claim + Connect */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => navigate("/claim")}
            className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium"
          >
            Claim
          </button>

          <button
            onClick={() => navigate("/wallet")}
            className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium"
          >
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
