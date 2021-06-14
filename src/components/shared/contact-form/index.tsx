import { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import Image from 'next/image';
import Swal from 'sweetalert2'

import { Row, ContactFormContainer } from './styles';
import Textarea from '../../shared/form-textarea';
import Input from '../../shared/form-input';

interface ContactFormProps {
    title: string;
}

export default function ContactForm( { title }: ContactFormProps ) {
    const formRef = useRef<FormHandles>(null);
    const [isSendingEmail, setIsSendingEmail] = useState(false);


    const handleSubmit = useCallback(async(data) => {
        setIsSendingEmail(true);

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Mensagem enviada com sucesso'
            })

            setIsSendingEmail(false);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return(
        <ContactFormContainer ref={formRef} onSubmit={handleSubmit}>
            <h1>{title}</h1>
            <p>Deixe-nos uma mensagem e entraremos em contato</p>

            <Input
                name="name"
                type="text"
                placeholder="Nome completo"
            />
            <Row>
                <Input
                    name="email"
                    type="text"
                    placeholder="E-mail"
                />
                <Input
                    name="phone"
                    type="text"
                    placeholder="Telefone"
                />
            </Row>
            <Input
                name="subject"
                type="text"
                placeholder="Assunto"
            />
            <Textarea
                name="message"
                placeholder="Mensagem"
                rows={5}
            />

            <button>
                { isSendingEmail ?
                    <Image
                        src="/spinner.gif"
                        width={25}
                        height={25}
                    />
                    :
                    <>Enviar</>
                }
            </button>
        </ContactFormContainer>
    );
}
