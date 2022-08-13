/* eslint react-hooks/exhaustive-deps: off*/

import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

// JSX記法を用いる
const App = () => {
  // Stateを変更すると再レンダリングされる(毎回ログ出力される)
  console.log("こんにちは");
  // コンポーネントは最初に書いた方が見やすい
  const [num, setNum] = useState(0);
  const [showFlag, setShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setShowFlag(!showFlag);
  };

  // 第一引数に関数、第二引数に配列
  useEffect(() => {
    // Stateが変更される度にここを通る
    if (num % 3 === 0) {
      showFlag || setShowFlag(true);
    } else {
      showFlag && setShowFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="green" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="元気です!" />
      <button onClick={onClickCountUp}>押せ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>表示/非表示</button>
      <p>{num}</p>
      {showFlag && <p>あああああ!</p>}
    </>
  );
};

// defaultを付ける？付けない？
export default App;
