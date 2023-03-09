import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';


export const Container = styled.View`
  flex: 1;
  background-color: ${( {theme} ) => theme.COLORS.BACKGROUND};
  `;
  
export const Header = styled(LinearGradient).attrs({
  colors: ["#B83341", "#E03F50"],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
})`  
    width: 100%;
    height: ${RFValue(50)}px;
    align-items: center;
    justify-content: flex-end;
  `;
export const Text = styled.Text`
  color: ${( {theme} ) => theme.COLORS.SHAPE};
  margin-top: ${RFValue(24)}px;
  font-size: ${RFValue(24)};
  font-family: ${( {theme} ) => theme.FONTS.TITLE};
`;
export const View = styled.View`
  flex: 1;
  background-color: ${( {theme} ) => theme.COLORS.BACKGROUND};
`;
export const Icon = styled(Entypo)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const IconAreaButton = styled.TouchableOpacity``;