import Expertise from '../components/sections/expertise';
import Clients from "../components/sections/clients";
import Team from "../components/sections/team";
import Contact from "../components/sections/contact";
import HomeBanner from "../components/sections/home-banner";

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
