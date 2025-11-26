import { Container } from "../../common/Container/styled";
import Section from "../../common/Section";
import Header from "../../common/Header";

const AuthorPage = () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Kamila Falgowska"
            body={
                <>
                    <p>
                        <strong>Moją pasją jest gra w tenisa</strong>
                    </p>
                    <p>
                        W wolnym czasie gotuję! <em>Bardzo</em> lubię kuchnię włoską
                    </p>
                </>
            }
        />
    </Container>
);

export default AuthorPage;
