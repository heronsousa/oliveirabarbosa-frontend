import Image from 'next/image';
import {
    CarouselProvider,
    DotGroup,
    Slide,
    Slider
} from 'pure-react-carousel';

import { Container } from '../../../styles/container';
import { ClientsBackground, OurQuote, ClientsQuotes, Quote } from './styles';

export default function Clients() {
    return (
        <ClientsBackground>
            <Container>
                <OurQuote>
                    <Image
                        src="/quote.svg"
                        width={30}
                        height={30}
                    />

                    <p>
                        Nosso objetivo é apresentar uma solução eficaz para cada situação de forma
                        personalizada, atendendo as necessidades do cliente e prestando nosso serviço de forma
                        ética, técnica e profissional.
                    </p>

                    <span> Oliveira Barbosa</span>
                </OurQuote>

                <ClientsQuotes>
                    <h1>O QUE NOSSOS CLIENTES DIZEM</h1>
                    <p>Veja o que nossos clientes dizem sobre nossos serviços</p>

                    <CarouselProvider
                            totalSlides={4}
                            infinite
                            step={1}
                            naturalSlideWidth={400}
                            naturalSlideHeight={500}
                            hasMasterSpinner
                            isPlaying
                        >
                            <Slider >
                                <Slide index={0}>
                                    <Quote>
                                        <div>
                                            <Image
                                                src="/quote.svg"
                                                width={30}
                                                height={30}
                                            />
                                            <p>"Equipe bastante eficiente. Comprometidos e dedicados! Me ajudaram muito."</p>
                                        </div>
                                        <div>
                                            <span>Lorena Carvalho</span>
                                            <span>Cliente desde 2021</span>
                                        </div>
                                    </Quote>
                                </Slide>
                                <Slide index={1}>
                                    <Quote>
                                        <div>
                                            <Image
                                                src="/quote.svg"
                                                width={30}
                                                height={30}
                                            />
                                            <p>"Muito satisfeito com o atendimento. Educação e dedicação nota 10!"</p>
                                        </div>
                                        <div>
                                            <span>Carlos Rodrigues</span>
                                            <span>Cliente desde 2020</span>
                                        </div>
                                    </Quote>
                                </Slide>
                                <Slide index={2}>
                                    <Quote>
                                        <div>
                                            <Image
                                                src="/quote.svg"
                                                width={30}
                                                height={30}
                                            />
                                            <p>"Equipe bastante eficiente. Comprometidos e dedicados! Me ajudaram muito."</p>
                                        </div>
                                        <div>
                                            <span>Lorena Carvalho</span>
                                            <span>Cliente desde 2021</span>
                                        </div>
                                    </Quote>
                                </Slide>
                                <Slide index={3}>
                                    <Quote>
                                        <div>
                                            <Image
                                                src="/quote.svg"
                                                width={30}
                                                height={30}
                                            />
                                            <p>"Muito satisfeito com o atendimento. Educação e dedicação nota 10!"</p>
                                        </div>
                                        <div>
                                            <span>Carlos Rodrigues</span>
                                            <span>Cliente desde 2020</span>
                                        </div>
                                    </Quote>
                                </Slide>
                            </Slider>
                            <DotGroup />
                    </CarouselProvider>
                </ClientsQuotes>
            </Container>
        </ClientsBackground>
    );
}
