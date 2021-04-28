import { Container } from '../../../styles/container';
import { BannerBackground } from './styles';

interface GeneralBannersProps {
    title: string;
}

export default function GeneralBanner({ title }: GeneralBannersProps) {

    return (
        <BannerBackground>
            <Container>
                <h1>{title}</h1>
            </Container>
        </BannerBackground>
    );
}
