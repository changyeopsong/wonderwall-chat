import React, {FC, useCallback, useRef} from 'react';

export interface SubmitButtonProps {
    value: string;
    [others: string]: any;
}

const SubmitButton: FC<SubmitButtonProps> = ({value, ...others}) => {
    const submitRef = useRef<HTMLInputElement>(null);

    const onClick = useCallback(() => submitRef.current?.click(), []);

    return (
        <div onClick={onClick} {...others}>
            <input ref={submitRef} style={{display: 'none'}} type='submit' />
            {value}
        </div>
    );
};

export default SubmitButton;
