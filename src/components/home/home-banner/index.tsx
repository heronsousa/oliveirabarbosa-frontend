import Image from 'next/image';

import { Container } from '../../../styles/container';
import { BannerBackground } from './styles';

export default function HomeBanner() {

    return (
        <BannerBackground>
            <Container>
                <h1>Compromisso, eficência e inovação</h1>
                <p>Nós cuidaremos do seu caso com dedicação total.</p>

                <a target="_blank" href="https://api.whatsapp.com/send?phone=5561984837473&text=Ola!">
                    <Image
                        src="/whatsapp.svg"
                        width={30}
                        height={30}
                    />
                    FALE CONOSCO
                </a>
            </Container>
        </BannerBackground>
    );
}
