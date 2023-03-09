import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${( {theme} ) => theme.COLORS.PRIMARY_900};
  border: 0.5px solid ${({theme}) => theme.COLORS.SHAPE};
  border-radius: 12px;
`;


export const Icon = styled(Feather)`
  font-size: ${RFValue(25)}px;
  color: ${( {theme} ) => theme.COLORS.BACKGROUND};
`;