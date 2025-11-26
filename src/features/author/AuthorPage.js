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
                        Cześć! Mam na imię <strong>Kamila</strong> i uwielbiam aktywny tryb życia. Najwięcej radości daje mi <strong>bieganie</strong> oraz regularne treningi <strong>jogi</strong>, które pozwalają mi złapać równowagę po intensywnym dniu.
                    </p>
                    <p>
                        Uczę się również <em>włoskiego</em> - głównie dlatego, że kocham włoską kulturę i oczywiście <strong>włoskie jedzenie</strong>. Gotowanie to dla mnie czysta przyjemność! </p> <p> W wolnych chwilach dużo czytam, zwłaszcza książki związane z <strong>rozwojem osobistym</strong>. Inspirują mnie i pomagają cały czas iść do przodu.
                    </p>
                </>
            }
        />
    </Container>
);

export default AuthorPage;
