import React, { useState } from "react";
import "./App.css";
import SearchAppBar from "./Components/nav/SearchAppBar";
import MovieList from "./Components/MovieList";
import Add from "./Components/Add";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Trailer from "./Components/Trailer";


function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Wonder Woman 1984",
      rate: 1,
      img: "https://image.tmdb.org/t/p/w300//8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg?v=0.0000001",
      genre: "Action, Fantasy, Adventure",
      description:
        "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",
      trailer: (
        <iframe
          width="400"
          height="300"
          src="https://www.youtube.com/embed/sfM7_JLk-84"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 2,
      title: "Survive the Night",
      rate: 3,
      img: "https://image.tmdb.org/t/p/w300//niyXFhGIk4W2WTcX2Eod8vx2Mfe.jpg?v=0.0000001",
      genre: "Action, Thriller",
      description:
        "A disgraced doctor and his family are held hostage at their home by criminals on the run, when a robbery-gone-awry requires them to seek immediate medical attention.",
      trailer: (
        <iframe
          width="400"
          height="300"
          src="https://www.youtube.com/embed/TfTNGqXBwHY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 3,
      title: "21 Jump Street",
      rate: 2,
      img: "https://image.tmdb.org/t/p/w300//8v3Sqv9UcIUC4ebmpKWROqPBINZ.jpg?v=0.0000001",
      genre: "Action, Comedy, Crime",
      description:
        "In high school, Schmidt was a dork and Jenko was the popular jock. After graduation, both of them joined the police force and ended up as partners riding bicycles in the city park. Since they are young and look like high school students, they are assigned to an undercover unit to infiltrate a drug ring that is supplying high school students synthetic drugs.",
      trailer: (
        <iframe
          width="400"
          height="300"
          src="https://www.youtube.com/embed/Oj55KinxZx4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 4,
      title: "Avengers: Endgame",
      rate: 5,
      img: "https://image.tmdb.org/t/p/w300//or06FN3Dka5tukK1e9sl16pB3iy.jpg?v=0.0000001",
      genre: "Action, Science Fiction, Adventure",
      description:
        "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      trailer: (
        <iframe
          width="400"
          height="300"
          src="https://www.youtube.com/embed/TcMBFSGVi1c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 5,
      title: "The Hangover",
      rate: 4,
      img: "https://image.tmdb.org/t/p/w300//jjCPcxw7QCmFPYM1t3BThdEawJK.jpg?v=0.0000001",
      genre: "Comedy",
      description:
        "When three friends finally come to after a raucous night of bachelor-party revelry, they find a baby in the closet and a tiger in the bathroom. But they can't seem to locate their best friend, Doug – who's supposed to be tying the knot. Launching a frantic search for Doug, the trio perseveres through a nasty hangover to try to make it to the church on time.",
      trailer: (
        <iframe
          width="400"
          height="300"
          src="https://www.youtube.com/embed/tcdUhdOlz9M"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 6,
      title: "The Grudge",
      rate: 3,
      img: "https://image.tmdb.org/t/p/w300//e8OLh49AJKIATBSAso6EWr1YeWH.jpg?v=0.0000001",
      genre: "Horror, Mystery, Thriller",
      description:
        "An American nurse living and working in Tokyo is exposed to a mysterious supernatural curse, one that locks a person in a powerful rage before claiming their life and spreading to another victim.",
      trailer: (
        <iframe
          width="400"
          height="300"
          src="https://www.youtube.com/embed/ddjo_FIKdlo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
  ]);
  const addMovieHandler = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");
  return (
    <Router>
      <div className="App">
        <SearchAppBar
          setSearch={setSearch}
          search={search}
          setRating={setRating}
        />
        <Switch>
          <Route path="/" exact>
            <MovieList movies={movies} search={search} rating={rating} />
            <Add setMovies={setMovies} addMovieHandler={addMovieHandler} />
          </Route>
          <Route
            path='/trailer/:ID'>
              <Trailer movies={movies}/>
            </Route>
            
          
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
