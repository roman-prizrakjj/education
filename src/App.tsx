import './styles/global.css';
import {
  Header,
  Hero,
  About,
  Courses,
  Benefits,
  ForWhom,
  Corporate,
  Team,
  Community,
  Cases,
  FAQ,
  ContactForm,
  Footer,
} from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Benefits />
        <ForWhom />
        <Corporate />
        <Team />
        <Community />
        <Cases />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
