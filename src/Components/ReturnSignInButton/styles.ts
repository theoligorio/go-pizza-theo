import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  /* align-items: center; */
  margin-top: 32px;
  margin-left: 30px;
  width: 50px;
  height: 50px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(25)}px;
  color: ${( {theme} ) => theme.COLORS.BACKGROUND};
`;