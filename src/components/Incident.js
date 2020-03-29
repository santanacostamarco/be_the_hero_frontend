import React from 'react';
import styled from 'styled-components';
import { Button } from '../helpers/mixins/forms';
import { FiTrash2 } from 'react-icons/fi';
import { colors, pallete } from '../helpers/variables';

const IncidentCard = styled.li`
    background-color: #fff;
    border-radius: 8px;
    padding: 10px 15px;
    position: relative;

    strong {
        color: ${pallete.darkGray};
        text-transform: uppercase;
        padding-top: 10px;
        display: block;
    }

    p {
        color: ${pallete.semiDarkGray};
    }
`;

const StyledButton = styled(Button)`
    position: absolute;
    top: 20px;
    right: 20px;
`;

function Incident({ title, description, value }) {
    return (
        <IncidentCard>
            <strong>
                Caso:
            </strong>
            <p>
                {title}
            </p>
            <strong>
                Descrição:
            </strong>
            <p>
                {description}
            </p>
            <strong>
                Valor:
            </strong>
            <p>
                {value}
            </p>
            <StyledButton link title="Excluir caso">
                <FiTrash2 size={20} color={pallete.gray} />
            </StyledButton>
        </IncidentCard>
    )
}

export default Incident;