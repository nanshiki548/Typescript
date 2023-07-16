import React, {useState, useEffect} from "react";

//タイマーが呼び出される周期を1秒にする
const UPDATE_CYCLE = 1000

//localstorageで使用するキー
const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
    US = 'en-US',
    JP = 'ja-JP',
}

const getLocaleFromString = (text:string) => {
    switch (text) {
        case Locale.US:
            return Locale.US
        case Locale.JP:
            return Locale.JP
        default:
            return Locale.US
    }
}

export const Clocl = () => {
    const [timestamp, setTimeStamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.US)

    //タイマーのセットをするための副作用
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeStamp(new Date())
        }, UPDATE_CYCLE)

        //リーンアップ関数を私、アンマウント次にタイマーを解除する
        return () => {
            clearInterval(timer)
        }
        //初期描画次のみ実行する
        }, [])      

    //loccalstorageから値を読み込むための副作用
    useEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCALE)
        if (savedLocale !== null) {
            setLocale(getLocaleFromString(savedLocale))
        }
    }, [])

    //localeが変化したときに、localstorageに値を保持するための副作用
    useEffect(() => {
        localStorage.setItem(KEY_LOCALE, locale)
        //依存配列にlocaleを渡し、localeが変化するたびに実行するようにする
    }, [locale])

    return (
        <div>
            <p>
                <span id="current-time-label">現在時刻</span>
                <span>{timestamp.toLocaleString(locale)}</span>
                <select 
                value={locale}
                onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
                <option value="en-US">en-US</option>
                <option value="ja-JP">ja-JP</option>
                </select>
            </p>
        </div>
    )
}