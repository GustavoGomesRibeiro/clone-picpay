import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled.SafeAreaView`
    flex: 1;
    background: #000;
`;

export const ScrollView = styled.ScrollView``;

export const WalletPay = styled(LinearGradient)`
    
    height: 250px;
    align-items: center;
    justify-content: center;
`;

export const DescriptionWallet = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin: 10px 0;
`;

export const ValueWallet = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 34px;
    margin-left: 20px
`;

export const DescriptionCDI = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin: 12px 0;
`;

export const Header = styled.View`
    background: #1D1920;
    height: 65px;
    flex-direction: row;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled.Text`
    color: #fff;
    font-size: 16px;
    padding: 0 10px;
`;

export const Payment = styled.View`
    background: #1E232A;
    padding: 20px;
    border-radius: 8px;
    margin-top: 10px;
`;

export const ContainerHeader = styled.Text`
    color: #ccc;
    font-size: 14px;
    margin-top: 25px;
    padding: 0 10px;
`;

export const CardBody = styled.View`
    flex-direction: row;
`;

export const BodyPayment = styled.View`
    flex: 1;
`;

export const TitlePayment = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-top: 25px;
    font-weight: bold;
    padding: 0 10px;
`; 
export const DescriptionPayment = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-top: 15px;
    padding: 0 10px;
`;

export const Img = styled.Image`
    width: 60px;
`;

export const SvgIcon = styled.TouchableOpacity`
    margin-left: 15px;    
`;

export const WalletContainer = styled.View`
    flex-direction: row;
`;


export const Actions = styled.View`
    flex-direction: row;
    margin-top: 40px;
`;
export const Action = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border: 1px solid rgba(255,255,255,0.6);
    border-radius: 25px;
    width: 150px
    height: 45px;
    justify-content: center;
    margin: 0 10px;
    `;
export const ActionLabel = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-left: 10px;
`;

export const AddCard = styled.TouchableOpacity`
    margin-top: 15px;
    flex-direction: row;
    align-items: center;
`;
export const DescriptionAdd = styled.Text`
    color: #27B458;
    font-size: 16px;
    margin: 0 16px;
`;


export const ContainerTicket = styled.View`
    align-items: center;
    margin-top: 25px
`;
export const Ticket = styled.TouchableOpacity`
    flex-direction: row;
`;

export const TicketLabel = styled.Text`
    color: #27B458;
    font-size: 16px;
    font-weight: bold;
    text-decoration-line: underline;
`;