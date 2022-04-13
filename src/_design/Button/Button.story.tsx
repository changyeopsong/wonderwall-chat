import React from 'react';
import {Story, Meta} from '@storybook/react';
import {withDesign} from 'storybook-addon-designs';

import Button from './Button';
import {ButtonProps} from './types';

export default {
    component: Button,
    title: 'Button',
    decorators: [withDesign]
} as Meta;

const Template: Story<ButtonProps> = args => (
    <div>
        <Button width='20rem' {...args}>
            BUTTON
        </Button>
        <br />
        <Button disable={true} width='20rem' {...args}>
            BUTTON
        </Button>
    </div>
);

export const WHITE = Template.bind({});
WHITE.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/RjH0jKr4Ga4D5IJxUsbjwW/Wonderwall-Design-System-Component?node-id=439%3A260'
    }
};

export const ORANGE = Template.bind({});
ORANGE.args = {type: 'orange'};
ORANGE.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/RjH0jKr4Ga4D5IJxUsbjwW/Wonderwall-Design-System-Component?node-id=439%3A268'
    }
};

export const GREY = Template.bind({});
GREY.args = {type: 'grey'};
GREY.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/RjH0jKr4Ga4D5IJxUsbjwW/Wonderwall-Design-System-Component?node-id=439%3A272'
    }
};

export const OUTLINE = Template.bind({});
OUTLINE.args = {type: 'outline'};
OUTLINE.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/RjH0jKr4Ga4D5IJxUsbjwW/Wonderwall-Design-System-Component?node-id=439%3A284'
    }
};

export const FLOATING_WHITE = Template.bind({});
FLOATING_WHITE.args = {type: 'floatingWhite'};
FLOATING_WHITE.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/RjH0jKr4Ga4D5IJxUsbjwW/Wonderwall-Design-System-Component?node-id=439%3A285'
    }
};

export const FLOATING_ORANGE = Template.bind({});
FLOATING_ORANGE.args = {type: 'floatingOrange'};
FLOATING_ORANGE.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/RjH0jKr4Ga4D5IJxUsbjwW/Wonderwall-Design-System-Component?node-id=439%3A293'
    }
};

export const UNCLICK = Template.bind({});
UNCLICK.args = {type: 'unclick'};
UNCLICK.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/RjH0jKr4Ga4D5IJxUsbjwW/Wonderwall-Design-System-Component?node-id=439%3A283'
    }
};
