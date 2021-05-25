import Image from 'next/image';

import { PageHeader, AboutContainer, Person, PersonDescription } from './styles';
import { Container } from '../../styles/container';

export default function AboutBody() {

    return(
        <>
            <Container>
                <PageHeader>
                    <h1>Sobre nós</h1>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </PageHeader>
            </Container>

            <AboutContainer>
                <Container>
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
                </Container>
            </AboutContainer>
        </>
    );
}
