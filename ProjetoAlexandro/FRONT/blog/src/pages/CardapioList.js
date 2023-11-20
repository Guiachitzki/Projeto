import React from "react";
import CadastroButton from "../components/CadastroButton";
import { ArticlesContainer, Title, Paragraph } from "../components/ArticlesStyles";
import AtualizaButton from "../components/AtualizaButton";
import ExcluirButton from "../components/ExcluirButton";

const CardapioList = () => {
    return (
        <ArticlesContainer>
            <Title>Gerenciar</Title>
            <Paragraph>Cadastrar Produto</Paragraph>
            <CadastroButton />
            <Paragraph>Atualizar Produto</Paragraph>
            <AtualizaButton />
            <Paragraph>Excluir Produto</Paragraph>
            <ExcluirButton />
        </ArticlesContainer>
    );
};

export default CardapioList;