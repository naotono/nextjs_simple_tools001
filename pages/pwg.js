import React, { useState } from 'react';
import Nav from '../components/nav'
import './App.css'

function App() {
  const [llength, setLength] = useState(10)
  const [lower, setLower] = useState(true)
  const [upper, setUpper] = useState(true)
  const [number, setNumber] = useState(true)
  const [symbol, setSymbol] = useState(true)
  const [text, setText] = useState('')

  const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }

  const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }

  const getRandomSymbol = () => {
    const symbols = '!@#$%^&*(){}[]=<>/.,'
    return symbols[Math.floor(Math.random() * symbols.length)]
  }

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
  }

  const generateEvent = () => {
    const length = +llength
    const hasLower = lower;
    const hasUpper = upper;
    const hasNumber = number;
    const hasSymbol = symbol;

    setText( generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length) )
  }

  const generatePassword = (lower, upper, number, symbol, length) => {
    // 1. Init pw var
    // 2. Filter out uncheck types
    // 3. Loop over length call generator function fro each type
    // 4. Add final pw to the pw var and return

    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    // console.log('tupesCount: ', typesCount)

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    // console.log('typesArr: ', typesArr)

    if(typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            // console.log('funcName: ', funcName)

            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword =  generatedPassword.slice(0, length)

    return finalPassword
  }

  const copyBoard = () => {
    const textarea = document.createElement('textarea')
    const password = text

    if(!password) {
        return;
    }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
  }

  return (
    <Nav>
        {style}
        <div className="pwg">
            <h3>パスワードを作成します。</h3>
            <div className="result-container">
                <span id="result">{ text }</span>
                <button className="btn" id="clipboard" onClick={() => copyBoard()}>
                    copy
                </button>
            </div>
            <div className="settings">
                <div className="setting">
                    <label>パスワードの長さ</label>
                    <input type="number" id="length" min='4' max='20' value={llength || '4'} onChange={(e) => setLength(e.target.value)} />
                </div>
                <div className="setting">
                    <label>大文字を含める</label> 
                    <input type="checkbox" id="uppercase" checked={upper} onChange={(e) => upper ? setUpper(false) : setUpper(true)} />
                    <label htmlFor="uppercase"></label>
                </div>
                <div className="setting">
                    <label>小文字を含める</label> 
                    <input type="checkbox" id="lowercase" checked={lower} onChange={(e) => lower ? setLower(false) : setLower(true)} />
                    <label htmlFor="lowercase"></label>
                </div>
                <div className="setting">
                    <label>数字を含める</label> 
                    <input type="checkbox" id="numbers" checked={number} onChange={(e) => number ? setNumber(false) : setNumber(true)} />
                    <label htmlFor="numbers"></label>
                </div>
                <div className="setting">
                    <label>記号を含める</label> 
                    <input type="checkbox" id="symbols" checked={symbol} onChange={(e) => symbol ? setSymbol(false) : setSymbol(true)} />
                    <label htmlFor="symbols"></label>
                </div>
            </div>
            <button className="btn btn-large" id="generate" onClick={() => generateEvent()}>
                パスワードを生成
            </button>
        </div>
    </Nav>
  );
}


const content1 = parseInt("&#9825;", 16);
// const content2 = "\2713";

const style = 
<style jsx>{`



@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');

.pwg {
    width: 90%;
    max-width: 460px;
    margin: 0 auto;
    font-family: 'Noto Sans JP', sans-serif;
}

.result-container {
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1.25rem;
    border: 1px solid #333;
}

.result-container #result {
    padding: 0 0.25rem;
}

.result-container .btn {
    background: #333;
    border: 0px solid #333;
    color: white;
    font-size: 1.25rem;
    display: block;
    margin: 0;
    padding: 0.5rem;
}

.settings {
    width: 100%;
    margin: 0 auto;
}

.setting {
    margin: 1.25rem 0;
    font-size: 1.15rem;
}

input[type="number"] {
    float: right;
    margin: 0;
    padding: 0;
    border: 1px #333 solid;
    padding: 0.5rem;
}

input[type="checkbox"] {
    float: right;
}

input[type="checkbox"] + label:before {
    float: right;
    border: 1px solid #333;
    content: ${content1};
    font: 16px/1em sans-serif;
    height: 16px;
    padding: 0;
    margin: 0;
    vertical-align: top;
    width: 16px;
}

input[type="checkbox"]:checked + label:before {
    background: #fff;
    color: #333;
    text-align: center;
}

input[type="checkbox"]:checked + label:after {
    font-weight: bold;
}

#generate {
    background: white;
    border: 2px #333 solid;
    padding: 0.5rem;
    font-size: 1.25rem;
    font-weight: 700;
}



`}
</style>

export default App;
