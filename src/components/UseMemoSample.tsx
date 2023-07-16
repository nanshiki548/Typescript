import React,{ useState, useMemo} from "react";

//`import{UseMomeSample}` from ...で利用
export const UseMoemoSample = () => {
    //textは現在のテキストボックスの中身の値を保持する
    const [text, setText] = useState('')
    //itemは文字列のリストを保持する
    const [items, setItems] = useState<string[]>([])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

//ボタンをクリックしたときに呼ばれる関数
const onClickButton = () => {
    setItems((perItems) => {
        ///現在の入力値をitemsに追加する,このとき新しい配列を作成して保持する
        return[...perItems, text]
    })
    //テキストボックスの中の値を空にする
    setText('')
}

    //numberofCharacters1は再描画のたびにitems.reduceを実行して結果を得る
    const numberofCharacters1 = items.reduce((sub, item) => sub + item.length, 0)
    //numberofCharacter2はuseMemoを使い、itemsが更新されるタイミングでitems.reduceを実行し結果を得る
    const numberofCharacters2 = useMemo(() => {
        return items.reduce((sub,item) => sub + item.length, 0)
        //第２引数の配列の中にitemがあるので、itemが新しくなった時だけ関数を実行してメモを更新する
    }, [items])

    return(
        <div>
            <p>UseMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput} />
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item,index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <p>Total Number of Characters 1: {numberofCharacters1}</p>
            <p>Total Number of Characters 2: {numberofCharacters2}</p>
        </div>
    )
}