import "./App.css";
import Header from "./components/Header";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ReviewSec from "./components/ReviewSec";
import OverViewSec from "./components/OverViewSec";
function App() {
  return (
    <>
      <Header />
      <ReviewSec />
      <OverViewSec />
    </>
  );
}

export default App;
