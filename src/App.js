import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import Product from "./components/Pages/ProductPage";

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={Home} />
          <Route exact path='/product/:_id' component={Product} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
