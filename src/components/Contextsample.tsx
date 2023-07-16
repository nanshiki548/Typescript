import React from "react";

//Titleを渡すためのContextを作成する
const TitleContext=React.createContext('')

//Titleコンポーネントの中でContextの値を参照する
const Title = () => {
    //Consumerを使ってContextの値を参照
    return (
        <TitleContext.Consumer>
            {/*Consumer直下に関数を置いて、Contextの値を参照する */}
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            {/*HeaderからTitleへは何もデータを渡さない */}
            <Title/>
        </div>
    )
}

const Page = () => {
    const title = 'React Book'

    //Providerを使いContextに値をセットする
    //Provider以下のコンポーネントから値を参照できる
    return (
        <TitleContext.Provider value= {title}>
            <Header/>
        </TitleContext.Provider>
    )
}

export default Page