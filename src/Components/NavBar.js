import React from 'react';
import { Link } from "react-router-dom";

const NavBar = (props) => {

  const handleCountryChange = (countryCode) => {
    console.log(countryCode)
    const splittedArray = countryCode.split("_");
    props.setCountry(splittedArray[1]);
    props.setCountryName(splittedArray[0]);
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{ zIndex: "2" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">News Catcher</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/" style={props.category === "general" ? { color: "yellow" } : {}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment" style={props.category === "entertainment" ? { color: "yellow" } : {}}>Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business" style={props.category === "business" ? { color: "yellow" } : {}}>Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health" style={props.category === "health" ? { color: "yellow" } : {}}>Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science" style={props.category === "science" ? { color: "yellow" } : {}}>Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports" style={props.category === "sports" ? { color: "yellow" } : {}}>Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology" style={props.category === "technology" ? { color: "yellow" } : {}}>Technology</Link>
            </li>

          </ul>

          <div>
            <select onChange={(e)=>{handleCountryChange(e.target.value)}}>
              <option value="India_IN">India</option>
              <option value="Argentina_AR">Argentina</option>
              <option value="Austria_AT">Austria</option>
              <option value="Australia_AU">Australia</option>
              <option value="Belgium_BE">Belgium</option>
              <option value="Bulgaria_BG">Bulgaria</option>
              <option value="Brazil_BR">Brazil</option>
              <option value="Canada_CA">Canada</option>
              <option value="Switzerland_CH">Switzerland</option>
              <option value="China_CN">China</option>
              <option value="Colombia_CO">Colombia</option>
              <option value="Cuba_CU">Cuba</option>
              <option value="Czech Republic_CZ">Czech Republic</option>
              <option value="Germany_DE">Germany</option>
              <option value="Egypt_EG">Egypt</option>
              <option value="France_FR">France</option>
              <option value="United Kingdom_GB">United Kingdom</option>
              <option value="Greece_GR">Greece</option>
              <option value="Hong Kong_HK">Hong Kong</option>
              <option value="Hungary_HU">Hungary</option>
              <option value="Indonesia_ID">Indonesia</option>
              <option value="Ireland_IE">Ireland</option>
              <option value="Israel_IL">Israel</option>
              <option value="United Arab Emirates_AE">United Arab Emirates</option>
              <option value="Italy_IT">Italy</option>
              <option value="Japan_JP">Japan</option>
              <option value="South Korea_KR">South Korea</option>
              <option value="Lithuania_LT">Lithuania</option>
              <option value="Latvia_LV">Latvia</option>
              <option value="Morocco_MA">Morocco</option>
              <option value="Mexico_MX">Mexico</option>
              <option value="Malaysia_MY">Malaysia</option>
              <option value="Nigeria_NG">Nigeria</option>
              <option value="Netherlands_NL">Netherlands</option>
              <option value="Norway_NO">Norway</option>
              <option value="New Zealand_NZ">New Zealand</option>
              <option value="Philippines_PH">Philippines</option>
              <option value="Poland_PL">Poland</option>
              <option value="Portugal_PT">Portugal</option>
              <option value="Romania_RO">Romania</option>
              <option value="Serbia_RS">Serbia</option>
              <option value="Russia_RU">Russia</option>
              <option value="Saudi Arabia_SA">Saudi Arabia</option>
              <option value="Sweden_SE">Sweden</option>
              <option value="Singapore_SG">Singapore</option>
              <option value="Slovenia_SI">Slovenia</option>
              <option value="Slovakia_SK">Slovakia</option>
              <option value="Thailand_TH">Thailand</option>
              <option value="Turkey_TR">Turkey</option>
              <option value="Taiwan_TW">Taiwan</option>
              <option value="Ukraine_UA">Ukraine</option>
              <option value="United States of America_US">United States of America</option>
              <option value="Venezuela_VE">Venezuela</option>
              <option value="South Africa_ZA">South Africa</option>
            </select>

          </div>

        </div>
      </div>
    </nav>
  )

}

export default NavBar;


