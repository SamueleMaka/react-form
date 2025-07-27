import './App.css'
import blogPosts from "./data/data.js";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [articles, setArticles] = useState(blogPosts); 

  const newArticleHandler = (event) => {
    event.preventDefault();
  
    const newArticle = {
      id: Date.now(),
      titolo: input
    };
  
    setArticles([...articles, newArticle]);
  }

  const deleteArticle = (id) => {
    setArticles(articles.filter(currArticle => currArticle.id !== id));
  }
  return (
    <>
      <h1>Aggiungi altri articoli</h1>
      <div className="container">
        <div className="articleContainer">
          <ul>
            {
              articles.map(({id, titolo}) => {
                return(
                  <li key={id}>
                    {titolo}
                    <button
                      onClick={() => deleteArticle(id)}
                    >X</button>
                  </li>
                )
                
              })
            }
          </ul>
        </div>
        <div className="inputContainer">
        <button onClick={newArticleHandler}>Aggiugni un nuovo articolo</button>
          <input 
            type="text"  
            value={input}
            onChange={(event)=>setInput(event.target.value)}
          />
      </div>
      </div>
    </>
  )
}

export default App
