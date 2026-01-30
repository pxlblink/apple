import MovieCard from "./MovieCard";

export default function MediaGalary() {
  const movesInfo = [
    {
      imgPath: "/public/images/movies/plur1bus_thumb_274x496nr.jpg",
      imgPathWide: "/public/images/movies/plur1bus_thumb_wide_1250x668sr.jpg",
      titlePath: "/public/images/movies/plur1bus_title_220x54.png",
      genre: "Drama",
      subTitle: "Happiness is a state of mind.",
    },
    {
      imgPath: "/public/images/movies/tehran_thumb_274x496nr.jpg",
      imgPathWide: "/public/images/movies/tehran_thumb_wide_1250x668sr.jpg",
      titlePath: "/public/images/movies/tehran_title_220x54.png",
      genre: "Thriller",
      subTitle: "A secret agent embarks on her most dangerous mission yet.",
    },
    {
      imgPath: "/public/images/movies/f1_thumb_274x496nr.jpg",
      imgPathWide: "/public/images/movies/f1_thumb_wide_1250x668sr.jpg",
      titlePath: "/public/images/movies/f1_title_220x54.png",
      genre: "Action",
      subTitle: "4 Oscar Nominations Including Best Pictrue.",
    },
    {
      imgPath: "../../public/images/movies/drops_of_god_thumb_274x496nr.jpg",
      imgPathWide: "../../public/images/movies/drops_of_god_thumb_wide_1250x668sr.jpg",
      titlePath: "../../public/images/movies/drops_of_gods_title_220x54.png",
      genre: "Drama",
      subTitle: "New season.",
    },
  ];

  return (
    <div className="pb-8 bg-gray-100">
      <div className="flex justify-center pt-8 pb-4">
        <h2 className="text-3xl font-semibold">Endless entertainment.</h2>
      </div>

      <div className="flex overflow-x-scroll gap-2 snap-x snap-mandatory scroll-smooth no-scrollbar">
        {movesInfo.map(movie => (
          <MovieCard
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
