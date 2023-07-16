//Helloはクリックするとアラートを出すテキスト
const Hello = () => {
    //クリック次に呼ばれる関数
    const onClick = () => {
        //アラートを出す
        alert('hello')
    }

    const text = 'Hello react!'
    //テキストを持つdiv要素を返す
    return (
        //divのonClickにクリック次のコールバック関数を渡す
        <div onClick={onClick}>
            {text}
        </div>
    
    )
}

//外部からHellを読み込めるようエクスポートする
export default Hello