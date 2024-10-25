import './App.css';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';
import WhatsAppButton from './Wsp';

function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <div className="menu-movil">
        <Menu />
      </div>
      <WhatsAppButton />
    </>
  );
}

export default App;
