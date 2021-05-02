import Expertise from '../components/home/expertise';
import Clients from "../components/home/clients";
import Team from "../components/home/team";
import Contact from "../components/home/contact";
import HomeBanner from "../components/home/home-banner";

export default function App() {
    return (
        <>
            <HomeBanner></HomeBanner>
            <Expertise></Expertise>
            <Clients></Clients>
            <Team></Team>
            <Contact></Contact>
        </>
    );
}
