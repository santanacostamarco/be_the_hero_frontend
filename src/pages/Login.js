import React from 'react';
import styled from 'styled-components';
import { Container, Submit, Input } from '../helpers/mixins';
import logo from '../assets/logo.svg';
import heroes from '../assets/heroes.png';
import { FiLogIn } from 'react-icons/fi';
import { pallete } from '../helpers/variables';

const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const FlexContainer = styled(Container)`
    && {
        display: flex;
    }
`;

const VerticallyCentered = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ImgWrapper = styled.div`
    margin-bottom: 5rem;
`;

const LoginTitle = styled.h1`
    font-size: 1.5rem;
`;

const FormRow = styled.div`
    display: flex;
    flex-direction: column;
`;

const SignIn = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    color: #41414d;
    text-decoration: none;
`;

const SignInIcon = styled(FiLogIn)`
    margin-right: 10px;
`;

const HeroesImg = styled.img`
    margin: 20px;
`;

function Login() {
    return (
        <LoginWrapper>
            <FlexContainer>
                <VerticallyCentered>
                    <ImgWrapper>
                        <img src={logo} alt="Be the hero" />
                    </ImgWrapper>
                    <div>
                        <form>
                            <LoginTitle>Faça seu Login</LoginTitle>
                            <FormRow>
                                <Input type="text" placeholder="Seu ID" />
                                <Submit type="submit"> Entrar </Submit>
                            </FormRow>
                        </form>
                        <div>
                            <SignIn href="/register">
                                <SignInIcon size={16} color={pallete.red} />
                                <span>Não tenho cadastro</span>
                            </SignIn>
                        </div>
                    </div>
                </VerticallyCentered>
                <div>
                    <HeroesImg src={heroes} alt="Be a hero!" />
                </div>
            </FlexContainer>
        </LoginWrapper>
    )
}

export default Login;