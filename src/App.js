import React, { useEffect, useState } from "react";
import "./App.css";
import backgroundGif from "./background.gif";

const App = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="app" style={{ backgroundImage: `url(${backgroundGif})` }}>
      <div className="content">
        <div className="diagram">
          <h1 className="title">9/16 AIで学習の壁を打ち破れ！</h1>
          <div className="grid">
            <div className={`item blue ${animate ? "animate" : ""}`}>
              <h2>できた</h2>
              <p>React＆GitHubの研究</p>
              <svg viewBox="0 0 24 24" className="icon">
                <path
                  fill="#fff"
                  d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                />
              </svg>
            </div>
            <div className={`item red ${animate ? "animate" : ""}`}>
              <h2>学び</h2>
              <p>Vercelでプライベートリポジトリも公開可能</p>
              <svg viewBox="0 0 24 24" className="icon">
                <path
                  fill="#fff"
                  d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,17H13V11H11V17M11,9H13V7H11V9Z"
                />
              </svg>
            </div>
            <div className={`item cyan ${animate ? "animate" : ""}`}>
              <h2>次にすること</h2>
              <p>どんどん突き進む！</p>
              <svg viewBox="0 0 24 24" className="icon">
                <path
                  fill="#fff"
                  d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"
                />
              </svg>
            </div>
            <div className={`item pink ${animate ? "animate" : ""}`}>
              <h2>babubabu</h2>
              <p>AIで学習のハードルが下がった</p>
              <svg viewBox="0 0 24 24" className="icon">
                <path
                  fill="#fff"
                  d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="report">
          <h2>【9/16　日報】</h2>
          <p>
            皆様お疲れ様です❗
            <br />
            本日の日報です✨
            <br />
            <strong className="blue">できた</strong>
            <br />
            React＆GitHubの研究
            <br />
            <strong className="red">学び</strong>
            <br />
            GitHubは実は以前から使っているのですが、勉強しながら作った変なものが多かったこともあってその手のものはある時すべて同種のサービスであるBitBucketに移してしまいました。GitHubに関しては開発の管理サービスなので、Javaも学習するようになったらポートフォリオとして使う気満々なのですが、Pagesで公開するにはパブリックリポジトリにする必要があります。が、なんとVercelならそこ関係なく公開できるみたい👀試したい…いや実に試したい…でもやることがあるのでそっちが先😄
            <br />
            <strong className="cyan">次にやること</strong>
            <br />
            もう、どんどん突き進む！
            <br />
            <strong className="pink">babubabu</strong>
            <br />
            昨日はまさかの宿泊となってしまい、今夜こそはちゃんと家に帰ります🏚ハマってしまうと本当に時間も忘れてしまうので危険極まりないです😅いつもの立川のコワーキングスペースでまたも絶賛脱線中👀とはいえこの講座に出たことがきっかけで今のような状態になっているのです✨プログラミングはもともと興味があって学習してはいたのですがなかなかペースが上がりませんでした。AIのお陰で学習のハードルは下がりましたね🙌この時代の学生が本当に羨ましいです😺とはいえ逆に学習意欲がない学生は以前よりずっと悲惨なことに❓❗👀
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
