import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background-color: #191920;
    flex: 1;
`;

export const ProductList = styled.View`
    background-color: #ffffff;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #e3dfdf;
`;

export const ProductImage = styled.Image`
    width: 70px;
    height: 70px;
    margin-left: 10px;
    margin-top: 15px;
`;

export const ProductDetails = styled.View`
    flex-wrap: wrap;
    flex-direction: column;
`;

export const ProductTitle = styled.Text`
    margin-left: 10px;
    font-size: 14px;
    max-width: 300px;
`;

export const ProductPrice = styled.Text`
    margin-top: 5px;
    margin-left: 10px;
    font-size: 12px;
`;

export const CartButton = styled(RectButton)`
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: #7159c1;
    border-width: 1px;
    border-color: #7159c1;
    margin: 10px;
    width: 95%;
    height: 40px;
`;

export const ProductAmount = styled.View`
    flex-direction: row;
    justify-content: center;
    align-self: center;
    padding: 5px;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
`;

export const ProductAmountQtd = styled.Text`
    color: #fdfcfc;
    align-self: center;
    padding-left: 4px;
    padding-right: 4px;
`;

export const CartButtonText = styled.Text`
    flex: 1;
    font-weight: bold;
    text-align: center;
    color: #fdfcfc;
`;
