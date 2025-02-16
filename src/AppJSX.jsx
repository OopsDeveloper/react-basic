import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = 'chiro';
  const list = ['우유', '딸기', '바나나', '요거트']
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}!</h1>
      <h2>Hello</h2>
      <p>{ name }</p>
      <ul>
        {
          list.map(item => (
            <li>{item}</li>
          ))
        }
      </ul>
      <img
      style={{ width: '200px', height: '200px' }}
      src=""
      alt="nature"
      />
    </>
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
  );
}

export default AppJSX;
