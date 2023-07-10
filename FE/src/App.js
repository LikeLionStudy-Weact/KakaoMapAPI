import Router from "./Router";
import KakaoMapK from "./components/KakaoMapK";
import KakaoMapL from "./components/KakaoMapL";
import KakaoMapS from "./components/KakaoMapS";
import GlobalStyle from "./style/GlobalStyle";
import "./style/font.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      {/* <KakaoMapK /> */}
      <KakaoMapL />
      {/* <KakaoMapS /> */}
    </>
  );
}

export default App;
