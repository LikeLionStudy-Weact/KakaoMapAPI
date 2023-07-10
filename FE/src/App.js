import Kakao from "./Kakao";
import Router from "./Router";
import KakaoMap from "./components/KakaoMap";
import GlobalStyle from "./style/GlobalStyle";
import "./style/font.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <Kakao />
    </>
  );
}

export default App;
