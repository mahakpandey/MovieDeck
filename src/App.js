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
          Movies.map((e , idx) =>{
            return (
                <Card
                key={idx}
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
