import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/photos/random")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(typeof posts)

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/note" element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

const observer = new PerformanceObserver((list) => {
  console.log("Long Task detected! 🚩️");
  const entries = list.getEntries();
  console.log(entries);
});

observer.observe({ entryTypes: ["longtask"] });
