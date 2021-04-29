import Link from 'next/link';

import { Container } from '../../../styles/container';
import { BreadcrumbInterface } from './../../../interfaces/breadcrumb.interface';

export default function Breadcrumb({routes}: { routes: BreadcrumbInterface[] }) {

    return (
        <Container style={{marginTop: '100px', marginBottom: '100px'}}>
            {
                routes.map(route => (
                    <Link
                        key={route.slug}
                        href={{pathname: route.slug}}
                    >
                        {route.title}
                    </Link>
                ))
            }
        </Container>
    );
}
