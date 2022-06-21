import { Container, Content, Logo } from "./styles";

export function Header () {
    return (
        <Container>
            <Content>
                <Logo>
                    dtmoney
                </Logo>
                <button type="button">
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}