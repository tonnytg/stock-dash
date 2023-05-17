import './App.css';
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="BodyMain">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
