// react.jsに記述されているReact（exportされてるもの）とComponentをインポートしている。
// 後者はexportされていないので、{}で囲って表現する
import React, { Component } from 'react';
import './App.css';

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
  constructor(props) {
    super(props);
    this.title = props.title;
    this.message = props.message;
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <p>{this.message}</p>
      </div>
    );
  }
}

export default App;
