import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import MediaGalary from "./components/MediaGalary";

function App() {
  const bannerData = [
    {
      header: "iPhone",
      subHeader: "Say Hello to the latest generation of iPhone.",
      btnOneText: "Learn more",
      btnTwoText: "Shop iPhone",
      bgImgUrl:
        "/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_small.jpg",
      bgImgUrlSm:
        "/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_medium.jpg",
      bgImgUrlLg:
        "/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_large.jpg",
    },
    {
      header: "Apple Watch Series 11",
      subHeader:
        "Turn resolutions into routines. Quit qutting your fitness goals.",
      btnOneText: "Learn more",
      btnTwoText: "Buy",
      bgImgUrl:
        "/images/heroes/apple-watch-ny/hero_apple_watch_ny__c8f1tzaoa72a_small.jpg",
      bgImgUrlSm:
        "/images/heroes/apple-watch-ny/hero_apple_watch_ny__c8f1tzaoa72a_medium.jpg",
      bgImgUrlLg:
        "/images/heroes/apple-watch-ny/hero_apple_watch_ny__c8f1tzaoa72a_large.jpg",
    },
    {
      header: "iPad air",
      subHeader: "Now supercharged by the M3 chip.",
      btnOneText: "Learn more",
      btnTwoText: "Buy",
      bgImgUrl:
        "/images/promos/ipad-air/promo_ipad_air__bfbxzvw65c02_small.jpg",
      bgImgUrlSm:
        "/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_medium.jpg",
      bgImgUrlLg:
        "/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_large.jpg",
    },
  ];

  const gridBanner = [
    {
      header: "WATCH SERIES 11",
      subHeader: "The ultimate way to watch your health.",
      btnOneText: "Learn more",
      btnTwoText: "Buy",
      bgImgUrl:
        "/images/promos/apple-watch-series-11/promo_apple_watch_series_11__b63hxviqvonm_small.jpg",
      bgImgUrlSm:
        "/images/promos/apple-watch-series-11/promo_apple_watch_series_11__b63hxviqvonm_medium.jpg",
      bgImgUrlLg:
        "/images/promos/apple-watch-series-11/promo_apple_watch_series_11__b63hxviqvonm_large.jpg",
    },
    {
      header: "Apple Watch",
      subHeader:
        "The new Black Unity band. Inspired by the power of connection.",
      btnOneText: "Shop",
      bgImgUrl:
        "/images/promos/apple-watch-unity/promo_apple_watch_unity__casvx9ysh1le_small.jpg",
      bgImgUrlSm:
        "/images/promos/apple-watch-unity/promo_apple_watch_unity__casvx9ysh1le_medium.jpg",
      bgImgUrlLg:
        "/images/promos/apple-watch-unity/promo_apple_watch_unity__casvx9ysh1le_large.jpg",
      textColor: "white",
      btnOneBg: "white",
      btnOneTextColor: "black",
    },
    {
      header: "iPad air",
      subHeader: "Now supercharged by the M3 chip.",
      btnOneText: "Learn more",
      btnTwoText: "Buy",
      bgImgUrl:
        "/images/promos/ipad-air/promo_ipad_air__bfbxzvw65c02_small.jpg",
      bgImgUrlSm:
        "/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_medium.jpg",
      bgImgUrlLg:
        "/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_large.jpg",
    },
    {
      header: "iPad Pro",
      subHeader: "Advanced AI performance and game-changnig capabilities.",
      btnOneText: "Learn more",
      btnTwoText: "Buy",
      bgImgUrl:
        "/images/promos/ipad-pro/promo_ipad_pro__c529dk533k4m_small.jpg",
      bgImgUrlSm:
        "/images/promos/ipad-pro/promo_ipad_pro__c529dk533k4m_medium.jpg",
      bgImgUrlLg:
        "/images/promos/ipad-pro/promo_ipad_pro__c529dk533k4m_large.jpg",
      textColor: "white",
    },
    {
      header: "TradeIn",
      subHeader:
        "Get up to $180-$650 in credit when you trade in iPhone 13 or higher.",
      btnOneText: "Get your estimate",
      bgImgUrl:
        "/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_small.jpg",
      bgImgUrlSm:
        "/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium.jpg",
      bgImgUrlLg:
        "/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg",
    },
    {
      header: "Apple Card",
      subHeader: "Get up to 3% Daily Cash back with every purchase.",
      btnOneText: "Learn more",
      btnTwoText: "Apply now",
      bgImgUrl:
        "/images/promos/apple-card/promo_apple_card__5cm7draujpey_small.jpg",
      bgImgUrlSm:
        "/images/promos/apple-card/promo_apple_card__5cm7draujpey_medium.jpg",
      bgImgUrlLg:
        "/images/promos/apple-card/promo_apple_card__5cm7draujpey_large.jpg",
    },
  ];

  return (
    <>
      <Header />
      {bannerData.map((data, i) => (
        <HeroBanner
          key={i}
          header={data.header}
          subHeader={data.subHeader}
          btnOneText={data.btnOneText}
          btnTwoText={data.btnTwoText}
          bgImgUrl={data.bgImgUrl}
          bgImgUrlSm={data.bgImgUrlSm}
          bgImgUrlLg={data.bgImgUrlLg}
          textColor={data.textColor}
        />
      ))}
      <div className="grid gap-x-3 sm:grid-cols-2">
        {gridBanner.map((data, i) => (
          <HeroBanner
            key={i}
            header={data.header}
            subHeader={data.subHeader}
            btnOneText={data.btnOneText}
            btnTwoText={data.btnTwoText}
            bgImgUrl={data.bgImgUrl}
            bgImgUrlSm={data.bgImgUrlSm}
            bgImgUrlLg={data.bgImgUrlLg}
            textColor={data.textColor}
            btnOneBg={data.btnOneBg}
            btnOneTextColor={data.btnOneTextColor}
            btnOneBorder={data.btnOneBorder}
            btnTwoBg={data.btnTwoBg}
            btnTwoTextColor={data.btnTwoTextColor}
            btnTwoBorder={data.btnTwoBorder}
          />
        ))}
      </div>
      <MediaGalary />
      <Footer />
    </>
  );
}

export default App;
