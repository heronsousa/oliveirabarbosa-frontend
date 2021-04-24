import { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';

import Input from './../../shared/Input/index';
import { Container } from '../../../styles/container';
import { Row, ContactContainer, Info, ContactForm } from './styles';
import Textarea from 'components/shared/Textarea';

export default function Contact() {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(() => {}, []);

    return (
        <ContactContainer>
            <Container>
                <Info>
                    <h2>E-mail:</h2>
                    <span>OliveiraAdvogados@meusite.com</span>

                    <h2>Endereço:</h2>
                    <span>Coworkee - SMA, Conjunto B, Loja 19 Gama, Brasília/DF.</span>

                    <h2>Telefone:</h2>
                    <span>(61) 98483-7473</span>
                </Info>

                <ContactForm ref={formRef} onSubmit={handleSubmit}>
                    <h1>CONTATO</h1>
                    <p>Deixe-nos uma mensagem e entraremos em contato</p>

                    <Row>
                        <Input
                            name="name"
                            type="text"
                            placeholder="Nome"
                        />
                        <Input
                            name="last"
                            type="text"
                            placeholder="Sobrenome"
                        />
                    </Row>
                    <Input
                        name="email"
                        type="text"
                        placeholder="E-mail"
                    />
                    <Row>
                        <Input
                            name="phone"
                            type="text"
                            placeholder="Telefone"
                        />
                        <Input
                            name="subject"
                            type="text"
                            placeholder="Assunto"
                        />
                    </Row>
                    <Textarea
                        name="message"
                        placeholder="Mensagem"
                        rows={5}
                    />

                    <button>Enviar</button>
                </ContactForm>
            </Container>
        </ContactContainer>
    );
}
