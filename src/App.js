import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App(props) {
  return (
   
    <div className="App" >
      <Header/>
      <Main state={props.state}/>
    </div>

  );
}

export default App;
