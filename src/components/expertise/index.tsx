import Image from 'next/image';

import { Container } from '../../styles/container';
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
                    <Area>
                        <Image
                            src="/rights.svg"
                            width={30}
                            height={30}
                        />
                        <h2>Civil</h2>
                        <p>
                            Direito Civil é o ramo do Direito que engloba o conjunto
                            de normas jurídicas reponsáveis por regular os direitos e obrigações
                        </p>
                    </Area>

                    <Area>
                        <Image
                            src="/rights.svg"
                            width={30}
                            height={30}
                        />
                        <h2>Civil</h2>
                        <p>
                            Direito Civil é o ramo do Direito que engloba o conjunto
                            de normas jurídicas reponsáveis por regular os direitos e obrigações
                        </p>
                    </Area>

                    <Area>
                        <Image
                            src="/rights.svg"
                            width={30}
                            height={30}
                        />
                        <h2>Civil</h2>
                        <p>
                            Direito Civil é o ramo do Direito que engloba o conjunto
                            de normas jurídicas reponsáveis por regular os direitos e obrigações
                        </p>
                    </Area>

                    <Area>
                        <Image
                            src="/rights.svg"
                            width={30}
                            height={30}
                        />
                        <h2>Civil</h2>
                        <p>
                            Direito Civil é o ramo do Direito que engloba o conjunto
                            de normas jurídicas reponsáveis por regular os direitos e obrigações
                        </p>
                    </Area>
                </Areas>
            </Container>
        </Expertises>
    );
}
