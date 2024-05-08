import { createContext } from "react";

const initialMovieState: MovieState={
    movies: MovieList,
}


export const MovieContext = createContext<{
    state: MovieState,
    dispatch: React.Dispatch<MovieAction>
}>(
    state:initialMovieState,
    dispatch:()=>()
)