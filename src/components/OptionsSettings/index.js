import React from 'react';
import { Container 
        , HeaderOptions
        , Options
        , OptionsTitle
        , Divider
} from './styled';


const items = [
    {
        key: String(Math.random()),
        title: 'My PicPay'
},
    {
        key: String(Math.random()),
        title: 'Meu número'
},
    {
        key: String(Math.random()),
        title: 'Meu e-mail'
},
    {
        key: String(Math.random()),
        title: 'My PicPay'
},
    {
        key: String(Math.random()),
        title: 'Dados Pessoais'
},
    {
        key: String(Math.random()),
        title: 'Conta Bancaria'
},
    {
        key: String(Math.random()),
        title: 'Taxas e limites'
},
    {
        key: String(Math.random()),
        title: 'Meus endereços'
},
    {
        key: String(Math.random()),
        title: 'Meus Favoritos'
},
]

export default function OptionSettings(){

    return (
        <Container>
                <HeaderOptions> MY ACCOUNT</HeaderOptions>
                    {items.map((item) => {
                        return (
                            <Options key={item.key}>
                                <OptionsTitle>{item.title}</OptionsTitle>
                                <Divider/>
                            </Options>
                        )
                    })}

        </Container>
    )
}