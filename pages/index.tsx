import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import Navbar from "@/components/NavBar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorite";

export async function getServerSideProps(context:NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return{
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return{
    props: {}
  }
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className=" pb-40 ">
      <MovieList title="New on Netflix" data={movies} />
      <MovieList title="My Favorites" data={favorites} />
      </div>
    </>
  )
}
