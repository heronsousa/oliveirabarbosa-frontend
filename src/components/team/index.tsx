import Image from 'next/image';

import { Container } from '../../styles/container';
import { TeamContainer, Person, PersonDescription } from './styles';

export default function Team() {
    return (
        <Container>
            <TeamContainer>
                <h1>NOSSA EQUIPE</h1>
                <p>Nosso time de colaboradores!</p>

                <Person>
                    <Image
                        src="/person.jpg"
                        width={280}
                        height={390}
                    />

                    <PersonDescription>
                        <h2>Victor de Oliveira Varela</h2>
                        <p>Bacharel em Direito com especialização em Direito Civil.</p>
                        <p>
                            Formado pela Universidade de São Paulo, Victor é o sócio fundador da Oliveira Barbosa.
                            Responsável pela área de Direito Civil, já atendeu mais de
                            50 processos com mais de 90% de aproveitamento.
                        </p>
                    </PersonDescription>
                </Person>

                <a href="">Conheça nossos colaboradores</a>
            </TeamContainer>
        </Container>
    );
}
