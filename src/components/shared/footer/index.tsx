import Image from 'next/image';

import { Container } from '../../../styles/container';
import { FooterBackground, FooterColumn, FooterSocials, FooterCredits } from './styles';

export default function Footer() {
    return (
        <>
            <FooterBackground>
                <Container>
                    <Image
                        src="/logo.png"
                        width={330}
                        height={100}
                    />

                    <FooterColumn>
                        <h2>INSTITUCIONAL</h2>
                        <ul>
                            <li><a href="">Quem Somos</a></li>
                            <li><a href="">Nossa História</a></li>
                            <li><a href="">Equipe</a></li>
                            <li><a href="">Áreas de Atuação</a></li>
                        </ul>
                    </FooterColumn>

                    <FooterColumn>
                        <h2>ÁREAS DE ATUAÇÃO</h2>
                        <ul>
                            <li><a href="">Direito Civil</a></li>
                            <li><a href="">Direito do Consumidor</a></li>
                            <li><a href="">Direito Previdenciário</a></li>
                            <li><a href="">Direito Trabalhista</a></li>
                        </ul>
                    </FooterColumn>

                    <FooterColumn>
                        <h2>FALE DIRETAMENTE</h2>
                        <span>(61) 98483-7473</span>
                        <span>OliveiraAdvogados@meusite.com</span>

                        <h2>ATENDIMENTO</h2>
                        <ul>
                            <li><a href="">Fale Conosco</a></li>
                        </ul>
                    </FooterColumn>

                    <FooterColumn>
                        <h2>ENDEREÇO</h2>
                        <span>Coworkee - SMA, Conjunto B, Loja 19 - Gama, Brasília/DF.</span>
                    </FooterColumn>

                    <FooterSocials>
                        <li>
                            <a>
                                <Image
                                    src="/Instagram.svg"
                                    width={25}
                                    height={25}
                                />
                            </a>
                        </li>
                        <li>
                            <a>
                                <Image
                                    src="/Facebook.svg"
                                    width={25}
                                    height={25}
                                />
                            </a>
                        </li>
                        <li>
                            <a>
                                <Image
                                    src="/Twitter.svg"
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
                        Desenvolvido por
                        {/* <a href="">Heron Rodrigues e</a>
                        <a href="">Rita Castro</a> */}
                    </span>
                </Container>
            </FooterCredits>
        </>
    );
}
