export type ButtonType = 'white' | 'orange' | 'grey' | 'outline' | 'floatingWhite' | 'floatingOrange' | 'unclick';

interface ButtonSizeStyle {
    padding?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    width?: string;
}

export interface ButtonProps extends ButtonSizeStyle {
    className?: string;
    type?: ButtonType;
    disable?: boolean;
    inactive?: boolean;
    onClick?: () => void;
}

export interface ButtonContainerProps extends ButtonSizeStyle {
    type: ButtonType;
    disable: boolean;
    inactive: boolean;
}
