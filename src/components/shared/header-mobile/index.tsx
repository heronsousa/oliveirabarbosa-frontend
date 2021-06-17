import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Container } from '../../../styles/container';
import { HeaderBackground, TopHeader, BottomHeader, HeaderSpace, Sidebar, SidebarContent, SidebarSubItem, SidebarItem, SidebarHeader } from './styles';

export default function HeaderMobile() {
    const [isSidebarOpen, setisSidebarOpen] = useState(false);

    return(
        <>
            <HeaderBackground>
                <TopHeader />

                <BottomHeader>
                    <Container>
                        <Image
                            src="/menu.png"
                            width={30}
                            height={25}
                            onClick={() => setisSidebarOpen(true)}
                        />
                        <Link href={{pathname: '/'}}>
                            <Image
                                src="/logo.png"
                                width={180}
                                height={55}
                            />
                        </Link>
                    </Container>
                </BottomHeader>
            </HeaderBackground>

            <Sidebar isSidebarOpen={isSidebarOpen}>
                <SidebarContent>
                    <SidebarHeader>
                        <Image
                            src="/cancel.png"
                            width={20}
                            height={20}
                            onClick={() => setisSidebarOpen(false)}
                        />
                    </SidebarHeader>

                    <Link href={{pathname: '/'}}><SidebarItem>Início</SidebarItem></Link>
                    <hr />
                    <Link href={{pathname: '/areas-de-atuacao'}}><SidebarItem>Áreas de Atuação</SidebarItem></Link>
                    <Link href={{pathname: '/areas-de-atuacao/civil'}}><SidebarSubItem>Direito Civil</SidebarSubItem></Link>
                    <Link href={{pathname: '/areas-de-atuacao/consumidor'}}><SidebarSubItem>Direito do Consumidor</SidebarSubItem></Link>
                    <Link href={{pathname: '/areas-de-atuacao/trabalhista'}}><SidebarSubItem>Direito Trabalhista</SidebarSubItem></Link>
                    <Link href={{pathname: '/areas-de-atuacao/previdenciario'}}><SidebarSubItem>Direito Prividenciário</SidebarSubItem></Link>
                    <hr />
                    <Link href={{pathname: '/contato'}}><SidebarItem>Contato</SidebarItem></Link>
                    <hr />
                    <Link href={{pathname: '/sobre'}}><SidebarItem>Sobre</SidebarItem></Link>
                    <hr />
                </SidebarContent>
            </Sidebar>

            <HeaderSpace></HeaderSpace>
        </>
    );
}
