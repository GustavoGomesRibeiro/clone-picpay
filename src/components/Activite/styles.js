import styled from 'styled-components/native';

export const Container = styled.View`
  padding 0 16px;
`;


export const Header = styled.View`
    height: 50px;
`;
export const Title = styled.Text`
    margin-top: 25px
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    flex-direction: row;
`;

export const ContainerActivite = styled.View`
    background: #1e222b;
    border-radius: 8px
    margin-top: 20px;
    padding: 15px;
`;
export const ContainerHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image``;
export const Description = styled.View`
    color: #fff;
    font-size 16px;
    margin-left: 15px;
`;
export const TextBold = styled.Text`
color: #fff
font-weight: bold;
`;

export const Body = styled.View``;
export const Username = styled.Text`
    margin-top: 20px;
    color: #fff;
    font-size 16px;
    font-weight: bold;
    
`;
export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Details = styled.View`
    flex-direction: row;
    align-items: center
`;
export const Price = styled.Text`
    margin-top: 20px;
    color: #714051;
    font-size 16px;
    font-weight: bold;
`;
export const Divider = styled.View`
    width: 2px;
    height: 13px;
    background: rgba(255,255,255,0.4);
    margin-left: 16px;
    margin-top: 20px;
`;


export const Date = styled.Text`
    color: #fff;
    margin-top: 20px;
    align-items: center;
    margin-left: 5px;
`;


export const Actions = styled.View`
    margin-top: 20px;
    flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
    margin-left: 15px
    flex-direction: row;
`;

export const OptionLabel = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-left: 5px;
`;
