import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Title } from "./Styles"

interface Props extends TouchableOpacityProps{
  title: String;
}

export function Button({title, ...rest}: Props) {

  const navigation = useNavigation();

    return (
      <Container {...rest} onPress={() => navigation.navigate("Request")}>
        <Title>{title}</Title>
      </Container>
    )
}