import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function Sumarry () {
    const { transactions } = useContext(TransactionsContext)

    return (
        <Container>
            <div>
                <header>
                    <p>
                        Entradas:
                    </p>
                </header>
                <strong>
                    R$ 1000,00
                </strong>
            </div>
            <div>
                <header>
                    <p>
                        Saídas:
                    </p>
                </header>
                <strong>
                   - R$ 500,00
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>
                        Total:
                    </p>
                </header>
                <strong>
                    R$ 500,00
                </strong>
            </div>
        </Container>
    )
}