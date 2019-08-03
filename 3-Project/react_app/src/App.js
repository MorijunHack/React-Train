// react.jsに記述されているReact（exportされてるもの）とComponentをインポートしている。後者はexportされていないので、{}で囲って表現する
import React, { Component } from 'react';
import './App.css';

// 元々は関数コンポーネント
// function App() {
//   return (
//     <div>
//       <h1>React</h1>
//       <p>This is sample component.</p>
//       <p>これはサンプルのコンポーネントですよん</p>
//     </div>
//   );
// }

// 教材ではクラスに変えたいようなので、こちらに書き換えた
class App extends Component {
  render() {
    return (
      <div>
        <h1>React</h1>
        <p>This is sample component.</p>
        <p>これはコンポーネントのサンプルですよん。</p>
      </div>
    );
  }
}

export default App;
