import React from 'react';
import styled from "styled-components";

import Logo from './Logo';
import PowerButton from './PowerButton';


const LoaderStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};

    .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 10;
        width: 160px;
        height: 100px;
        margin-left: -80px;
        margin-top: -50px;
        border-radius: 5px;
        background: #1e3f57;
        background: black;
        animation: dot1_ 3s cubic-bezier(0.55,0.3,0.24,0.99) infinite;
    }

    .loader:nth-child(2) {
        z-index: 11;
        width: 150px;
        height: 90px;
        margin-top: -45px;
        margin-left: -75px;
        border-radius: 3px;
        background: #1e3f57;
        animation-name: dot2_;
    }

    .loader:nth-child(3) {
        z-index: 12;
        width: 40px;
        height: 20px;
        margin-top: 50px;
        margin-left: -20px;
        border-radius: 0 0 5px 5px;
        background: #61dafb;
        animation-name: dot3_;
    }

    @keyframes dot1_ {
        3%,97% {
            width: 160px;
            height: 100px;
            margin-top: -50px;
            margin-left: -80px;
        }

        30%,36% {
            width: 80px;
            height: 120px;
            margin-top: -60px;
            margin-left: -40px;
        }

        63%,69% {
            width: 40px;
            height: 80px;
            margin-top: -40px;
            margin-left: -20px;
        }
    }

    @keyframes dot2_ {
        3%,97% {
            height: 90px;
            width: 150px;
            margin-left: -75px;
            margin-top: -45px;
        }

        30%,36% {
            width: 70px;
            height: 96px;
            margin-left: -35px;
            margin-top: -48px;
        }

        63%,69% {
            width: 32px;
            height: 60px;
            margin-left: -16px;
            margin-top: -30px;
        }
    }

    @keyframes dot3_ {
        3%,97% {
            height: 20px;
            width: 40px;
            margin-left: -20px;
            margin-top: 50px;
        }

        30%,36% {
            width: 8px;
            height: 8px;
            margin-left: -5px;
            margin-top: 49px;
            border-radius: 8px;
        }

        63%,69% {
            width: 16px;
            height: 4px;
            margin-left: -8px;
            margin-top: -37px;
            border-radius: 10px;
        }

    }

    .loader2{
        position: fixed;
        top: 30%;
        left: 50%;
        transform: translate(-50%,0);

        .scanner span {
            color: transparent;
            font-size: 2rem;
            position: relative;
            overflow: hidden;
        }

        .scanner span::before {
            content: "Loading...";
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            border-right: 4px solid #61dafb;
            overflow: hidden;
            color: #17FEFF;
            animation: load91371 3s linear infinite;
        }

        @keyframes load91371 {
            0%, 10%, 100% {
                width: 0;
            }

            10%,20%,30%,40%,50%,60%,70%,80%,90%,100% {
                border-right-color: transparent;
            }

            11%,21%,31%,41%,51%,61%,71%,81%,91% {
                border-right-color: #17FEFF;
            }

            60%, 80% {
                width: 100%;
            }
        }
    }
`;

const Loader = () => {
    return (
        <LoaderStyled>
            <Logo theme='dark' />
            <PowerButton />
            <div className="loader2">
                <div className="scanner">
                    <span>Loading...</span>
                </div>
            </div>

            <div className="container">
                <div className="loader"></div>
                <div className="loader"></div>
                <div className="loader"></div>
            </div>
        </LoaderStyled>
    )
}

export default Loader