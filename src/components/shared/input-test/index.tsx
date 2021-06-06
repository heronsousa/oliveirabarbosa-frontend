import React, {
    InputHTMLAttributes,
    useEffect,
    useRef,
    useState,
    useCallback,
} from 'react';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

export default function InputTest() {
    return (
        <h1>InputTest</h1>
    );
}
