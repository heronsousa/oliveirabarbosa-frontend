import Link from 'next/link';
import { useEffect, useState } from 'react';

import { BreadcrumbInterface } from './../../../interfaces/breadcrumb.interface';
import { BreadcrumbLink, BreadcrumbContainer } from './styles';

interface BreadcrumbProps {
    routes: BreadcrumbInterface[]
}

export default function Breadcrumb({ routes }: BreadcrumbProps) {

    const [ links, setLinks ] = useState<BreadcrumbInterface[]>([]);

    useEffect(() => {
        const home = { title: 'Início', slug: '/' };
        setLinks([home, ...routes]);
    }, []);

    return (
        <BreadcrumbContainer>
            {
                links.map(link => (
                    <Link
                        key={link.slug}
                        href={{pathname: link.slug}}
                    >
                        <BreadcrumbLink>{link.title}</BreadcrumbLink>
                    </Link>
                ))
            }
        </BreadcrumbContainer>
    );
}
