import styled from "styled-components";

export const Header = styled.section`
    width:100%;
    heigth:12rem;
    background:#084d6e;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Menu = styled.ul`
    color:#fff;
    display:flex;
    gap: 2rem;
    justify-content: center;
    margin-bottom: 1rem;
    height:2rem;
    align-items: end;
    margin-button:1rem;

    li{
        list-style-type: none;
    }
    a{
        color:#ffff;
        text-decoration:none;
    }
    a:hover{
        color:#708090
    }
`
export const Titulo = styled.h1`
    color:#fff;
    margin-top:5rem;
`