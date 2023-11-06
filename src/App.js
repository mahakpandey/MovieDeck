import "./App.css";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Movies from './movie.json'

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        {
          Movies.map((e) =>{
            return (
                <Card
                img={e.Poster}
                title={e.Title}
                year={e.Year}
              />
            )  
          })
        }
      </div>
    </div>
  );
}

export default App;
