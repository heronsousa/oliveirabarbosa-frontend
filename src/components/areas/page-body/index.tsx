import Image from 'next/image';
import Link from 'next/link';

import { PageHeader, Topics, Topic } from './styles';
import { PageBodyInterface } from './../../../interfaces/pageBody.interface';


export default function PageBody({ props }: PageBodyInterface) {
    return(
        <>
            <PageHeader>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </PageHeader>

            <Topics>
                {props.topics.map(topic => (
                    <Topic>
                        <Image
                            src="/check.svg"
                            width={18}
                            height={13}
                        />
                        <h3>{topic}</h3>
                    </Topic>
                ))}
            </Topics>
        </>
    );
}
