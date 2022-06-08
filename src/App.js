import { useEffect, useState } from "react";
import Cleanup from "./Cleanup";
function App() {
  const [count, setcount] = useState(1);
  const [name, setName] = useState("");
  const handleCountUpdate = () => {
    setcount(count + 1);
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  //마운트 + count 변경될 때 실행
  useEffect(() => {
    console.log("count 변화");
  }, [count]);

  //마운트 + name 변경될 때 실행
  useEffect(() => {
    console.log("name 변화");
  }, [name]);

  //렌더링될 때 마다 매번 실행됨 - 렌더링 이후
  useEffect(() => {
    console.log("렌더링");
  });

  //처음 마운팅 됐을 때만
  useEffect(() => {
    console.log("마운팅");
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count:{count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name:{name}</span>
      <Cleanup />
    </div>
  );
}

export default App;
