import Image from 'next/image';
import Link from 'next/link';

import { Container } from '../../../styles/container';
import { HeaderBackground, TopHeader, BottomHeader, Links, HeaderSpace } from './styles';

export default function Header() {
    return (
        <>
            <HeaderBackground>
                <TopHeader>
                    <Container>
                        <Image
                            src="/marker.svg"
                            width={13}
                            height={13}
                        />
                        <span>Coworkee - SMA Conjunto B, Loja 19 - Gama, Brasília/DF</span>
                    </Container>
                </TopHeader>

                <BottomHeader>
                    <Container>
                        <Image
                            src="/logo.png"
                            width={350}
                            height={110}
                        />
                        <Links>
                            <li><Link href={{pathname: '/areas-de-atuacao'}}>Áreas de atuação</Link></li>
                            <li><Link href="">Contato</Link></li>
                            <li><Link href="">Sobre</Link></li>
                        </Links>
                    </Container>
                </BottomHeader>
            </HeaderBackground>

            <HeaderSpace></HeaderSpace>
        </>
    );
}
