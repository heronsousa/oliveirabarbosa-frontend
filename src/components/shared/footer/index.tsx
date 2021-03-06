import Image from 'next/image';
import Link from 'next/link';

import { Container } from '../../../styles/container';
import { FooterBackground, FooterColumn, FooterSocials, FooterCredits } from './styles';

export default function Footer() {
    return (
        <>
            <FooterBackground>
                <Container>
                    <Image
                        src="/logo.png"
                        priority
                        alt="Logo Oliveira Barbosa & Advogados Associados"
                        width={330}
                        height={100}
                    />

                    <FooterColumn>
                        <h2>INSTITUCIONAL</h2>
                        <ul>
                            <li><Link href={{pathname: '/sobre'}}>Quem Somos</Link></li>
                            <li><Link href={{pathname: '/areas-de-atuacao'}}>Áreas de Atuação</Link></li>
                        </ul>
                    </FooterColumn>

                    <FooterColumn>
                        <h2>ÁREAS DE ATUAÇÃO</h2>
                        <ul>
                            <li><Link href={{pathname: '/areas-de-atuacao/civil'}}>Direito Civil</Link></li>
                            <li><Link href={{pathname: '/areas-de-atuacao/consumidor'}}>Direito do Consumidor</Link></li>
                            <li><Link href={{pathname: '/areas-de-atuacao/previdenciario'}}>Direito Previdenciário</Link></li>
                            <li><Link href={{pathname: '/areas-de-atuacao/trabalhista'}}>Direito Trabalhista</Link></li>
                        </ul>
                    </FooterColumn>

                    <FooterColumn>
                        <h2>ATENDIMENTO</h2>
                        <ul>
                            <li><Link href={{pathname: '/contato'}}>Fale Conosco</Link></li>
                        </ul>

                        <h2>FALE DIRETAMENTE</h2>
                        <span>(61) 98483-7473</span>
                        <span>oliveirabarbosaadvogados@gmail.com</span>
                    </FooterColumn>

                    <FooterColumn>
                        <h2>ENDEREÇO</h2>
                        <span>Coworkee - SMA, Conjunto B, Loja 19 - Gama, Brasília/DF.</span>
                    </FooterColumn>

                </Container>
                <Container>
                    <FooterSocials>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5561984837473&text=Ola!">
                                    <Image
                                        src="/whatsapp.svg"
                                        alt="Entre em contato pelo whatsapp"
                                        width={25}
                                        height={25}
                                    />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/oliveirabarbosaadvogados/">
                                    <Image
                                        src="/Instagram.svg"
                                        alt="Conheça nosso instagram"
                                        width={25}
                                        height={25}
                                    />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/victor.oliveira.9212">
                                    <Image
                                        src="/Facebook.svg"
                                        alt="Entre em contato pelo facebook"
                                        width={25}
                                        height={25}
                                    />
                                </a>
                            </li>
                    </FooterSocials>
                </Container>
            </FooterBackground>

            <FooterCredits>
                <Container>
                    <span>2021 ® Oliviera e Associados - Todos os direitos reservados</span>
                    <span>
                        Desenvolvido por:
                        <a href="https://www.linkedin.com/in/heronsousa/" target="_blank" rel="noopener noreferrer"> Heron Rodrigues</a>
                        {' '}
                        e
                        <a href="https://www.linkedin.com/in/rtcstr/" target="_blank" rel="noopener noreferrer">Rita Brilhante</a>
                    </span>
                </Container>
            </FooterCredits>
        </>
    );
}
