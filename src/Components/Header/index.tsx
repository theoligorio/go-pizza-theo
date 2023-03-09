import React from "react";
import { Container, Button, Text, Heading } from "./styles";
import { AntDesign } from "@expo/vector-icons";

export function Header() {
  return (
    <Container>
      <Heading>
        <Button>
          <AntDesign name="left" size={18} color="#fff" />
        </Button>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          Pedidos Feitos
        </Text>
      </Heading>
    </Container>
  );
}





