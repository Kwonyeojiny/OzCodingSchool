import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'

const BlueButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
  width: 200px;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: rgba(
    ${(props)=> props.input1},
    ${(props)=> props.input2},
    ${(props)=> props.input3},
    ${(props)=> props.input4}
  );
`;

const BigBlueButton = styled(BlueButton)`
  width: 300px;
  padding: 20px;
`;

const BigTextBigBlueButton = styled(BigBlueButton)`
  font-size: 30px;
  font-weight: 900;
`;

const PropsButton = styled.button`
  background-color: ${props => props.backgroundColor || 'white'};
  color: ${props => props.color || 'black'};
  padding: ${props => props.padding 
  || 0};
  border-radius: ${props => props.radius || 0};
  margin: ${props => props.margin || 0};
  width: ${props => props.width || 'auto'};
  font-size: ${props => props.fontSize || 'auto'};
  font-weight: ${props => props.fontWeight || 400};
`;

const BackgroundColorDiv = styled.div`
  width: 300px;
  height: 100px;
  
`

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  input {
    width: 90%;
  }
  span {
    color: green;
    &:hover{
      background-color: white;
    }
  }
`

function App() {
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)
  const [input3, setInput3] = useState(0)
  const [input4, setInput4] = useState(0)

  return (
    <>
      <GlobalStyle />
      <Container input1={input1} input2={input2} input3={input3} input4={input4}>
      <div>안녕하세요</div>
      <input type='range' 
        value={input1} 
        onChange={(e)=> setInput1(e.target.value)}
        min={0} 
        max={255} />
        <span>{input1}</span>
      <input type='range' 
        value={input2} 
        onChange={(e)=> setInput2(e.target.value)}
        min={0} 
        max={255} />
      <span>{input2}</span>
      <input type='range'
        value={input3} 
        onChange={(e)=> setInput3(e.target.value)}
        min={0} 
        max={255} />
      <span>{input3}</span>
      <input type='range'
        value={input4} 
        onChange={(e)=> setInput4(e.target.value)}
        min={0} 
        step={0.05}
        max={1} />
      <span>{input4}</span>
      <BackgroundColorDiv  />

      <BlueButton>파란색 버튼</BlueButton>
      <PropsButton
        backgroundColor="blue"
        color="white"
        padding="20px"
        radius="4px"
        margin="10px"
        width="300px"
      >파란색 버튼</PropsButton>

      <BigBlueButton>커다란 파란색 버튼</BigBlueButton>
      <BigTextBigBlueButton>글자도 커다란 파란색 버튼</BigTextBigBlueButton>
      <PropsButton backgroundColor='green' color='yellow'>Props 버튼</PropsButton>
    </Container>
    </>
  )
}

export default App
