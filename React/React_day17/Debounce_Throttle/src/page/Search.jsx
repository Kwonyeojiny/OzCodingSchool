import { Link, useSearchParams } from "react-router-dom";
import { data } from "../assets/data/data";
import { getRegExp } from "korean-regexp";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

// function Search() {
//   const [searchParams] = useSearchParams();
//   const param = searchParams.get("animal");
//   const reg = getRegExp(param);

//   const filteredData = data.filter((el) => el.name.match(reg));

//   return (
//     <ul>
//       {filteredData.map((el) => (
//         <li key={el.id}>
//           <Link to={`/detail/${el.id}`}>
//             <img src={el.img} />
//             <div>{el.name}</div>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// Debounce 방식
// function Search() {
//   const [searchParams] = useSearchParams();
//   const [filteredData, setFilteredData] = useState(data);
//   const param = searchParams.get("animal");
//   const reg = getRegExp(param);

//   useEffect(() => {
//     const debounceTimer = setTimeout(() => {
//       const newFilteredData = data.filter((el) => el.name.match(reg));
//       setFilteredData(newFilteredData);
//     }, 1000);
//     return () => clearTimeout(debounceTimer);
//   }, [param]);

//   return (
//     <ul>
//       {filteredData.map((el) => (
//         <li key={el.id}>
//           <Link to={`/detail/${el.id}`}>
//             <img src={el.img} />
//             <div>{el.name}</div>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// Throttle 방식
function Search() {
  const [searchParams] = useSearchParams();
  const [filteredData, setFilteredData] = useState(data);
  const param = searchParams.get("animal");
  const reg = getRegExp(param);

  const time = useRef(new Date()); // 1시 0분

  useEffect(() => {
    const newTime = new Date(); // 1시 1분

    const throttleTimer = setTimeout(() => {
      const newFilteredData = data.filter((el) => el.name.match(reg));
      setFilteredData(newFilteredData);
      time.current = new Date(); // 실행하고 난 뒤 현재시간 업데이트

      // 5분 간격 - (1시 1분 - 1시 0분) -> 4분 뒤 실행하겠다
    }, 1000 - newTime - time.current);
    return () => clearTimeout(throttleTimer);
  }, [param]);

  return (
    <ul>
      {filteredData.map((el) => (
        <li key={el.id}>
          <Link to={`/detail/${el.id}`}>
            <img src={el.img} />
            <div>{el.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Search;
