import ConverterForm from "./components/ConverterForm"

const Header = () => {
  return (
    <header className="app-header">
    <div className="logo"> Global Currency Converter </div>
  </header>
  );
};

const Footer = () => {
  return (
    <footer className="app-footer">
      <span>
      <p>
      | Developed By: <span className="developer-name">M.S.Sidhdhka Banu | </span>
      <span></span>
        | Data provided by :{" "}
        <a href="https://www.exchangerate-api.com" className="api-link">
         ExchangeRate API |
        </a>.
      </p>
      </span>
      
    </footer>
  );
};


const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="currency-converter">
        <h2 className="converter-title">Currency Converter</h2>
        <ConverterForm />
    </div>
    <Footer />
    </div>
    
  )
}

export default App