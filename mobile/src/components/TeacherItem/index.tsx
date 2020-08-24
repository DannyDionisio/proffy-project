import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: "http://github.com/DannyDionisio.png" }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Daniela Dionísio</Text>
          <Text style={styles.subject}>Programação</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Comecei por estudar por conta própria e posteriormente fiz o Web
        Developer Bootcamp onde desenvolvi os meus conhecimentos, fiz 3 projetos
        e um Hackton.
        {"\n"}
        {"\n"}
        Agora mesmo continuando a estudar, estou disponível para abraçar novos
        desafios.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"   "}
          <Text style={styles.priceValue}>60 €</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/*<Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
