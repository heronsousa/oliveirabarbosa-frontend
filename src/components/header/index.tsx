import { Container } from './../../styles/container';
import { HeaderBackground, TopHeader, BottomHeader, Links, HeaderSpace } from './styles';

export default function Header() {
    return (
        <>
            <HeaderBackground>
                <TopHeader>
                    <Container>
                        <span>Coworkee - SMA Conjunto B, Loja 19 - Gama, Brasília/DF</span>
                    </Container>
                </TopHeader>

                <BottomHeader>
                    <Container>
                        <img src="https://static.wixstatic.com/media/fb6648_feb918efa4a34cec9cb7994c113fd8e7~mv2.png/v1/fill/w_327,h_161,al_c,q_85,usm_0.66_1.00_0.01/LOGO%201.webp" alt=""/>
                        <Links>
                            <li><a href="">Áreas de atuação</a></li>
                            <li><a href="">Contato</a></li>
                            <li><a href="">Sobre</a></li>
                        </Links>
                    </Container>
                </BottomHeader>
            </HeaderBackground>

            <HeaderSpace></HeaderSpace>
        </>
    );
}
