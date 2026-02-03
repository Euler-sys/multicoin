import { Link } from "react-router-dom";


const partners = [
  { name: "Moonbeam", img: "https://stellaswap.com/partners/moonbeam.png" },
  { name: "Moonwell", img: "https://stellaswap.com/partners/moonwell.png" },
  { name: "Algebra", img: "https://stellaswap.com/partners/algebra.png" },
  { name: "Axelar", img: "https://stellaswap.com/partners/axelar.png" },
  { name: "Squid", img: "https://stellaswap.com/partners/squid.png" },
  { name: "Wormhole", img: "https://stellaswap.com/partners/wormhole.png" },
  { name: "QiDao", img: "https://stellaswap.com/partners/qidao.png" },
  { name: "GBM", img: "https://stellaswap.com/partners/gbm.png", scale: 0.5 },
  { name: "Gamma", img: "https://stellaswap.com/partners/gamma.png" },
  { name: "Biconomy", img: "https://stellaswap.com/partners/bico.png" },
  { name: "Bifrost", img: "https://stellaswap.com/partners/bifrost.png" },
  { name: "UnitedBloc", img: "https://stellaswap.com/partners/united_bloc.png", scale: 0.5 },
  { name: "Interlay", img: "https://stellaswap.com/partners/interlay.png" },
  { name: "Dam Finance", img: "https://stellaswap.com/partners/dam_finance.png" },
  { name: "Transak", img: "https://stellaswap.com/partners/transak.png" },
  { name: "Beefy", img: "https://stellaswap.com/partners/beefy.png" },
  { name: "Phala Network", img: "https://stellaswap.com/partners/phala.png" },
  { name: "Centrifuge", img: "https://stellaswap.com/partners/centrifuge.png" },
  { name: "ZooDao", img: "https://stellaswap.com/partners/zoodao.png" },
  { name: "Meson.fi", img: "https://stellaswap.com/partners/meson.png" },
  { name: "Astar", img: "https://stellaswap.com/partners/astar.png" },
  { name: "Subwallet", img: "https://stellaswap.com/partners/subwallet.png" },
  { name: "Novawallet", img: "https://stellaswap.com/partners/nova.png" },
  { name: "Talisman", img: "https://stellaswap.com/partners/talisman.png" },
  { name: "Acala", img: "https://stellaswap.com/partners/acala.png" },
  { name: "Polkadot Insider", img: "https://stellaswap.com/partners/polkadot_insider.png" },
  { name: "Prime Protocol", img: "https://stellaswap.com/partners/prime.png" },
  { name: "RMRK", img: "https://stellaswap.com/partners/rmrk.png" },
  { name: "Subsquid", img: "https://stellaswap.com/partners/subsquid.png" },
  { name: "Origin Trail", img: "https://stellaswap.com/partners/origin_trail.png" },
  { name: "Lido", img: "https://stellaswap.com/partners/lido.png" },
  { name: "Pendulum", img: "https://stellaswap.com/partners/pendulum.png" },
  { name: "Zeitgeist", img: "https://stellaswap.com/partners/zeitgeist.png" },
  { name: "Subsocial", img: "https://stellaswap.com/partners/subsocial.png" },
  { name: "Cede Store", img: "https://stellaswap.com/partners/cede.png" },
  { name: "Manta Network", img: "https://stellaswap.com/partners/manta.png" },
];

const ConnectorApp = () => {
 

  return (
<>
<div className="mt-36">
      <div className="container mx-auto">
        <h1 className="text-center text-white font-semibold tracking-[2px] text-3xl">
          Cool Features
        </h1>

        <section className="grid grid-cols-1 mt-20 md:grid-cols-3 gap-x-2 gap-y-16 md:gap-y-0">
          {/* Feature 1 */}
          <Link to="/wallet" className="order-1 text-center">
            <p className="text-xl font-bold tracking-wider text-white">Cross-Chain Swaps</p>
            <p className="text-[#86878C] text-base lg:text-xl mt-2 tracking-wider">
              Swap across any networks in just 1-click
            </p>
          </Link>

          {/* Image 1 */}
          <Link to="/wallet" className="flex justify-center order-2 md:!order-4 md:mt-16">
            <img
              src="https://stellaswap.com/images/mock_xcswap.png"
              className="w-[80%] md:w-full"
              alt="Cross-Chain Swaps"
            />
          </Link>

          {/* Feature 2 */}
          <Link to="/wallet" className="order-3 mt-8 text-center md:!order-2 sm:mt-0">
            <p className="text-xl font-bold tracking-wider text-white">XC-Transfers</p>
            <p className="text-[#86878C] text-base lg:text-xl mt-2 tracking-wider">
              Unleash the power of Polkadot with secure transfers
            </p>
          </Link>

          {/* Image 2 */}
          <Link to="/wallet" className="flex justify-center order-4 md:!order-5 md:mt-16">
            <img
              src="https://stellaswap.com/images/mock_xctransfer.png"
              className="w-[80%] md:w-full"
              alt="XC-Transfers"
            />
          </Link>

          {/* Feature 3 */}
          <Link to="/wallet" className="order-5 mt-8 text-center md:!order-3 sm:mt-0">
            <p className="text-xl font-bold tracking-wider text-white">xSTELLA</p>
            <p className="text-[#86878C] text-base lg:text-xl mt-2 tracking-wider">
              Stake your STELLA to share in protocol revenue & vote
            </p>
          </Link>

          {/* Image 3 */}
          <Link to="/wallet" className="flex justify-center order-6 md:mt-16">
            <img
              src="https://stellaswap.com/images/mock_xstella.png"
              className="w-[80%] md:w-full"
              alt="xSTELLA"
            />
          </Link>
        </section>
      </div>
    </div>
    
     <div className="my-36 px-4">
      <h1 className="text-center text-white font-semibold tracking-wider text-3xl">
        Partnerships
      </h1>

      <section className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {partners.map((partner, index) => (
          <Link
            to="/wallet"
            key={index}
            className="flex flex-col items-center justify-end py-4 gap-4 text-center"
          >
            <img
              src={partner.img}
              alt={partner.name}
              className={`h-[80px] w-auto object-contain`}
              style={{ transform: `scale(${partner.scale || 1})` }}
            />
            <h4 className="text-white mt-3 text-[18px]">{partner.name}</h4>
          </Link>
        ))}
      </section>

      <div className="mt-12 pl-4 lg:pl-12 xl:pl-20">
        <Link to="/wallet" className="inline-block mb-2">
          <img
            src="https://stellaswap.com/partners/trading-view.png"
            alt="TradingView"
            height={40}
            width={200}
          />
        </Link>
        <p className="text-white max-w-2xl">
          StellaSwap utilizes TradingView technology for advanced charting,
          including into the{" "}
          <Link to="/wallet" className="underline">
            Bitcoin chart
          </Link>{" "}
          and cryptocurrency trends.
        </p>
      </div>
    </div>
    
    </>

  );
};

export default ConnectorApp;
