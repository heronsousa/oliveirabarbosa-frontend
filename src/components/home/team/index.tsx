import Image from 'next/image';

import { Container } from '../../../styles/container';
import { TeamContainer, Person, PersonDescription } from './styles';
import Link from 'next/link';

export default function Team() {
    return (
        <Container>
            <TeamContainer>
                <h1>NOSSA EQUIPE</h1>
                <p>Nosso time de colaboradores!</p>

                <Person>
                    <Image
                        src="/victor.jpg"
                        width={280}
                        height={390}
                    />

                    <PersonDescription>
                        <h2>Victor de Oliveira Varela</h2>
                        <p>Dr. Victor é advogado especialista em causas trabalhistas.</p>
                        <p>
                            Atuou por 2 anos como colaborador do Supremo Tribunal Federal em ações trabalhistas. É Pós-graduando em Direito do Trabalho e Processo do Trabalho. É Sócio Nominal e CEO do escritório de advocacia Oliveira Barbosa & Advogados Associados
                        </p>
                    </PersonDescription>
                </Person>

                <Link href={{pathname: '/sobre'}}>Conheça nossos colaboradores</Link>
            </TeamContainer>
        </Container>
    );
}
