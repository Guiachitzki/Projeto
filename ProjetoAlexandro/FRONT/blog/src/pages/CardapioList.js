import React from "react";
import CadastroButton from "../components/CadastroButton";
import Modal from "../components/modal";
import { ArticlesContainer, Title, Paragraph } from "../components/ArticlesStyles";

const CardapioList = () => {
    return (
        <ArticlesContainer>
            <Title>Gerenciar</Title>
            <Paragraph>Cadastrar Produto</Paragraph>
            <CadastroButton />
            <Paragraph>Pesquisar Produto</Paragraph>
            <CadastroButton />
            <Paragraph>Atualizar Produto</Paragraph>
            <CadastroButton />
            <Paragraph>Excluir Produto</Paragraph>
            <CadastroButton />
        </ArticlesContainer>
    );
};

export default CardapioList;