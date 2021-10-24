import { useEffect } from 'react';
import { Loading } from '../styles/loading';

export default function Family() {
    useEffect(() => {
        window.location.href = "https://oliveiraeassociados.wixsite.com/familia"
    }, []);

    return <Loading />;
}
