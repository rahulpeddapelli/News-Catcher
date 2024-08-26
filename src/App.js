import './App.css';
import NavBar from './Components/NavBar';
import NewsContainer from './Components/NewsContainer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';


function App() {
  const pageSize = 8;
  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState("in");
  const [countryName, setCountryName] = useState("India");
 
  return (
    
    <>
      <LoadingBar  color='#f11946' progress= {progress} onLoaderFinished={() => setProgress(0)}/>
      <Router>
        <Routes>

          <Route exact path="/" element={<>
          <NavBar category={"general"}  setCountry={setCountry} setCountryName = {setCountryName}/>
          <NewsContainer key={"gen"} pageSize={pageSize} country={country} category={"general"} setProgress = {setProgress} countryName = {countryName}/>
          </>}>
          </Route>

          <Route exact path="/business" element={<>
          <NavBar category={"business"} setCountry={setCountry} setCountryName = {setCountryName} /> 
          <NewsContainer key={"business"} pageSize={pageSize} country={country}  category={"business"} setProgress= {setProgress} countryName = {countryName} />
          </>}>
          </Route>

          <Route exact path="/sports" element={<>
          <NavBar category={"sports"} setCountry={setCountry}  setCountryName = {setCountryName}/>
          <NewsContainer key={"sports"} pageSize={pageSize} country={country} category={"sports"} setProgress= {setProgress} countryName = {countryName}/>
          </>}>
          </Route>

          <Route exact path="/science" element={<>
          <NavBar category={"science"} setCountry={setCountry} setCountryName = {setCountryName}/> 
          <NewsContainer key={"science"} pageSize={pageSize} country={country} category={"science"} setProgress= {setProgress} countryName = {countryName}/>
          </>}>
          </Route>

          <Route exact path="/technology" element={<>
          <NavBar category={"technology"} setCountry={setCountry} setCountryName = {setCountryName}/> 
          <NewsContainer key={"tech"} pageSize={pageSize} country={country} category={"technology"} setProgress= {setProgress} countryName = {countryName}/>
          </>}>
          </Route>

          <Route exact path="/health" element={<>
          <NavBar category={"health"} setCountry={setCountry} setCountryName = {setCountryName}/> 
          <NewsContainer key={"health"} pageSize={pageSize} country={country}  category={"health"} setProgress= {setProgress} countryName = {countryName}/>
          </>}>
          </Route>

          <Route exact path="/entertainment" element={<>
          <NavBar category={"entertainment"} setCountry={setCountry}  setCountryName = {setCountryName}/> 
          <NewsContainer key={"ent"} pageSize={pageSize} country={country} category={"entertainment"} setProgress= {setProgress} countryName = {countryName}/>
          </>}>
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;


