import React from "react";
import CadastroButton from "../components/CadastroButton";
import BuscarButton from "../components/BuscarButton";
import CadastroModal from "../components/CadastroModal";
import { ArticlesContainer, Title, Paragraph } from "../components/ArticlesStyles";

const CardapioList = () => {
    return (
        <ArticlesContainer>
            <Title>Gerenciar</Title>
            <Paragraph>Cadastrar Produto</Paragraph>
            <CadastroButton />
            <Paragraph>Pesquisar Produto</Paragraph>
            <BuscarButton />
            <Paragraph>Atualizar Produto</Paragraph>
            <CadastroButton />
            <Paragraph>Excluir Produto</Paragraph>
            <CadastroButton />
        </ArticlesContainer>
    );
};

export default CardapioList;