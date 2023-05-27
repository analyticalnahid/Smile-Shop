import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Container } from "react-bootstrap";
import Routing from "./routing/Routing";


function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <Routing />
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
