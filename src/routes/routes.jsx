import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieInfo } from "../pages/MovieInfo";
import { NotFound } from "../pages/NotFound";
import { SimilarMovies } from "../pages/SimilarMovies";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/movies/:id" element={<MovieInfo />}></Route>
    <Route path="/movies/similar/:id" element={<SimilarMovies />}></Route>
    <Route path="*" element={<NotFound />} ></Route>
  </>
);

export default routes;
