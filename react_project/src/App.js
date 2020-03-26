import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [item, setItem] = useState("")

  // headers.append('Content-Type', 'application/json');
  // headers.append('Accept', 'application/json');
  // headers.append('Authorization', 'Basic ');
  // headers.append('Origin','http://localhost:3000');
  let url = "http://www.songsterr.com/a/wa/bestMatchForQueryString?s=Wonderwall&a=Oasis"
  fetch(url, {
    mode: 'no-cors',
    // credentials: 'include',
    // method: 'POST',
    // headers: headers
})
   .then(res => res.json())
   .then(json => console.log("This is what it pulled", json))
  
   return (
    <div className="App">
     {item}
    </div>
  );
}

export default App;
