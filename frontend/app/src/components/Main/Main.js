import "./Main.css";
import React from 'react';
import Article from "../Article/Article";

function Main() {
  return (
    <div>
        <main>
            <p>
                <h1>Hello Friend</h1>
            </p>
            <Article />
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                ReactJS
            </a>
        </main>
    </div>
  );
}

export default Main;
