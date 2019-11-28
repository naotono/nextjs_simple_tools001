import { useState } from 'react'
import marked from 'marked'
import Nav from '../components/nav'

const Markdown = () => {
  const [text, setText] = useState('')

  const getMarkdownText = () => {
    var rawMarkup = marked(text, {sanitize: true});
    return { __html: '<pre>' + rawMarkup + '</pre>' };
  }

  return (
    <React.Fragment>
      <Nav>
        <div className="markdown">
        { style }
        <h1>Markdown Editor</h1>
        <div className="explain">
            基本的な記述は全て搭載されております。
            <br/>
            # Heading 1 ... ###### Headng 6
            <br/>
            *Italick*
            <br/>
            **Bold**
        </div>
        <hr/>
        <textarea name="" id="" cols="30" rows="10" onChange={(e) => setText(e.target.value)}></textarea>
        <h3 className="arrow">⬇︎</h3>
        <div contenteditable='true' className="htmlResult" dangerouslySetInnerHTML={getMarkdownText()} />
      </div>
      </Nav>
    </React.Fragment>
  )
}

const style = 
<style jsx>{`


h1 {
    font-size: 3rem;
  }
  
  .markdown {
    width: 90%;
    max-width: 700px;
    margin: 0 auto;
    display: block;
  }
  
  textarea {
    width: 100%;
    height: 300px;
    border: 1px solid #333;
  }

  .htmlResult {
    width: 100%;
  }
  
  .arrow {
    font-size: 2rem;
    margin: 2rem auto;
    text-align: center;
  }
  
  .explain {
    color: rgb(155, 155, 155);
  }

`}
</style>

export default Markdown