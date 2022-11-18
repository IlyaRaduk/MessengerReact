import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App(props) {
  return (
   
    <div className="App" >
      <Header/>
      <Main state={props.state} addPost={props.addPost} changeLetters={props.changeLetters}/>
    </div>

  );
}

export default App;
