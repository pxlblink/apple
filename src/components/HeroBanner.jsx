export default function HeroBanner({
  header,
  subHeader,
  btnOneText,
  btnTwoText,
  bgImgUrl,
  bgImgUrlSm,
  bgImgUrlLg,
}) {
  return (
    <div className="@container mb-3 w-full">
      <div
        style={{
          "--bg-img": `url(${bgImgUrl})`,
          "--bg-img-sm": `url(${bgImgUrlSm})`,
          "--bg-img-lg": `url(${bgImgUrlLg})`,
        }}
        className="h-full bg-bottom bg-no-repeat bg-cover bg-(image:--bg-img) @sm:bg-(image:--bg-img-sm) @lg:bg-(image:--bg-img-lg)"
      >
        <div className="text-center flex flex-col items-center pt-8 pb-85 flex-border @sm:pb-95">
          <h2 className="font-semibold text-[32px] text-[#1d1d1f] @sm:text-[48px] @lg:text-[56px]">
            {header}
          </h2>
          <p className="mx-10 leading-tight text-center @md:mx-60 text-balance text-[19px] text-[#1d1d1f] @sm:text-[24px] @md:text-pretty @lg:text-[28px]">
            {subHeader}
          </p>
          <div className="flex gap-3 mt-4 text-[14px] @sm:text-[17px]">
            <a
              className="flex items-center text-white bg-blue-600 rounded-full py-1.75 px-3.75"
              href=""
            >
              {btnOneText}
            </a>
            <a
              className="flex items-center text-blue-600 bg-transparent rounded-full border hover:text-white hover:bg-blue-600 borer-blue-600 py-1.75 px-3.75"
              href=""
            >
              {btnTwoText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
