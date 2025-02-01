const CustomerLove = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 font-sans min-h-screen my-20">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:gap-10">
        <h1
          className="text-4xl sm:text-5xl font-bold max-w-[80%] lg:max-w-[500px] text-center max-lg:mx-auto"
          style={{ letterSpacing: "2px" }}
        >
          Bringing happiness and colors to every corner to the world since 2008
        </h1>
        <div className="flex justify-center items-center">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="M150,150 m-80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            />

            <linearGradient id="handGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#ffcc80", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#d38d5f", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          <text
            fontSize="18"
            fill="black"
            letterSpacing="0"
            style={{
              wordSpacing: "5px",
              fontWeight: "400",
            }}
          >
            <textPath href="#circlePath">
              - HAPPY SOCKS SINCE 2008 - HAPPY SOCKS SINCE 2008
            </textPath>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 150 150"
              to="360 150 150"
              dur="6s"
              repeatCount="indefinite"
            />
          </text>

          <text
            x="50%"
            y="50%"
            fontSize="80"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="url(#handGradient)"
            style={{ filter: "drop-shadow(3px 3px 5px rgba(0,0,0,0.4))" }}
          >
            🖐️
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              values="-10 150 150; 10 150 150; -10 150 150"
              keyTimes="0; 0.5; 1"
              dur="0.8s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
            />
          </text>
        </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-y-12 gap-2 items-center justify-center">
        <div className="lg:order-0 order-1 border-2 rounded-sm overflow-hidden border-black">
          <img src="./images/happiness.png" alt="customer happiness image" className="h-full w-full object-cover"/>
        </div>
        <div className="text-center w-full sm:w-[80%] mx-auto space-y-10 ">
          <h2 className="text-4xl font-semibold lg:max-w-[140px] mx-auto">
            HELLO, HAPPY SOCKS
          </h2>
          <p className="text-lg font-medium text-slate-600 sm:max-w-[78%] mx-auto">
            Today, Happy socks has reach 90 countries and every continent. With
            Concept Stores all around the world, from LA to Tokyo, Happy Socks
            can be found in over 10,000 top fashion apparel boutiques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerLove;
