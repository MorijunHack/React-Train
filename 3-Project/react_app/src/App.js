// react.jsに記述されているReact（exportされてるもの）とComponentをインポートしている。
// 後者はexportされていないので、{}で囲って表現する
import React, { Component } from 'react';
import './App.css';
import Rect from './Rect';

// 元々は関数コンポーネント
//； function App() {
//   return (
//     <div>
//       <h1>React</h1>
//       <p>This is sample component.</p>
//       <p>これはサンプルのコンポーネントですよん</p>
//     </div>
//   );
// }

// 教材ではクラスに変えたいようなので、こちらに書き換えた
// 関数コンポーネントよりクラスの方が便利とのこと。これをデフォルトとしたい
class App extends Component {

  render() {
    return (
      <div>
        <h1>React</h1>
        <Rect x="50" y="50" w="150" h="150" c="#6ff9" r="50" />
        <Rect x="159" y="100" w="150" h="150" c="#f6f9" r="75" />
        <Rect x="100" y="150" w="150" h="150" c="#6669" r="25" />
      </div>
    );
  }
}

export default App;
