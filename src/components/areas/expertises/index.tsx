import Image from 'next/image';
import Link from 'next/link';

import { PageHeader, Areas, Area } from './styles';

export default function Expertises() {
    return(
        <>
            <PageHeader>
                <h1>Áreas de atuação</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </PageHeader>

            <Areas>
                <Link href={{pathname: 'areas-de-atuacao/civil'}}>
                    <Area>
                        <Image
                            src="/rights.svg"
                            width={30}
                            height={30}
                        />
                        <h2>Civil</h2>
                        <p>
                            Direito Civil é o ramo do Direito que engloba o conjunto
                            de normas jurídicas reponsáveis por regular os direitos e obrigações.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </Area>
                </Link>

                <Link href={{pathname: 'areas-de-atuacao/trabalhista'}}>
                    <Area>
                        <Image
                            src="/rights.svg"
                            width={30}
                            height={30}
                        />
                        <h2>Trabalhista</h2>
                        <p>
                            Direito Civil é o ramo do Direito que engloba o conjunto
                            de normas jurídicas reponsáveis por regular os direitos e obrigações.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </Area>
                </Link>

                <Link href={{pathname: 'areas-de-atuacao/consumidor'}}>
                    <Area>
                        <Image
                            src="/rights.svg"
                            width={30}
                            height={30}
                        />
                        <h2>Consumidor</h2>
                        <p>
                            Direito Civil é o ramo do Direito que engloba o conjunto
                            de normas jurídicas reponsáveis por regular os direitos e obrigações.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </Area>
                </Link>

                <Link href={{pathname: 'areas-de-atuacao/previdenciario'}}>
                    <Area>
                        <Image
                            src="/rights.svg"
                            width={30}
                            height={30}
                        />
                        <h2>Previdenciário</h2>
                        <p>
                            Direito Civil é o ramo do Direito que engloba o conjunto
                            de normas jurídicas reponsáveis por regular os direitos e obrigações.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </Area>
                </Link>
            </Areas>
        </>
    );
}
