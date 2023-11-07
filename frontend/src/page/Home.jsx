import Range from "../components/Range/Range";

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[20px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Hero Content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-textColor font-[800] md:text-[60px] md:leading-[70px]">
                  Your best risk investment advisor
                </h1>
                <p className="text__para max-w-[450px]">
                  Even with the inevitable ups and downs of the market, our
                  expert-built, globally-diversified Automated Investing Account
                  makes it easy to start building long-term wealth by managing
                  your risk, maximizing returns, and minimizing taxes.
                </p>
                <span className="">
                  <Range />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
