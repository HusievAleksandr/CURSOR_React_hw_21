import './App.css';
import  Routes from './routes/Routes';
import stayle from "./components/styles/stayle/LoginForm.module.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const linkUp = <><span className={stayle['questions']}>Forgot password?</span>
                <Link onClick={linkReplacementIn} className={stayle['questions']} 
                to="/CURSOR_React_hw_21/registration">Don't have an account? Sing Up </Link></>,

        linkIn = <><Link onClick={linkReplacementUp} className={stayle['questions']}                 
                    to="/CURSOR_React_hw_21/">Alredy have an account? Sing In </Link></>;

  const[linkOutput, setLinkOutput]= useState(linkUp);

  function linkReplacementIn() { setLinkOutput(linkIn)};
  function linkReplacementUp() { setLinkOutput(linkUp)};





  return (
    <div className="App">
        
          

      <div className={stayle['block']}>
                <div className={stayle["form-group"]}>
                    <img className={stayle['logo']} src="https://cdn-icons-png.flaticon.com/512/565/565547.png" alt="lock"></img>
                    <span>Sing in</span>
                </div>

                <form>
                    <Routes/>    
                </form>
                
                <div >
                    {linkOutput}
                </div>

                <div>
                    <span className={stayle['info']}>Copyright &copy; Your Website 2020.</span>
                </div>

        </div>
    </div>
  );
}

export default App;
