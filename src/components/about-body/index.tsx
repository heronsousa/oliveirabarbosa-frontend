import Image from 'next/image';

import { PageHeader, AboutContainer, Person, PersonDescription } from './styles';
import { Container } from '../../styles/container';

export default function AboutBody() {

    return(
        <>
            <Container>
                <PageHeader>
                    <h1>Sobre nós</h1>

                    <p>O Escritório Oliveira Barbosa & Advogados Associados presta serviços jurídicos em diversas áreas do Direito, tendo uma equipe devidamente especializada e apta a trabalhar desde questões mais simples, até casos complexos, que exigem o envolvimento de profissionais de diversas áreas de atuação.</p>
                    <br/>
                    <p>O Escritório busca o atendimento por excelência nas mais variadas especialidades, tendo ampla atuação nas áreas do Direito do Trabalho, Direito do Consumidor, Direito Civil e Direito Previdenciário.</p>
                    <br/>
                    <p>Nosso objetivo é apresentar uma solução eficaz para cada situação de forma personalizada, atendendo as necessidades do cliente e prestando nosso serviço de forma ética, técnica e profissional.</p>
                </PageHeader>
            </Container>

            <AboutContainer>
                <Container>
                    <Person>
                        <Image
                            src="/victor.jpg"
                            alt="Dr. Victor de Oliveira Varela é advogado especialista em causas trabalhistas."
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

                    <Person>
                        <Image
                            src="/gustavo.jpeg"
                            alt="Gustavo da Silva Palhares. Associado especialista em causas cíveis"
                            width={280}
                            height={390}
                        />

                        <PersonDescription>
                            <h2>Gustavo da Silva Palhares</h2>
                            <p>Associado especialista em causas cíveis</p>
                            <p>
                                Atuou por 2 anos como colaborador na contadoria do Tribunal de Justiça do Distrito Federal na elaboração de pareceres e cálculos jurídicos.
                            </p>
                        </PersonDescription>
                    </Person>

                    <Person>
                        <Image
                            src="/marcello.jpeg"
                            alt="Marcello Layne Pereira Barbosa. Associado especialista em Contratos"
                            width={280}
                            height={390}
                        />

                        <PersonDescription>
                            <h2>Marcello Layne Pereira Barbosa</h2>
                            <p>Associado especialista em Contratos</p>
                            <p>
                                Atuou por 1 ano e meio como colaborador da Procuradoria Geral do Distrito Federal em causas de ressarcimento ao erário.
                            </p>
                        </PersonDescription>
                    </Person>

                    <Person>
                        <Image
                            src="/victor-b.jpeg"
                            alt="Victor Batista da Silva. Associado especialista em causas de Família e Sucessões"
                            width={280}
                            height={390}
                        />

                        <PersonDescription>
                            <h2>Victor Batista da Silva</h2>
                            <p>Associado especialista em causas de Família e Sucessões</p>
                            <p>
                            Atuou por 1 ano como colaborador do Juizado Especial Criminal da Ceilândia e por mais 1 ano na 6° Turma Cível e 2° Câmara Cível do Tribunal de Justiça do Distrito Federal . É Pós-graduando em Direito de Família e Sucessões.
                            </p>
                        </PersonDescription>
                    </Person>
                </Container>
            </AboutContainer>
        </>
    );
}
