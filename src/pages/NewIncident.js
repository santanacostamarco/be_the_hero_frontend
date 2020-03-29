import React from 'react';
import {
    PageWrapper,
    Container,
    DefaultTitle,
    StyledLink
} from '../helpers/mixins/index';

import {
    FormRow,
    Input,
    Button,
    Textarea
} from '../helpers/mixins/forms';

import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';
import Logo from '../components/Logo';
import { pallete } from '../helpers/variables'

const StyledFiArrowLeft = styled(FiArrowLeft)`
    margin-right: 10px;
`;

const StyledSection = styled.section`
    padding: 25px;
`;

const StyledParagraph = styled.p`
    font-size: 18px;
    color: #737380;
    margin-bottom: 40px;
`;

function NewIncident() {
    return (
        <PageWrapper vCenter>
            <Container flex shadow>
                <StyledSection>
                    <Logo />
                    <DefaultTitle> Cadatrar novo caso </DefaultTitle>
                    <StyledParagraph>
                        Descreva o caso detalhadamente para <br />
                        para encontrar um herói para resolver isso.
                    </StyledParagraph>
                    <StyledLink to="/profile">
                        <StyledFiArrowLeft size={16} color={pallete.red} />
                        Voltar
                    </StyledLink>
                </StyledSection>
                <StyledSection>
                    <form action="#." method="POST">
                        <FormRow>
                            <Input type="text" placeholder="Título do caso" />
                        </FormRow>
                        <FormRow>
                            <Textarea rows="5" cols="30" placeholder="Descrição" />
                        </FormRow>
                        <FormRow>
                            <Input type="text" placeholder="Valor em Reais (R$)" />
                        </FormRow>
                        <FormRow>
                            <Button type="reset" maxWidth='120px'> Cancelar </Button>
                            <Button type="submit" primary> Cadastrar </Button>
                        </FormRow>
                    </form>
                </StyledSection>
            </Container>
        </PageWrapper>
    )
}

export default NewIncident;