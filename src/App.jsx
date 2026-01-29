import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";

function App() {
  return (
    <>
      <Header />
      <HeroBanner
        header={"iPhone"}
        subHeader={"Say Hello to the latest generation of iPhone."}
        btnOneText={"Learn more"}
        btnTwoText={"Shop iPhone"}
        bgImgUrl={
          "../public/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_small.jpg"
        }
      />
      <HeroBanner
        header={"Apple Watch Series 11"}
        subHeader={
          "Turn resolutions into routines. Quit qutting your fitness goals."
        }
        btnOneText={"Learn more"}
        btnTwoText={"Buy"}
        bgImgUrl={
          "../public/images/heroes/apple-watch-ny/hero_apple_watch_ny__c8f1tzaoa72a_small.jpg"
        }
      />
    </>
  );
}

export default App;
