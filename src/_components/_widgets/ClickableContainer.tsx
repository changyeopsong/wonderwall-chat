import styled from 'styled-components';

const ClickableContainer = styled.div`
    .clickable {
        cursor: pointer;

        @media not all and (pointer: coarse), (-ms-high-contrast: none), (-ms-high-contrast: active) {
            &:hover {
                opacity: 0.8;
            }
        }
    }
`;

export default ClickableContainer;
