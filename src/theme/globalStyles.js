import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
html{
    box-sizing: border-box;
}
body{
    padding: 0;
    margin: 0;
    background-color: rgb(179, 197, 206);
}
body #root{
    /* position: relative; */
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
}
*,*::after,*::before{
   box-sizing: inherit; 
}
* img{
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
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
button{
    padding: 5px;
    color: whitesmoke;
    background-color: rgb(179, 197, 206);
    border-radius: 5px;
    border: solid 2px whitesmoke;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}
main{
   width: 90%;
}
`
export default GlobalStyle;