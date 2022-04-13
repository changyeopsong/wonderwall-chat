import React from 'react';
import {Story} from '@storybook/react';
import styled from 'styled-components';

import {Color, FontScale} from '_design';

export default {
    title: 'Color'
};

export const Colors: Story = () => (
    <Container>
        <ColorRow backgroundColor={Color.Orange}>
            <div className='left'>
                <div>Wonderwall Orange</div>
                <div className='color'>Orange</div>
            </div>
            <div className='right'>
                <div>{Color.Orange}</div>
                <div>C 0 M 70 Y 100 K 0</div>
            </div>
        </ColorRow>

        <ColorRow backgroundColor={Color.Purple}>
            <div className='left'>
                <div>Wonderwall Purple</div>
                <div className='color'>Purple</div>
            </div>
            <div className='right'>
                <div>{Color.Purple}</div>
                <div>C 0 M 0 Y 0 K 100</div>
            </div>
        </ColorRow>

        <ColorRow backgroundColor={Color.Gold}>
            <div className='left'>
                <div>Wonderwall Gold</div>
                <div className='color'>Gold</div>
            </div>
            <div className='right'>
                <div>{Color.Gold}</div>
                <div>C 0 M 0 Y 0 K 100</div>
            </div>
        </ColorRow>

        <ColorRow backgroundColor={Color.Yellow}>
            <div className='left'>
                <div>Wonderwall Yellow</div>
                <div className='color'>Yellow</div>
            </div>
            <div className='right'>
                <div>{Color.Yellow}</div>
                <div>C 0 M 0 Y 0 K 100</div>
            </div>
        </ColorRow>

        <ColorRow backgroundColor={Color.Black} style={{border: `1px solid ${Color.Grey3}`, marginTop: '5rem'}}>
            <div className='left'>
                <div>Wonderwall Black</div>
                <div className='color'>Black</div>
            </div>
            <div className='right'>
                <div>{Color.Black}</div>
                <div>C 0 M 0 Y 0 K 100</div>
            </div>
        </ColorRow>

        <ColorRow backgroundColor={Color.Grey5}>
            <div className='left'>
                <div>Wonderwall Grey5</div>
                <div className='color'>Grey5</div>
            </div>
            <div className='right'>
                <div>{Color.Grey5}</div>
                <div>C 0 M 0 Y 0 K 91</div>
            </div>
        </ColorRow>

        <ColorRow backgroundColor={Color.Grey4}>
            <div className='left'>
                <div>Wonderwall Grey4</div>
                <div className='color'>Grey4</div>
            </div>
            <div className='right'>
                <div>{Color.Grey4}</div>
                <div>C 0 M 0 Y 0 K 80</div>
            </div>
        </ColorRow>

        <ColorRow backgroundColor={Color.Grey3}>
            <div className='left'>
                <div>Wonderwall Grey3</div>
                <div className='color'>Grey3</div>
            </div>
            <div className='right'>
                <div>{Color.Grey3}</div>
                <div>C 0 M 0 Y 0 K 62</div>
            </div>
        </ColorRow>

        <ColorRow backgroundColor={Color.Grey2}>
            <div className='left'>
                <div>Wonderwall Grey2</div>
                <div className='color'>Grey2</div>
            </div>
            <div className='right'>
                <div>{Color.Grey2}</div>
                <br />
            </div>
        </ColorRow>

        <ColorRow backgroundColor={Color.Grey1} fontColor={Color.Grey3}>
            <div className='left'>
                <div>Wonderwall Grey1</div>
                <div className='color'>Grey1</div>
            </div>
            <div className='right'>
                <div>{Color.Grey1}</div>
                <br />
            </div>
        </ColorRow>

        <ColorRow backgroundColor={Color.White} fontColor={Color.Grey3}>
            <div className='left'>
                <div>Wonderwall White</div>
                <div className='color'>White</div>
            </div>
            <div className='right'>
                <div>{Color.White}</div>
                <div>C 0 M 0 Y 0 K 0</div>
            </div>
        </ColorRow>
    </Container>
);

Colors.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/RjH0jKr4Ga4D5IJxUsbjwW/Wonderwall-Design-System-Component?node-id=354%3A183'
    }
};

const Container = styled.main`
    padding: 2.5rem 5rem;
`;

const ColorRow = styled.section<{backgroundColor: string; fontColor?: string}>`
    ${FontScale.Button}
    display: flex;
    height: 4rem;
    align-items: center;
    justify-content: space-between;
    padding: 1.125rem 3.75rem;
    margin-bottom: 0.75rem;
    background-color: ${({backgroundColor}) => backgroundColor};
    color: ${({fontColor}) => (fontColor ? fontColor : Color.White)};
    font-family: Noto Sans KR, serif;
    line-height: 2rem;

    .left {
        .color {
            font-weight: 300;
        }
    }

    .right {
        font-weight: 300;
        text-align: end;
    }
`;
