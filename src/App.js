import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <body class='text-center'>
      <div class='container'>
        <h2 class='text-uppercase m-auto mt-5'>Simplest landing page in ReactJs</h2>
        <div class='row'>
          <div class='col-md-12 my-3'>
            <p class='my-3'>This is the simplest landing page I have created using ReactJs and bootstrap only.</p>
            <form class='my-3'>
              <div class='row w-75 m-auto'>
              <div class='col-md-2 mb-3'><label class='form-label'>Form label</label></div>
              <div class='col-md-10 mb-3'><input type='text' placeholder='Label input for text' class='form-control'></input></div>
              <div class='col-md-12 mb-3'><input type='submit' class='form-submit btn btn-success'></input></div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer>Created by Blessing Mwiti</footer>
    </body>
  );
}

export default App;
