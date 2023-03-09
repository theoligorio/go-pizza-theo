import styled, {css} from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

type ContainerProps = {
  index: number;
}

export type StatusTypesProps = 'Preparando' | 'Pronto' | 'Entregue';

type StatusProps = {
  status: StatusTypesProps;
}

export const Container = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  justify-content: center;
`;

export const AreaImage = styled.View``;

export const Image = styled.Image`
  width: 104px;
  height: 104px;
  margin-right: 4px;
  margin-top: 36px;
`;

export const AreaDescription = styled.View`
  flex: 1;
  align-items: center;
`;
export const TitleArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  margin-bottom: 11px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SECONDARY_500};
  margin-bottom: 14px;
`;

export const StatusContainer = styled.View<StatusProps>`
  padding: 4px 16px;
  border-radius: 12px;
  margin-top: 16px;
  align-items: center;
  justify-content: center;

  ${({ status, theme }) => status === 'Preparando' && css`
    background-color: ${theme.COLORS.ALERT_50};
    border: 1px solid ${theme.COLORS.ALERT_900};
  `};

  ${({ status, theme }) => status === 'Pronto' && css`
    background-color: ${theme.COLORS.SUCCESS_900};
  `};

  ${({ status, theme }) => status === 'Entregue' && css`
    background-color: ${theme.COLORS.SECONDARY_900};
  `};
`;

export const StatusLabel = styled.Text<StatusProps>`
  font-size: 12px;
  line-height: 20px;

  ${({ status, theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${status === 'Preparando' ? theme.COLORS.ALERT_900 : theme.COLORS.TITLE};
  `};
`

export const ContainerText = styled.Text<TypeProps>`
  font-size: 12px;
  font-family: ${({theme}) => theme.FONTS.TEXT};
  color: ${({theme}) => theme.COLORS.TITLE};

  ${({ type, theme }) => css`
    color: ${type === 'Preparando' ? theme.COLORS.TITLE : theme.COLORS.TITLE};
  `};
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  margin: 14px 0;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;
