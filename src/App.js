import React from "react"
import Header from "./Components/HeaderComponents"
import Footer from "./Components/FooterComponent"
import Main from "./Components/MainComponent"

import {AuthProvider} from "./context/AuthProvider.jsx";









import "../src/styles/navBarrStyle.css"
import "../src/styles/footerStyle.css"
import "../src/styles/cardStyle.css"
import "../src/styles/MainStyle.css"
import "../src/styles/TableStyle.css"
import "../src/styles/CarroStyle.css"
import "../src/styles/ProductoStyles.css"
import "../src/styles/Botones.css"
import "../src/styles/DetallesStyles.css"
import "../src/styles/Logger.css"
import "../src/styles/SignStyle.css"



function App() {
  
  console.log(process.env.REACT_APP_BACKEND_URL)
  return ( 
   
        


 <React.Fragment>
      
      <Header/>
      
     
      <AuthProvider>
      <Main></Main>
      </AuthProvider>
     
      
      
      <Footer/>
    </React.Fragment>

   


  )
}

export default App;
