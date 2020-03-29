import React, { useState } from 'react';
import api from '../services/api';
import { useHistory } from 'react-router-dom';
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
import Profile from './Profile';

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

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile');
        } catch (err) {
            alert('Não foi possível criar o caso. Tente novamente.')
        }
    }

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
                    <form onSubmit={handleSubmit}>
                        <FormRow>
                            <Input type="text"
                                placeholder="Título do caso"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                        </FormRow>
                        <FormRow>
                            <Textarea rows="5"
                                cols="30"
                                placeholder="Descrição"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)} />
                        </FormRow>
                        <FormRow>
                            <Input type="text"
                                placeholder="Valor em Reais (R$)"
                                value={value}
                                onChange={(e) => setValue(e.target.value)} />
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