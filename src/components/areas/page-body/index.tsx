import Image from 'next/image';

import { PageHeader, Topics, Topic, ContactButton, Center } from './styles';
import { PageBodyInterface } from './../../../interfaces/pageBody.interface';

interface PageBodyProps {
    props: PageBodyInterface;
}

export default function PageBody({props}: PageBodyProps) {

    return(
        <>
            <PageHeader>
                <h1>{props.title}</h1>
                <p dangerouslySetInnerHTML={{__html: props.description}}></p>
            </PageHeader>

            <Topics>
                {props.topics.map(topic => (
                    <Topic key={topic}>
                        <Image
                            src="/check.svg"
                            alt={topic}
                            width={18}
                            height={13}
                        />
                        <h3>{topic}</h3>
                    </Topic>
                ))}
            </Topics>

            <Center>
                <ContactButton  target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5561984837473&text=Ola!">
                    Entre em contato
                </ContactButton>
            </Center>
        </>
    );
}
