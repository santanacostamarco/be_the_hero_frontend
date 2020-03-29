import React, { useState } from 'react';
import api from '../services/api';
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

import { useHistory } from 'react-router-dom';

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

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (err) {
            alert('Erro ao criar novo cadastro');
        }
    }

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
                    <form onSubmit={handleSubmit}>
                        <FormRow>
                            <Input type="text"
                                placeholder="Nome da ONG"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                        </FormRow>
                        <FormRow>
                            <Input type="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </FormRow>
                        <FormRow>
                            <Input type="tel"
                                placeholder="WhatsApp"
                                value={whatsapp}
                                onChange={e => setWhatsapp(e.target.value)} />
                        </FormRow>
                        <FormRow>
                            <Input type="text"
                                placeholder="Cidade"
                                value={city}
                                onChange={e => setCity(e.target.value)} />

                            <Input type="text"
                                placeholder="UF"
                                maxWidth="40px"
                                value={uf}
                                onChange={e => setUf(e.target.value)} />
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