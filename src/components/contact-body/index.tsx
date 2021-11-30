import Image from 'next/image';

import ContactForm from './../shared/contact-form/index';
import { PageHeader, Row, ContactContainer, Info, Socials, Localization } from './styles';
import { Container } from '../../styles/container';

export default function ContactBody() {
    return(
        <>
            <Container>
                <PageHeader>
                    <h1>Contato</h1>
                    <p>Nosso atendimento é de segunda a sexta, de 8h às 18h. Para agendar uma reunião, preencha o formulário a seguir, ou entre em contato através de um de nossos canais de atendimento.</p>
                </PageHeader>
            </Container>

            <ContactContainer>
                <Container>
                    <Info>
                        <h2>E-mail:</h2>
                        <span>oliveirabarbosaadvogados@gmail.com</span>

                        <h2>Endereço:</h2>
                        <span>Coworkee - SMA, Conjunto B, Loja 19 Gama, Brasília/DF.</span>

                        <h2>Telefone:</h2>
                        <span>(61) 98483-7473</span>

                        <Socials>
                            <li>
                                <a target="_blank" href="https://api.whatsapp.com/send?phone=5561984837473&text=Ola!">
                                    <Image
                                        src="/whatsapp.svg"
                                        alt="Entre em contato pelo whatsapp"
                                        width={25}
                                        height={25}
                                    />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.instagram.com/oliveirabarbosaadvogados/">
                                    <Image
                                        src="/Instagram.svg"
                                        alt="Conheça nosso instagram"
                                        width={25}
                                        height={25}
                                    />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.facebook.com/victor.oliveira.9212">
                                    <Image
                                        src="/Facebook.svg"
                                        alt="Entre em contato pelo facebook"
                                        width={25}
                                        height={25}
                                    />
                                </a>
                            </li>
                        </Socials>
                    </Info>

                    <ContactForm title="Marque uma reunião"/>
                </Container>
            </ContactContainer>

            <Container>
                <Localization>
                    <h1>Onde estamos?</h1>

                    <Row>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.3648777541466!2d-48.05745288562252!3d-15.994510288927103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2b1553488be1%3A0x983f50238bf01e42!2sCoworkee%20-%20Seu%20Escrit%C3%B3rio%20Perto%20de%20Casa!5e0!3m2!1spt-BR!2sbr!4v1619408591073!5m2!1spt-BR!2sbr"
                            height="300" loading="lazy"
                        >
                        </iframe>

                        <div>
                            <h2>Endereço:</h2>
                            <p>Coworkee - SMA, Conjunto B, Loja 19 Gama, Brasília/DF.</p>
                        </div>
                    </Row>
                </Localization>
            </Container>
        </>
    );
}
