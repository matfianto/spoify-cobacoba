// import logo from './logo.svg';
// import './App.css';
// import data from "./data/dataFromSpotify.js";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

function App() {
  // const {
  //   album: {
  //     images: [{ url: albumImgUrl }],
  //     name: albumName,
  //   },
  //   artists: [{ name: artistName }],
  //   name: songTitle,
  // } = data;
  // console.log(data);


  return (
    
    <div className="App">
      
    <h2 className="judul">Spotify CobaCoba</h2>
       {/* <header className="header">
        <p>
          Sopify Coba-Coba
        </p>
      </header>
      <main className="main">
        <section className="album-container">
          <img src={albumImgUrl} alt={albumName} className="album-image" />
          <div className="song-info">
            <h1 className="song-title">{songTitle}</h1>
            <h2 className="song-artist">{artistName}</h2>
            <button type="button" className="btn btn--select">
              Select
            </button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>
          Generasi Gigih FE - 2022 - Rahmat Alfianto
        </p>
      </footer>  */}
      <Main />
      <Footer />
      
    </div>
  );
}

export default App;
