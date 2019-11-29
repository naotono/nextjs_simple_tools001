import React, { useState } from 'react'
import Link from 'next/link'

const Nav = (props) => {
  const [ toggle, setToggle ] = useState(false)

  return (
    <main>
      {style}
        <header>
            <div className="navbar">
                <div className="logo"><a href="#"><Link href="/">こどうぐ</Link></a></div>
                <nav className={toggle ? "active" : ""}>
                    <ul>
                        <li><a href="#" className="active"><Link href="/">HOME</Link></a></li>
                        <li><a href="#"><Link href="/gentext">ダミー文生成</Link></a></li>
                        <li><a href="#"><Link href="/pwg">パスワード生成</Link></a></li>
                        <li><a href="#"><Link href="/markdown">マークダウン・エディター</Link></a></li>
                    </ul>
                </nav>
            </div>
            <div className="menu-toggle"><a style={{'font-size': '1.5rem'}} onClick={(e) => toggle ? setToggle(false) : setToggle(true)}>×</a></div>
        </header>


        <div className="container">
            
            <div className="contents">
                { props.children }
            </div>
            <div className="right">
                <div className="title">コンテンツ</div>
                <div className="list"><Link href="/gentext">ダミー文生成</Link></div>
                <div className="list"><Link href="/pwg">パスワード生成</Link></div>
                <div className="list"><Link href="/markdown">マークダウン・エディター</Link></div>
                
            </div>
            
        </div>
        <div className="footer">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquid. Fugit quas placeat provident officiis esse voluptate quibusdam, pariatur ex assumenda illo neque tempore obcaecati dolores, sed dolorem porro excepturi.
        </div>
    </main>
  )
}

const style = 
<style jsx>{`

@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
body {
    margin: 0;
    padding: 0;
    background: #fff(163, 163, 163);
    color: #333;
    font-family: 'Quicksand', sans-serif;
}


main {
    width: 90%;
    max-width: 960px;
    margin: 0 auto;
}


header {
    position: absolute;
    top: 0;
    left: 0;
    background: #262626;
    width: 100%;
    box-sizing: border-box;
}

.navbar {
    /* width: 90%; */
    max-width: 960px;
    margin: 0 auto;
}

header .logo {
    color: #fff;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    float: left;
    font-weight: bold;
    padding: 0 40px;
}

header .logo a {
    text-decoration: none;
    color: white;
}

header nav {
    float: right;
}

header nav ul {
    margin: 0;
    padding: 0;
    display: flex;
}

header nav ul li {
    list-style: none;
}

header nav ul li a {
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    color: #fff;
    text-decoration: none;
    display: block;
    font-size: 0.825rem;
}

header nav ul li a:hover,
header nav ul li a.active {
    color: #fff;
    background: #2195f3;
}

.menu-toggle{
    color: #fff;
    float: right;
    line-height: 50px;
    font-size: 24px;
    cursor: pointer;
    display: none;
    padding: 0 40px;
}

@media (max-width: 820px) {
    .menu-toggle {
        display: block;
    }
    header nav {
        position: absolute;
        width: 100%;
        height: calc(100vh - 50px);
        background: #333;
        top: 50px;
        left: -100%;
        transition: 0.5s;
    }

    header nav.active {
        left: 0;
    }

    header nav ul {
        display: block;
        text-align: center;
    }

    header nav ul li a {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
}













.container {
    display: flex;
    margin: 60px 0 0 0;
}

.contents {
    flex: 1;
}

.right {
    width: 300px;
    height: 200px;
    /* border: 1px solid orange; */
    
    margin: 10px;
    border: 1px  #333 solid;
}

.title {
    background: #333;
    color: white;
    padding: 10px;
}

.list {
    background: white;
    color: #333;
    padding: 10px;
}



.footer {
    display: flex;
    flex: 1;
    border: 1px solid #333;
    margin: 3rem 10px;
}



@media (max-width: 820px) {
    .container {
        flex-direction: column;
    }
    .right {
        width: auto;
        flex: 1;
    }
}

`}
</style>

export default Nav
