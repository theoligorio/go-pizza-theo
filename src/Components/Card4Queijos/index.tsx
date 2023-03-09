import React from "react";
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
  Separator
} from "./Styles";

interface Props {
  image: string;
  title: string;
  description: string;
  status: string;
  type: "Pronto" | "Preparando" | "Entregue";
}
interface CardProps {
  data: Props
  type: "Pronto" | "Preparando" | "Entregue";
}

export function Card({data, type} : CardProps) {
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
          {data.description}
        </Description>
        <StatusContainer>
          <ContainerText type = {type}>
            {data.status}
          </ContainerText>
        </StatusContainer>
        <Separator></Separator>
      </AreaDescription>
    </Container>
  );
}