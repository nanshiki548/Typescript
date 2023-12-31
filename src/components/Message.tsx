//無名関数でコンポーネントを定義し、Textという変数に代入する
//Textコンポーネントは親から'context'というデータで受け取る

const Text = (props: {content:string}) => {
    //propsからcontentという値を取り出す
    const {content} = props
    //propsで渡されたデータを表示する
    return <p className="text">{content}</p>
}

//同様に定義したコンポーネントをMessageという変数に代入する
const Message = (props: {}) => {
    const content1 = 'This is parent component'
    const content2 = 'Message uses Text conponent'

    return(
        //contentというキーでconponentにデータを渡す
        <div>
            <Text content={content1}/>
            <Text content={content2}/>
        </div>
    )
}

export default Message