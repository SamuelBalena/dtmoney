import { Container, Content, Logo } from "./styles";

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header ( { onOpenNewTransactionModal }: HeaderProps ) {
    return (
        <Container>
            <Content>
                <Logo>
                    dtmoney
                </Logo>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}