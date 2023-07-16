import React from "react"

//名前をにゅうちょくするテクストボックスを返す
const Name = () => {
    //input要素のonchangeイベントに対するコーツバック関数を定義する
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //入力されたテキストをコンソールに表示する
        console.log(e.target.value)
    }
    return(
        //styleオブジェクトのキーはキャメルケースとなる(forの代わりにhtmlForを使う)
        <div style={{padding: '16px', backgroundColor: 'grey'}}>
            <label htmlFor="name">名前</label>
            <input id="name" className="input-name" type="text" onChange={onChange} />
        </div>
    )
}
export default Name