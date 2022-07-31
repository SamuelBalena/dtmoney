import { FormEvent, useState, useContext } from 'react'
import Modal from 'react-modal'
import { api } from '../../services/api'
import { TransactionsContext } from '../../TransactionsContext'
import { Container, TransactionTypeContainer } from './styles'

interface NewTrasactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal( { isOpen, onRequestClose }: NewTrasactionModalProps) {
    const [ type, setType ] = useState('deposit')
    const [ title, setTitle ] = useState('')
    const [ amount, setAmount ] = useState(0)
    const [ category, setCategory ] = useState('')

    const { createTransaction } = useContext(TransactionsContext)

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onRequestClose()
    }

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content '
        >
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number" 
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))} // convertendo para number.
                />

                <TransactionTypeContainer>
                    <button type='button' className='green' onClick={()=>{setType('deposit')}}>
                        Entrada😁
                    </button>

                    <button type='button' className='red' onClick={()=>{setType('withdraw')}}>
                        Saída😔
                    </button>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}