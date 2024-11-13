import { useState } from 'react';
import './Appa.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert({msg:message,
      type:type})
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled","success");

    }
  }
  return(
    <>
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
{/* <About/> */}
</div>
    </>
  );
}

export default App;
