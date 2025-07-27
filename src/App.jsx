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

}

export default App
