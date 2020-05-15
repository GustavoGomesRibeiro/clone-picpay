import React from 'react'
import { Container, Card, Text, Img } from './styles';
import img8 from '../../assets/images/08.png'
import img9 from '../../assets/images/09.png'
import img10 from '../../assets/images/10.png'
import img11 from '../../assets/images/11.png'
import img12 from '../../assets/images/12.png'
import img13 from '../../assets/images/13.png'

const items = [
        {
        key: String(Math.random()),
        img: img8,
        label: 'Pague suas constas sem sair de casa',
        bgColor: '#172c4a',
    },
    {
        key: String(Math.random()),
        img: img9,
        label: 'Pague suas constas sem sair de casa',
        bgColor: '#6a0159',
    },
    {
        key: String(Math.random()),
        img: img10,
        label: 'Pague suas constas sem sair de casa',
        bgColor: '#4139c8',
    },
    {
        key: String(Math.random()),
        img: img11,
        label: 'Pague suas constas sem sair de casa',
        bgColor: '#00ab4b',
    },
    {
        key: String(Math.random()),
        img: img12,
        label: 'Pague suas constas sem sair de casa',
        bgColor: '#ba2f76',
    },
    {
        key: String(Math.random()),
        img: img13,
        label: 'Pague suas constas sem sair de casa',
        bgColor: '#172c4a',
    },
];

export default function PayAccounts() {
    return (
        <Container>
            {items.map((item) => {
                return (
                    <Card key={item.key} bgColor={item.bgColor}>
                        <Text>
                            {item.label}
                        </Text>
                        <Img source={item.img} />
                    </Card>
                )
            })}
        </Container>
    )
}