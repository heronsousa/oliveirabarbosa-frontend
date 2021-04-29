import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
    TextareaHTMLAttributes,
} from 'react';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
}

export default function Textarea({ name, ...rest }: TextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const { fieldName, defaultValue, error, registerField } = useField(name);

    const handleTextareaBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!textareaRef.current?.value);
    }, []);

    const handleTextareaFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: textareaRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
    <Container
        isErrored={!!error}
        isFocused={isFocused}
        isFilled={isFilled}
    >
        <textarea
            onFocus={handleTextareaFocus}
            onBlur={handleTextareaBlur}
            defaultValue={defaultValue}
            ref={textareaRef}
            {...rest}
        />

        {error && (
            <Error title={error}>
                {/* <FiAlertCircle color="#c53030" size={20} /> */}
            </Error>
        )}
    </Container>
    );
};
