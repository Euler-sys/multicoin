import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
   <div className="p-[40px]">
  <div className="rounded-[80px] overflow-hidden">
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://quest.somnia.network/assets/images/Header.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="bg-black/20">
        <div className="max-w-7xl mx-auto px-4 py-28">
          <div className="flex flex-col items-center text-center space-y-6">

            <img
              src="https://quest.somnia.network/assets/images/somnia-logo-white.png"
              alt="Somnia Logo"
              className="h-12"
            />

            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Embark On Your Somnia Journey
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Complete tasks, Earn Rewards, And Climb The Leaderboards
              <br className="hidden md:block" />
              In The Somnia Ecosystem
            </p>

            <button
              onClick={() => navigate("/claim")}
              className="group mt-6 flex items-center gap-2 border border-purple-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-purple-600 transition"
            >
              Start Questing
              <svg
                viewBox="64 64 896 896"
                className="w-5 h-5 transform group-hover:translate-x-1 transition"
                fill="currentColor"
              >
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </section>
  </div>
</div>

    
  );
};

export default HeroSection;
