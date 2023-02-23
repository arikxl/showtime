import { createGlobalStyle } from 'styled-components'



const GlobalStyle = createGlobalStyle`
    *,*::before,*::after,h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;

    }
    h1,h2,h3,h4,h5,h6{
        display: inline-block;
    }

    body{
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        /* font-family: 'Source Sans Pro', sans-serif; */
        font-family: -apple-system, BlinkMacSystemFont,  'Source Sans Pro', sans-serif;
        -webkit-font-smoothing: antialiased; 
        -moz-osx-font-smoothing: grayscale;  

        /* background-color: #282c34;
        color: #61dafb; */

    }
    ::selection{
        background-color: #61dafb;
        color: #282c34;
    }
`;


export default GlobalStyle;