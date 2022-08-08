import { FaBtc, FaGg, FaBiohazard, FaWpforms } from "react-icons/fa";
import AboutCard from "./AboutCard";

function About() {
  return (
    <div className="w-full bg-black text-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <div>
          <h1>A Growing Protocol Ecosystem</h1>
          <p>
            The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <AboutCard
              icon={<FaBtc size={40} />}
              heading="Reliable, tamper-proof network"
              text="Use decentralization, trusted nodes, premium data, and
        cryptographic proofs to connect highly accurate and available
        data/APIs to any smart contract."
            />
            <AboutCard
              icon={<FaGg size={40} />}
              heading="Seamless connection to any API"
              text="Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain."
            />
            <AboutCard
              icon={<FaBiohazard size={40} />}
              heading="Proven, ready-made solutions"
              text="Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications."
            />
            <AboutCard
              icon={<FaWpforms size={40} />}
              heading="Secure off-chain computation"
              text="Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
