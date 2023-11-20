import React from "react";
import CadastroButton from "../components/CadastroButton";
import BuscarButton from "../components/BuscarButton";
import CadastroModal from "../components/CadastroModal";
import AtualizaModal from "../components/AtualizaModal";
import { ArticlesContainer, Title, Paragraph } from "../components/ArticlesStyles";
import AtualizaButton from "../components/AtualizaButton";

const CardapioList = () => {
    return (
        <ArticlesContainer>
            <Title>Gerenciar</Title>
            <Paragraph>Cadastrar Produto</Paragraph>
            <CadastroButton />
            <Paragraph>Pesquisar Produto</Paragraph>
            <BuscarButton />
            <Paragraph>Atualizar Produto</Paragraph>
            <AtualizaButton />
            <Paragraph>Excluir Produto</Paragraph>
            <CadastroButton />
        </ArticlesContainer>
    );
};

export default CardapioList;