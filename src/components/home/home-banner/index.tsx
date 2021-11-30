import Image from 'next/image';

import { Container } from '../../../styles/container';
import { BannerBackground } from './styles';

export default function HomeBanner() {

    return (
        <BannerBackground>
            <Container>
                <h1>Compromisso, eficência e inovação</h1>
                <p>Receba uma orientação jurídica de <strong>altíssimo nível</strong> dos nossos <strong>advogados especialistas</strong></p>

                <a target="_blank" href="https://api.whatsapp.com/send?phone=5561984837473&text=Ola!">
                    <Image
                        src="/whatsapp.svg"
                        alt="Falr conosco"
                        width={30}
                        height={30}
                    />
                    FALE CONOSCO
                </a>
            </Container>
        </BannerBackground>
    );
}
