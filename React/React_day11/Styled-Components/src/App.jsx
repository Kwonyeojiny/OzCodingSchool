import { contents } from "./assets/data/contents";
import Content from "./components/Content";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Tab from "./components/Tab";
import "./AppSCSS.scss";

import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 80px 40px 1fr;
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Tab />
      <main>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </main>
    </div>
  );
}

export default App;
