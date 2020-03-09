import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background-color: #191920;
    flex: 1;
`;

export const ProductList = styled.View`
    background-color: #ffffff;
    margin: 0 15px;
    border-radius: 4px;
`;

export const Product = styled.View`
    margin: 10px;
`;

export const ProductImage = styled.Image`
    width: 70px;
    height: 70px;
`;

export const ProductInfo = styled.View`
    display: flex;
    margin: 10px;
    flex-direction: row;
`;

export const ProductDetails = styled.View`
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: 5px;
`;

export const ProductDesc = styled.Text`
    font-size: 14px;
    max-width: 210px;
`;

export const ProductPrice = styled.Text`
    margin-top: 5px;
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 5px;
`;

export const RemoveProduct = styled.TouchableOpacity`
    margin-left: auto;
`;

export const ProductAmountValue = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #eee;
    border-radius: 4px;
    padding: 5px;
    flex-wrap: wrap;
`;

export const RemoveItem = styled.TouchableOpacity`
    margin-left: 10px;
`;

export const ProductAmount = styled.Text`
    background-color: #ffffff;
    height: 95%;
    width: 30px;
    text-align: center;
    margin-left: 5px;
    margin-right: 5px;
    border-color: #ddd;
    border-width: 1px;
    padding: 5px;
`;

export const AddItem = styled.TouchableOpacity`
    margin-right: 15px;
`;

export const TotalItem = styled.Text`
    font-weight: bold;
    font-size: 14px;
    margin-left: 130px;
`;

export const TotalProduct = styled.View`
    display: flex;
    align-items: center;
    margin: 10px;
`;

export const TotalText = styled.Text`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    color: #999;
`;

export const TotalAmount = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #000;
`;

export const ButtonCheckout = styled(RectButton)`
    width: 95%;
    margin-top: 20px;
    background-color: #7159c1;
    border-radius: 4px;
`;

export const ButtonCheckoutText = styled.Text`
    padding: 15px 0;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
`;
