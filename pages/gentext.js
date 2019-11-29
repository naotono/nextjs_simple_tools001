import React, { useState, useEffect } from 'react'
import Nav from '../components/nav'

const genText = () => {
  const [value, setValue] = useState('')
  const [content, setContent]= useState('')
  const [radio, setRadio] = useState('')
  const [length, setLength] = useState(100)

  const putText = (file) => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                const result = allText.slice(0, length)
                setContent(result)
            }
        }
    }
    rawFile.send(null);
  }

  useEffect(() => {
    putText(`text/${value}.txt`)
  }, [value, length])

  return (
      <Nav>
        {style}
    <div>
      <input type="number" value={length} onChange={(e) => setLength(e.target.value)}/>
      <form onChange={(e) => setValue(e.target.value)}>
        <div>
          <label>
          <input type="radio" value="rashomon" checked={radio === 'rashomon'} onChange={(e) => setRadio(e.target.value)}/>
          羅生門
          </label>
        </div>
        <div>
          <label>
          <input type="radio" value="kokoro" checked={radio === 'kokoro'} onChange={(e) => setRadio(e.target.value)}/>
          こころ
          </label>
        </div>
        <div>
          <label>
          <input type="radio" value="maihime" checked={radio === 'maihime'} onChange={(e) => setRadio(e.target.value)}/>
          舞姫
          </label>  
        </div>
      </form>
      <br/>
      <textarea value={content} cols="70" rows="20"></textarea>
    </div>
    </Nav>
  )
}

const style =
<style jsx>{`

textarea {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}

`}
</style>

export default genText
