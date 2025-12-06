import './styles/global.css';
import {
  Header,
  Hero,
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
