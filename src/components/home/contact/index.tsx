import { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import Image from 'next/image';

import { Container } from '../../../styles/container';
import { Row, ContactContainer, Info, ContactForm } from './styles';
import TextareaTest from '../../shared/textarea';
import InputTest from './../../shared/input';

export default function Contact() {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async(data) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        } catch (error) {

        }
    }, []);

    return (
        <>
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
                            <InputTest
                                // name="name"
                                // type="text"
                                // placeholder="Nome"
                            />
                            <InputTest
                                // name="last"
                                // type="text"
                                // placeholder="Sobrenome"
                            />
                        </Row>
                        <InputTest
                            // name="email"
                            // type="text"
                            // placeholder="E-mail"
                        />
                        <Row>
                            <InputTest
                                // name="phone"
                                // type="text"
                                // placeholder="Telefone"
                            />
                            <InputTest
                                // name="subject"
                                // type="text"
                                // placeholder="Assunto"
                            />
                        </Row>
                        <TextareaTest
                            // name="message"
                            // placeholder="Mensagem"
                            // rows={5}
                        />

                        <button>Enviar</button>
                    </ContactForm>
                </Container>
            </ContactContainer>

            <Row>
                <Image
                    src="/coworkee.webp"
                    width={500}
                    height={300}
                />
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.3648777541466!2d-48.05745288562252!3d-15.994510288927103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2b1553488be1%3A0x983f50238bf01e42!2sCoworkee%20-%20Seu%20Escrit%C3%B3rio%20Perto%20de%20Casa!5e0!3m2!1spt-BR!2sbr!4v1619408591073!5m2!1spt-BR!2sbr"
                    height="300" loading="lazy"
                >
                </iframe>
            </Row>
        </>
    );
}
