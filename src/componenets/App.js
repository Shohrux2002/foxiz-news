import BasicNews from "./basicnews/BasicNews";
import Editor from "./editor/Editor";
import Footer from "./footer/Footer";
import HotNews from "./hotnews/HotNews";
import Navbar from "./Navbar/Navbar";
import SignIn from "./signin/SignIn";
import Sponsored from "./sponsored/Sponsored";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HotNews />
      <BasicNews />
      <Sponsored />
      <Editor />
      <Footer />
      <SignIn />
    </div>
  );
}

export default App;
