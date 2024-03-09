import { Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";

// Pages
import Home from "./pages/Home";
import Info from "./pages/Info";
import Result from "./pages/Result";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Records from "./pages/Records";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Container className="mainContainer">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/result" element={<Result />} />
        <Route path="/records" element={<Records />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Container>
  );
}

export default App;
