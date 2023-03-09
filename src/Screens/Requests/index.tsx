import React from "react";
import { FlatList, Pressable } from "react-native";
import { data } from "../../Utils/flavourPizzas";
import { Card } from "../../Components/OrderCard";
import { ItemSeparator } from "../../Components/ItemSeparator";
// import { Header } from "../../Components/Header";
import { TabsBar } from "../../Components/TabsBar";
import { ReturnSignInButton } from "../../Components/ReturnSignInButton";
import { Container, Icon, IconAreaButton, Text, Header} from "./Styles";
import { useNavigation } from "@react-navigation/native";

export function Requests() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <ReturnSignInButton name={"chevron-left"} />
        <Text>Pedidos feitos</Text>
      </Header>
      {/* <Header /> */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Card
            type={item.type}
            data={item}
            onPress={() => handlePizzaDelivered(item.id)}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ItemSeparator />}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 125 }}
      />
      <TabsBar />
    </Container>
  );
}
