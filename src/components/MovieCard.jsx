export default function MovieCard({
  imgPath,
  imgPathMd,
  titlePath,
  genre,
  subTitle,
}) {
  return (
    <div
      style={{
        "--img-path": `url(${imgPath})`,
        "--img-path-md": `url(${imgPathMd})`,
      }}
      className="bg-blue-200 bg-center bg-no-repeat bg-cover shrink-0 snap-center w-[275px] h-[498px] bg-(image:--img-path) md:w-[688px] md:h-[368px] md:bg-(image:--img-path-md) lg:w-[930px] lg:h-[523px]"
    >
      <div className="flex flex-col justify-between items-center w-full h-full text-center via-[rgba(200,200,200,.1)] to-[rgba(40,40,40,.6)] from-[rgba(20,20,20,.6)] bg-linear-to-t">
        <div className="flex flex-col gap-3 items-center pt-4 w-full md:invisible">
          <img
            src="/public/images/logo_hero_light__d7t8cya4x26a_small.png"
            alt=""
          />
          <img src={titlePath} alt="" />
        </div>
        <div className="flex flex-col-reverse items-center py-4 w-full text-white md:flex-row md:gap-4 md:py-8 md:pl-8 bg-blend-multiply">
          <a
            className="inline-block px-4 mt-4 text-sm text-black bg-white rounded-full md:my-0 md:mt-0 shrink-0 py-[9px]"
            href=""
          >
            Stream now
          </a>
          <div className="flex flex-col md:flex-row md:gap-2 item-center">
            <p className="px-1 md:px-0">
              <span className="block font-bold md:inline">{genre}</span>{" "}
              <span className="hidden md:inline">•</span> {subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
