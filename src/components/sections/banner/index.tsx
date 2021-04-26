import Image from 'next/image';

import { Container } from '../../../styles/container';
import { BannerBackground } from './styles';

export default function Banner() {

    return (
        <BannerBackground>
            <Container>
                <h1>Compromisso, eficência e inovação</h1>
                <p>Nós cuidaremos do seu caso com dedicação total.</p>

                <button>
                    <Image
                        src="/whatsapp.svg"
                        width={30}
                        height={30}
                    />
                    FALE CONOSCO
                </button>
            </Container>
        </BannerBackground>
    );
}
