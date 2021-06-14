import React, {
    InputHTMLAttributes,
    useEffect,
    useRef,
    useState,
    useCallback,
} from 'react';
import { useField } from '@unform/core';
import InputMask from "react-input-mask";

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

export default function Input({ name, ...rest }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const { fieldName, defaultValue, error, registerField } = useField(name);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputRef.current?.value);
    }, []);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <Container
            isErrored={!!error}
            isFocused={isFocused}
            isFilled={isFilled}
        >
            <InputMask
                mask={name==='phone' ? "(99) 99999-9999" : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                defaultValue={defaultValue}
                {...rest}
            />

            {error && (
                <Error title={error}>
                    {/* <FiAlertCircle color="#c53030" size={20} /> */}
                </Error>
            )}
        </Container>
    );
}
