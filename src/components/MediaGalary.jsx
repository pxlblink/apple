import MovieCard from "./MovieCard";

export default function MediaGalary() {
  const moviesInfo = [
    {
      imgPath: "/images/movies/plur1bus_thumb_274x496nr.jpg",
      imgPathWide: "/images/movies/plur1bus_thumb_wide_1250x668sr.jpg",
      titlePath: "/images/movies/plur1bus_title_220x54.png",
      genre: "Drama",
      subTitle: "Happiness is a state of mind.",
    },
    {
      imgPath: "/images/movies/tehran_thumb_274x496nr.jpg",
      imgPathWide: "/images/movies/tehran_thumb_wide_1250x668sr.jpg",
      titlePath: "/images/movies/tehran_title_220x54.png",
      genre: "Thriller",
      subTitle: "A secret agent embarks on her most dangerous mission yet.",
    },
    {
      imgPath: "/images/movies/f1_thumb_274x496nr.jpg",
      imgPathWide: "/images/movies/f1_thumb_wide_1250x668sr.jpg",
      titlePath: "/images/movies/f1_title_220x54.png",
      genre: "Action",
      subTitle: "4 Oscar Nominations Including Best Pictrue.",
    },
    {
      imgPath: "/images/movies/drops_of_god_thumb_274x496nr.jpg",
      imgPathWide: "/images/movies/drops_of_god_thumb_wide_1250x668sr.jpg",
      titlePath: "/images/movies/drops_of_gods_title_220x54.png",
      genre: "Drama",
      subTitle: "New season.",
    },
  ];

  return (
    <div className="pb-8 bg-[#f5f5f7]">
      <div className="flex justify-center pt-8 pb-4">
        <h2 className="py-3 text-3xl font-semibold lg:text-[56px]">
          Endless entertainment.
        </h2>
      </div>

      <div className="flex overflow-x-scroll gap-2 snap-x snap-mandatory scroll-smooth no-scrollbar">
        {moviesInfo.map((movie, i) => (
          <MovieCard
            key={i}
            imgPath={movie.imgPath}
            imgPathMd={movie.imgPathWide}
            titlePath={movie.titlePath}
            genre={movie.genre}
            subTitle={movie.subTitle}
          />
        ))}
      </div>
    </div>
  );
}
