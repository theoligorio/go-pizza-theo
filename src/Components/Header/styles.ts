import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  background-color: ${( {theme} ) => theme.COLORS.BACKGROUND};
    width: 100%;
    height: ${RFValue(120)}px;
    align-items: center;
    justify-content: flex-end;
`;

export const Heading = styled(LinearGradient).attrs({
    colors: ["#B83341", "#E03F50"],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 },
  })`  
      width: 100%;
      height: ${RFValue(120)}px;
      align-items: center;
      justify-content: flex-end;
    `;

export const Text = styled.Text`
  margin-top: 64px;
  color: ${( {theme} ) => theme.COLORS.SHAPE};
  font-size: ${RFValue(24)};
  font-family: ${( {theme} ) => theme.FONTS.TITLE};
  margin-bottom: 32px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
  border-width: 1px;
  padding: 14px;
`;

export const User = styled.View`
  text-align: center;
`;

export const UserGreething = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${RFValue(58)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const DeleteArea = styled.TouchableOpacity``;