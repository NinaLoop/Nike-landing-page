import Nav from "./components/Nav";
import {
  Footer,
  Hero,
  Products,
  Statistics,
  Features,
  Reviews,
  SignUp,
} from "./sections";
const App = () => (
  <main className="relative">
    <Nav />
    <section className="">
      <Hero />
    </section>
    <section className="padding">
      <Statistics />
    </section>
    <section className="padding" id="products">
      <Products />
    </section>
    <section className="padding">
      <Features />
    </section>
    <section className="">
      <Reviews />
    </section>
    <section className="padding">
      <SignUp />
    </section>
    <section>
      <Footer />
    </section>
  </main>
);

export default App;
