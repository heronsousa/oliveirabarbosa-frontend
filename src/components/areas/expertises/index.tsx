import Image from 'next/image';
import Link from 'next/link';

import { Container } from "../../../styles/container";
import { PageHeader, Areas, Area } from './styles';

export default function Expertise() {
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
            </Areas>
        </>
    );
}
