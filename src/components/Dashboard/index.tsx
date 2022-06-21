import { Sumarry } from "../Sumarry";
import { TransictionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard () {
    return (
        <Container>
            <Sumarry/>
            <TransictionsTable/>
        </Container>
    )
}