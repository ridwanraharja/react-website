import terminal from "../assets/terminal.png";

function Developer() {
  return (
    <div className="w-full text-white bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-6 md:flex">
        <div>
          <h1>Superpowers for DEFI developers.</h1>
          <p>
            Checkout the <span className="text-[#00d8ff]">documentation</span>,
            the <span className="text-[#00d8ff]">quick start</span> or a guide
            below to integrate your project with thousands of tokens and
            billions of liquidity.
          </p>
        </div>
        <div className="flex justify-center w-full py-6">
          <img
            className="max-w-[250px] shadow-lg shadow-cyan-500/50"
            src={terminal}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default Developer;
