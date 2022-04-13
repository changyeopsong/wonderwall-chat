import React from 'react';
import styled, {FlattenSimpleInterpolation} from 'styled-components';
import {Story} from '@storybook/react';

import {Color, FontScale} from '_design';

export default {
    title: 'Typography'
};

const Typography: Story<{text: string}> = ({text}) => (
    <Container>
        <TypographyRow fontScale={FontScale.Headline1}>
            <div className='title'>{text}</div>
            <div className='card'>
                <div className='spec'>
                    font-size: 3.25rem;
                    <br />
                    font-weight: bold;
                    <br />
                    letter-spacing: -0.5px;
                    <br />
                    line-height: 150%;
                </div>
                <div className='name'>Headline 1</div>
            </div>
        </TypographyRow>

        <TypographyRow fontScale={FontScale.Headline2}>
            <div className='title'>{text}</div>
            <div className='card'>
                <div className='spec'>
                    font-size: 2.5rem;
                    <br />
                    font-weight: bold;
                    <br />
                    letter-spacing: -0.5px;
                    <br />
                    line-height: 150%;
                </div>
                <div className='name'>Headline 2</div>
            </div>
        </TypographyRow>

        <TypographyRow fontScale={FontScale.Headline3}>
            <div className='title'>{text}</div>
            <div className='card'>
                <div className='spec'>
                    font-size: 2rem;
                    <br />
                    font-weight: bold;
                    <br />
                    letter-spacing: -0.5px;
                    <br />
                    line-height: 150%;
                </div>
                <div className='name'>Headline 3</div>
            </div>
        </TypographyRow>

        <TypographyRow fontScale={FontScale.Headline4}>
            <div className='title'>{text}</div>
            <div className='card'>
                <div className='spec'>
                    font-size: 1.5rem;
                    <br />
                    font-weight: bold;
                    <br />
                    letter-spacing: -0.5px;
                    <br />
                    line-height: 150%;
                </div>
                <div className='name'>Headline 4</div>
            </div>
        </TypographyRow>

        <TypographyRow fontScale={FontScale.Subtitle1}>
            <div className='title'>{text}</div>
            <div className='card'>
                <div className='spec'>
                    font-size: 1rem;
                    <br />
                    font-weight: 500;
                    <br />
                    letter-spacing: -0.5px;
                    <br />
                    line-height: 150%;
                </div>
                <div className='name'>Subtitle 1</div>
            </div>
        </TypographyRow>

        <TypographyRow fontScale={FontScale.Subtitle2}>
            <div className='title'>{text}</div>
            <div className='card'>
                <div className='spec'>
                    font-size: 0.875rem;
                    <br />
                    font-weight: normal;
                    <br />
                    letter-spacing: -0.5px;
                    <br />
                    line-height: 150%;
                </div>
                <div className='name'>Subtitle 2</div>
            </div>
        </TypographyRow>

        <TypographyRow fontScale={FontScale.Body1}>
            <div className='title'>{text}</div>
            <div className='card'>
                <div className='spec'>
                    font-size: 0.875rem;
                    <br />
                    font-weight: bold;
                    <br />
                    letter-spacing: -0.5px;
                    <br />
                    line-height: 200%;
                </div>
                <div className='name'>Body 1</div>
            </div>
        </TypographyRow>

        <TypographyRow fontScale={FontScale.Body2}>
            <div className='title'>{text}</div>
            <div className='card'>
                <div className='spec'>
                    font-size: 0.75rem;
                    <br />
                    font-weight: normal;
                    <br />
                    letter-spacing: -0.5px;
                    <br />
                    line-height: 200%;
                </div>
                <div className='name'>Body 2</div>
            </div>
        </TypographyRow>

        <TypographyRow fontScale={FontScale.Button}>
            <div className='title'>{text}</div>
            <div className='card'>
                <div className='spec'>
                    font-size: 1.125rem;
                    <br />
                    font-weight: bold;
                    <br />
                    letter-spacing: -0.5px;
                </div>
                <div className='name'>Button</div>
            </div>
        </TypographyRow>
    </Container>
);

export const Korean = Typography.bind({});
Korean.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/RjH0jKr4Ga4D5IJxUsbjwW/Wonderwall-Design-System-Component?node-id=433%3A228'
    }
};
Korean.args = {
    text: '예술이 인생을 변화시킨다.'
};

export const English = Typography.bind({});
English.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/RjH0jKr4Ga4D5IJxUsbjwW/Wonderwall-Design-System-Component?node-id=351%3A248'
    }
};
English.args = {
    text: 'Art Changes Life'
};

const Container = styled.main`
    padding: 2.5rem 5rem;
`;

const TypographyRow = styled.div<{fontScale: FlattenSimpleInterpolation}>`
    .title {
        ${({fontScale}) => fontScale}
    }

    .card {
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        margin-top: 1.5rem;
        margin-bottom: 3rem;
        background-color: ${Color.Grey4};

        .spec {
            font-family: Noto Sans KR, serif;
            font-size: 1.125rem;
            letter-spacing: -0.5px;
            line-height: 2rem;
            opacity: 0.7;
        }

        .name {
            color: ${Color.Orange};
        }
    }
`;
