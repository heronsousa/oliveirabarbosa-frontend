import Image from 'next/image';
import Link from 'next/link';

import { Container } from '../../../styles/container';
import { Expertises, Title, Description, Areas, Area } from './styles';

export default function Expertise() {
    return (
        <Expertises>
            <Container>
                <Title>ÁREAS DE ATUAÇÃO</Title>
                <Description>
                    <p>
                        A Oliveira Barbosa conta com uma equipe apta a trabalhar
                        desde questões mais simples, até casos mais complexos.
                    </p>
                </Description>

                <Areas>
                    <Link href={{pathname: 'areas-de-atuacao/civil'}}>
                        <Area>
                            <Image
                                src="/civil-right.svg"
                                width={30}
                                height={30}
                            />
                            <h2>Civil</h2>
                            <p>
                                Direito Civil é o ramo do Direito que engloba o conjunto
                                de normas jurídicas reponsáveis por regular os direitos e obrigações
                            </p>
                        </Area>
                    </Link>

                    <Link href={{pathname: 'areas-de-atuacao/consumidor'}}>
                        <Area>
                            <Image
                                src="/wallet.svg"
                                width={30}
                                height={30}
                            />
                            <h2>Consumidor</h2>
                            <p>
                                O direito do consumidor é muito presente na vida cotidiana de todos, seja quando se adquire algum bem trivial, como um lanche na padaria.
                            </p>
                        </Area>
                    </Link>

                    <Link href={{pathname: 'areas-de-atuacao/previdenciario'}}>
                        <Area>
                            <Image
                                src="/return.svg"
                                width={30}
                                height={30}
                            />
                            <h2>Previdenciário</h2>
                            <p>
                            Garante que a Seguridade Social seja respeitada, regendo as relações entre segurado e ente previdenciário.
                            </p>
                        </Area>
                    </Link>

                    <Link href={{pathname: 'areas-de-atuacao/trabalhista'}}>
                        <Area>
                            <Image
                                src="/work.svg"
                                width={30}
                                height={30}
                            />
                            <h2>Trabalhista</h2>
                            <p>
                            Esse direito é composto de conjuntos de normas, princípios e outras fontes jurídicas que regem as relações de trabalho.
                            </p>
                        </Area>
                    </Link>
                </Areas>
            </Container>
        </Expertises>
    );
}
