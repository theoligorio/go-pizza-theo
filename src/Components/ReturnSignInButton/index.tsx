import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { 
  Container,
  Icon,
} from './styles';

interface Props extends TouchableOpacityProps{
  name: string
}

export function ReturnSignInButton({ name } : Props) {

  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate("SignIn")}>
      <Icon name={name} />
    </Container>
  )
}