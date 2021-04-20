import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
html{
    box-sizing: border-box;
}
body{
    padding: 0;
    margin: 0;
    background-color: rgb(13 24 161 / 38%);
}
body #root{
    position: relative;
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    overflow:hidden;
}
body #root #tsparticles{
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index: -1;
    width:100vw;
    height:100vh;
    margin-top:10px;
    padding:0px;
    & canvas{
        width:100%;
        height:100%;
    }
    @media(max-width:800px){
        display:none;
    }
}
}

*,*::after,*::before{
   box-sizing: inherit; 
}
* img{
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
}
h1{
    text-transform:capitalize;
}
input{
    width: 100%;
    border: none;
    border-radius: 5px;
    outline: none;
    border: solid 2px whitesmoke;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
    padding: 5px;
}
a{
    color:white;
    transition: all 300ms;
}
button{
    padding: 5px;
    color: whitesmoke;
    background: rgba(255, 255, 255,0.1);
    border-radius: 5px;
    border: solid 2px whitesmoke;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    outline:none;
}
main{
   width: 90%;
}
`
export default GlobalStyle;