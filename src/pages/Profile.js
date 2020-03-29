import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../helpers/mixins/forms'
import { FiPower } from 'react-icons/fi';
import { pallete } from '../helpers/variables';
import Incident from '../components/Incident';
import {
    PageWrapper,
    Container,
    DefaultTitle
} from '../helpers/mixins';

import logo from '../assets/logo.svg';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;   
    padding-top: 2rem; 
    margin-bottom: 3rem;
`;

const StyledFiPower = styled(FiPower)`
    padding-right: 5px;
    padding-left: 5px;
`;

const StyledLink = styled(Link)`
    margin-left:5px;
`;

const WelcomeDiv = styled.div`
    display: flex;
    align-items: center;
`;

const WelcomeMessage = styled.span`
    margin-left: 10px;
`;

const IncidentList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    list-style:none;
    padding: 0;
`;

function Profile() {
    return (
        <PageWrapper>
            <Container full>
                <StyledHeader>
                    <WelcomeDiv>
                        <img src={logo} alt="Be the hero" />
                        <WelcomeMessage>
                            Bem vinda, APAD
                        </WelcomeMessage>
                    </WelcomeDiv>
                    <div>
                        <Link to="/incidents/new">
                            <Button primary>Cadastrar novo caso</Button>
                        </Link>
                        <StyledLink to='/'>
                            <Button title="Logout">
                                <StyledFiPower size={16} color={pallete.red} />
                            </Button>
                        </StyledLink>
                    </div>
                </StyledHeader>

                <DefaultTitle> Casos Cadastrados </DefaultTitle>

                <IncidentList>
                    <Incident title="test" description="Lorem ipsum dolor sit amet" value="200" />
                    <Incident title="test" description="Lorem ipsum dolor sit amet" value="200" />
                    <Incident title="test" description="Lorem ipsum dolor sit amet" value="200" />
                    <Incident title="test" description="Lorem ipsum dolor sit amet" value="200" />
                    <Incident title="test" description="Lorem ipsum dolor sit amet" value="200" />
                    <Incident title="test" description="Lorem ipsum dolor sit amet" value="200" />
                    <Incident title="test" description="Lorem ipsum dolor sit amet" value="200" />
                </IncidentList>
            </Container>
        </PageWrapper>
    )
}

export default Profile;