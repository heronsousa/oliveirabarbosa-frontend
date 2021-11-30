import Image from 'next/image';
import Link from 'next/link';

import { Container } from '../../../styles/container';
import { HeaderBackground, TopHeader, BottomHeader, Links, HeaderSpace } from './styles';
import { useEffect, useState } from 'react';

export default function Header() {
    const [isOnTopOfThePage, setIsOnTopOfThePage] = useState(true);

    useEffect(() => {
        function handleScreenResize() {
            setIsOnTopOfThePage(window.scrollY === 0);
        }

        window.addEventListener('scroll', handleScreenResize);

        handleScreenResize();

        return () => window.removeEventListener('scroll', handleScreenResize);
    }, []);

    return (
        <>
            <HeaderBackground>
                <TopHeader isOnTopOfThePage={isOnTopOfThePage}>
                    <Container>
                        <Image
                            src="/marker.svg"
                            alt="Nosso endereço"
                            width={13}
                            height={13}
                        />
                        <span>Coworkee - SMA Conjunto B, Loja 19 - Gama, Brasília/DF</span>
                    </Container>
                </TopHeader>

                <BottomHeader isOnTopOfThePage={isOnTopOfThePage}>
                    <Container>
                        <Link href={{pathname: '/'}}>
                            <Image
                                src="/logo.png"
                                alt="Logo Oliveira Barbosa & Advogados Associados"
                                width={350}
                                height={110}
                            />
                        </Link>
                        <Links>
                            <li><Link href={{pathname: '/areas-de-atuacao'}}>Áreas de atuação</Link></li>
                            <li><Link href={{pathname: '/contato'}}>Contato</Link></li>
                            <li><Link href={{pathname: '/sobre'}}>Sobre nós</Link></li>
                        </Links>
                    </Container>
                </BottomHeader>
            </HeaderBackground>

            <HeaderSpace></HeaderSpace>
        </>
    );
}
