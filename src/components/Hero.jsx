import heroV from "../assets/heroV.mp4";

function Hero() {
  return (
    <div className="w-full h-screen">
      <video
        className="object-cover w-full h-full absolute -z-10"
        src={heroV}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-center text-white">
        <h1>Decentralized</h1>
        <h1 className="py-2">
          <span className="text-[#00d8ff]">Trading</span> Protocol
        </h1>
        <p className="text-xl py-4">
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div>
          <button className="m-2">Use Defi</button>
          <button className="m-2">FAQ</button>
        </div>
      </div>
      <div>
        <p className="text-center text-white text-2xl font-bold">
          Total Volume Secured: $42,104,783,662.47
        </p>
      </div>
    </div>
  );
}

export default Hero;
