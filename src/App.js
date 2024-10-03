import './App.css';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';

function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <div className="menu-movil">
        <Menu />
      </div>
    </>
  );
}

export default App;
