import React from "react";
import GlobalStyle from "./theme/GlobalStyle";
import Router from "./pages/Router";
import api from "./api";

const App = () => {

  React.useEffect(() => {
    const getSong = async () => {
      const { data } = await api.get('track/3135556')
      console.log(data)
    }
    getSong()
  }, [])
  
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
