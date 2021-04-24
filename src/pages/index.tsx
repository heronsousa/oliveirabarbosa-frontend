import Header from "../components/shared/header";
import Expertise from '../components/sections/expertise';
import Clients from "components/sections/clients";
import Team from "components/sections/team";
import Contact from "components/sections/contact";

export default function App() {
    return (
        <>
            <Header></Header>
            <Expertise></Expertise>
            <Clients></Clients>
            <Team></Team>
            <Contact></Contact>
        </>
    );
}
