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
    Button
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

function Register() {
    return (
        <PageWrapper vCenter>
            <Container flex shadow>
                <StyledSection>
                    <Logo />
                    <DefaultTitle> Cadatre-se </DefaultTitle>
                    <StyledParagraph>
                        Faça seu cadatro, entre na plataforma e ajude <br />
                        pessoas a encontrarem casos da sua ONG.
                    </StyledParagraph>
                    <StyledLink to="/">
                        <StyledFiArrowLeft size={16} color={pallete.red} />
                        Já tenho um cadastro
                    </StyledLink>
                </StyledSection>
                <StyledSection>
                    <form action="#." method="POST">
                        <FormRow>
                            <Input type="text" placeholder="Nome da ONG" />
                        </FormRow>
                        <FormRow>
                            <Input type="email" placeholder="E-mail" />
                        </FormRow>
                        <FormRow>
                            <Input type="tel" placeholder="WhatsApp" />
                        </FormRow>
                        <FormRow>
                            <Input type="text" placeholder="Cidade" />
                            <Input type="text" placeholder="UF" maxWidth="40px" />
                        </FormRow>
                        <FormRow>
                            <Button type="submit" primary> Cadastrar </Button>
                        </FormRow>
                    </form>
                </StyledSection>
            </Container>
        </PageWrapper>
    )
}

export default Register;