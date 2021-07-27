import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";
import ProductDetail from "./components/pages/ProductDetail";

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={Home} />
          <Route exact path='/product/:id' component={ProductDetail} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
