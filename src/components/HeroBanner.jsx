import { useState } from "react";

export default function HeroBanner({
  header,
  subHeader,
  btnOneText,
  btnTwoText,
  bgImgUrl,
  bgImgUrlSm,
  bgImgUrlLg,
  textColor = "#1d1d1f",
  btnOneBg = "#155dfc",
  btnOneTextColor = "#ffffff",
  btnOneBorder = "",
  btnTwoBg = "",
  btnTwoTextColor = "#155dfc",
  btnTwoBorder = "#155dfc",
}) {
  const [btnTwoIsHovered, setBtnTwoIsHovered] = useState(false);

  return (
    <div className="@container mb-3 w-full">
      <div
        style={{
          "--bg-img": `url(${bgImgUrl})`,
          "--bg-img-sm": `url(${bgImgUrlSm})`,
          "--bg-img-lg": `url(${bgImgUrlLg})`,
          "--text-color": `${textColor}`,
          color: textColor,
        }}
        className={`text-[rgb(var(--text-color))] h-full bg-bottom bg-no-repeat bg-cover bg-(image:--bg-img) @sm:bg-(image:--bg-img-sm) @lg:bg-(image:--bg-img-lg)`}
      >
        <div className="text-center flex flex-col items-center pt-8 pb-85 flex-border @sm:pb-95">
          {/* text-[#1d1d1f]  */}
          <h2 className="font-semibold text-[32px] @sm:text-[48px] @lg:text-[56px]">
            {header}
          </h2>
          {/* text-[#1d1d1f]  */}
          <p className="mx-28 leading-tight text-center @md:mx-60 text-pretty text-[19px] @sm:text-[24px] @md:text-pretty @lg:text-[28px]">
            {subHeader}
          </p>
          <div className="flex gap-3 mt-4 text-[14px] @sm:text-[17px]">
            {btnOneText && (
              <a
                style={{
                  backgroundColor: btnOneBg,
                  color: btnOneTextColor,
                  border: btnOneBorder,
                  // btnOneTextColor = "#ffffff",
                  // btnOneBorder,
                }}
                className={`flex items-center rounded-full py-1.75 px-3.75`}
                href=""
              >
                {btnOneText}
              </a>
            )}
            {btnTwoText && (
              <a
                style={{
                  backgroundColor: btnTwoBg,
                  color: `${btnTwoIsHovered ? "#ffffff" : btnTwoTextColor}`,
                  border: `1px solid ${btnTwoBorder}`,
                }}
                onMouseEnter={() => setBtnTwoIsHovered(true)}
                onMouseLeave={() => setBtnTwoIsHovered(false)}
                className="flex items-center bg-transparent rounded-full border hover:text-white hover:bg-blue-600 py-1.75 px-3.75"
                href=""
              >
                {btnTwoText}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
