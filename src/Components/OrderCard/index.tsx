import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  AreaImage,
  ContainerText,
  Image,
  AreaDescription,
  TitleArea,
  Title,
  Description,
  StatusContainer,
  Separator,
  StatusLabel,
  StatusTypesProps
} from "./Styles";

export type OrderProps = {
  id: string;
  title: string;
  image: string;
  status: StatusTypesProps;
  table_number: string;
  quantity: string;
}

type Props = TouchableOpacityProps & {
  index: number;
  data: OrderProps;
}

export function Card({data} : Props) {
  return (
    <Container>
      <AreaImage>
        <Image source={data.image} />
      </AreaImage>
      <AreaDescription>
        <TitleArea>
          <Title>{data.title}</Title>
        </TitleArea>
        <Description>
          {data.status}
        </Description>
        <StatusContainer status={data.status}>
        <StatusLabel status={data.status}>{data.status}</StatusLabel>
          </StatusContainer>
        <Separator></Separator>
      </AreaDescription>
    </Container>
  );
}