import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./Components/About/About";
import Book from "./Components/Book/Book";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Quote from "./Components/Page/Quote/Quote";
import Service from "./Components/Services/Service";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import LoadingScreen from "./Loading";
import Scroll from "./Scroll";
import Float from "./Components/Float/Float";
import Tabs from "./Components/Tabs/Tabs";
import Duct from "./Components/Page/Duct/Duct";
import Disinfection from "./Components/Page/Disinfection/Disinfection";
import Greasetrap from "./Components/Page/GreaseTraps/Greasetrap";
import Tank from "./Components/Page/Tank/Tank";
import MEP from "./Components/Page/Mep/MEP";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Duct">
            <Header />
            <Duct />
            <Footer />
          </Route>
          <Route path="/Grease">
            <Header />
            <Greasetrap />
            <Footer />
          </Route>
          <Route path="/Tank">
            <Header />
            <Tank />
            <Footer />
          </Route>
          <Route path="/MEP">
            <Header />
            <MEP />
            <Footer />
          </Route>
          <Route path="/Disinfection">
            <Header />
            <Disinfection />
            <Footer />
          </Route>
          <Route path="/Quote">
            <Header />
            <Quote />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Main />
            <Float />
            <Service />
            <Tabs />
            <About />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
