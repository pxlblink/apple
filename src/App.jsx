import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div
        // className="bg-[url('./assets/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_medium.jpg')]
        className="bg-[url('./assets/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_small.jpg')]
        bg-cover bg-bottom bg-no-repeat bg-amber-300 border-2 border-amber-600"
      >
        <div className="flex flex-col items-center border-blue-800 flex-border mt-[28px] mb-[320px]">
          <h2 className="font-semibold text-[32px] text-[#1d1d1f]">iPhone</h2>
          <p className="leading-tight text-center text-balance mx-30 text-[19px] text-[#1d1d1f]">
            Say Hello to the latest generation of iPhone.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              className="inline-block text-white bg-blue-600 rounded-full py-[7px] text-[14px] px-[15px]"
              href=""
            >
              Learn more
            </a>
            <a
              // className="inline-block py-2 px-5 text-blue-600 bg-white rounded-full border border-blue-600"
              className="inline-block text-white bg-blue-600 rounded-full py-[7px] text-[14px] px-[15px]"
              href=""
            >
              Shop iPhone
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
