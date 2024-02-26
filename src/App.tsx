import Article from "./components/Article";
import LisstArticle from "./components/LisstArticle";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Article />
        <Sidebar />
        <LisstArticle />
      </main>
    </>
  );
}
