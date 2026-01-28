import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div
        // className="bg-[url('./assets/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_medium.jpg')]
        className="bg-[url('./assets/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_large.jpg')]
        bg-cover bg-bottom bg-no-repeat bg-amber-300 border-2 border-amber-600"
      >
        <div className="flex flex-col items-center border-blue-800 flex-border mt-[40px] mb-[400px]">
          <h2 className="font-semibold text-[56px]">iPhone</h2>
          <p className="text-[28px]">
            Say Hello to the latest generation of iPhone
          </p>
          <div className="flex gap-2 mt-4">
            <a
              className="inline-block py-2 px-5 text-white bg-blue-600 rounded-full"
              href=""
            >
              Learn more
            </a>
            <a
              className="inline-block py-2 px-5 text-blue-600 bg-white rounded-full border border-blue-600"
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
