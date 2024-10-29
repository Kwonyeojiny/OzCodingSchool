import { useMemo, useState, useEffect, useCallback, memo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [rerender, setRerender] = useState(false);

  // '함수' 자체를 변수에다 할당하여 선언
  const plus1 = useCallback(
    (number) => {
      console.log("plus1 실행");
      return number + 1;
    },
    [rerender]
  );

  // 함수가 리턴하는 '값'을 저장해서 씀
  const numberPlus1 = useMemo(() => plus1(number), [rerender]);

  useEffect(() => {
    console.log("plus1 생성 됨");
  }, [plus1]);

  return (
    <>
      <NumberDisplay number={number} />
      <div>numberPlus1 : {numberPlus1}</div>
      <button onClick={() => setNumber(number + 1)}>number + 1</button>
      <button onClick={() => setRerender(!rerender)}>Rerender</button>
    </>
  );
}

const NumberDisplay = memo(({ number }) => {
  console.log("Display 렌더링");
  return <div>number : {number}</div>;
});

export default App;
