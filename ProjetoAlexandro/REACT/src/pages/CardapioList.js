import React from "react";
import CadastroButton from "../components/CadastroButton";
import Modal from "../components/modal";
import { ArticlesContainer, Title, Paragraph } from "../components/ArticlesStyles";

const CardapioList = () => {
    return (
        <ArticlesContainer>
            <Title>Cadastros</Title>
            <Paragraph>Cadastrar Produto</Paragraph>
            <CadastroButton />
            <Modal />
        </ArticlesContainer>
    );
};

export default CardapioList;