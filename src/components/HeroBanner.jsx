export default function HeroBanner({
  header,
  subHeader,
  btnOneText,
  btnTwoText,
  bgImgUrl,
}) {
  return (
    <div
      style={{
        backgroundImage: `url('${bgImgUrl}')`,
      }}
      className="mb-3 bg-bottom bg-no-repeat bg-cover"
    >
      <div className="flex flex-col items-center flex-border pt-[28px] pb-[320px]">
        <h2 className="font-semibold text-[32px] text-[#1d1d1f]">{header}</h2>
        <p className="leading-tight text-center text-balance text-[19px] text-[#1d1d1f]">
          {subHeader}
        </p>
        <div className="flex gap-3 mt-4">
          <a
            className="inline-block text-white bg-blue-600 rounded-full py-[7px] text-[14px] px-[15px]"
            href=""
          >
            {btnOneText}
          </a>
          <a
            className="inline-block text-blue-600 bg-white rounded-full border borer-blue-600 py-[7px] text-[14px] px-[15px]"
            href=""
          >
            {btnTwoText}
          </a>
        </div>
      </div>
    </div>
  );
}
