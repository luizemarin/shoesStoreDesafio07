import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import logo from '../../assets/images/Logo.png';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    padding: 30px 5px;
    align-items: center;
    justify-content: space-between;
    background-color: #191920;
`;

export const Logo = styled.Image.attrs({
    source: logo,
    resizeMode: 'cover',
})`
    max-width: 200px;
    padding-left: 5px;
`;
export const ShopBasket = styled(RectButton)`
    margin-right: 10px;
`;
