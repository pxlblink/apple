import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";

function App() {
  const bannerData = [
    {
      header: "iPhone",
      subHeader: "Say Hello to the latest generation of iPhone.",
      btnOneText: "Learn more",
      btnTwoText: "Shop iPhone",
      bgImgUrl:
        "../public/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_small.jpg",
      bgImgUrlSm:
        "../public/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_medium.jpg",
      bgImgUrlLg:
        "../public/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_large.jpg",
    },
    {
      header: "Apple Watch Series 11",
      subHeader:
        "Turn resolutions into routines.\nQuit qutting your fitness goals.",
      btnOneText: "Learn more",
      btnTwoText: "Buy",
      bgImgUrl:
        "../public/images/heroes/apple-watch-ny/hero_apple_watch_ny__c8f1tzaoa72a_small.jpg",
      bgImgUrlSm:
        "../public/images/heroes/apple-watch-ny/hero_apple_watch_ny__c8f1tzaoa72a_medium.jpg",
      bgImgUrlLg:
        "../public/images/heroes/apple-watch-ny/hero_apple_watch_ny__c8f1tzaoa72a_large.jpg",
    },
    {
      header: "iPad air",
      subHeader: "Now supercharged by the M3 chip.",
      btnOneText: "Learn more",
      btnTwoText: "Buy",
      bgImgUrl:
        "../public/images/promos/ipad-air/promo_ipad_air__bfbxzvw65c02_small.jpg",
      bgImgUrlSm:
        "../public/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_medium.jpg",
      bgImgUrlLg:
        "../public/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_large.jpg",
    },
  ];

  return (
    <>
      <Header />
      {bannerData.map((data) => (
        <HeroBanner
          header={data.header}
          subHeader={data.subHeader}
          btnOneText={data.btnOneText}
          btnTwoText={data.btnTwoText}
          bgImgUrl={data.bgImgUrl}
          bgImgUrlSm={data.bgImgUrlSm}
          bgImgUrlLg={data.bgImgUrlLg}
        />
      ))}
    </>
  );
}

export default App;
