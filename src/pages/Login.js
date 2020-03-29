import React, { useState } from 'react';
import api from '../services/api';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import {
    Container,
    DefaultTitle,
    PageWrapper,
    StyledLink
} from '../helpers/mixins/index';

import {
    Input,
    Button,
    FormRow
} from '../helpers/mixins/forms';

import heroes from '../assets/heroes.png';
import { FiLogIn } from 'react-icons/fi';
import { pallete } from '../helpers/variables';
import Logo from '../components/Logo';

const VerticallyCentered = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledFiLogIn = styled(FiLogIn)`
    margin-right: 10px;
`;

const HeroesImg = styled.img`
    margin: 20px;
`;

function Login() {
    const history = useHistory();

    const [id, setId] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('session', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile')
        } catch (err) {
            alert("Falha ao tentar fazer login");
        }
    }

    return (
        <PageWrapper vCenter>
            <Container flex>
                <VerticallyCentered>
                    <Logo />
                    <div>
                        <form onSubmit={handleSubmit}>
                            <DefaultTitle>Faça seu Login</DefaultTitle>
                            <FormRow>
                                <Input type="text"
                                    placeholder="Seu ID"
                                    value={id}
                                    onChange={e => setId(e.target.value)} />
                            </FormRow>
                            <FormRow>
                                <Button type="submit" primary> Entrar </Button>
                            </FormRow>
                        </form>
                        <div>
                            <StyledLink to="/register">
                                <StyledFiLogIn size={16} color={pallete.red} />
                                <span>Não tenho cadastro</span>
                            </StyledLink>
                        </div>
                    </div>
                </VerticallyCentered>
                <div>
                    <HeroesImg src={heroes} alt="Be a hero!" />
                </div>
            </Container>
        </PageWrapper>
    )
}

export default Login;