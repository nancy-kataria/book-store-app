import { CurrentRenderContext } from "@react-navigation/native";
import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";

export default function MyAccount() {
  return (
    <View style={{ marginTop: SIZES.padding, alignContent: "center" }}>
      {/* <Text
        style={{
          ...FONTS.h2,
          paddingLeft: 130,
          color: COLORS.black,
          paddingTop: 14,
          paddingBottom: 14,
          marginBottom: 10,
          backgroundColor: COLORS.white,
          alignItems: "center",
          flexDirection : 'column'
        }}
      >
      
        Nancy Kataria
      </Text> */}
      <View style={{...FONTS.h2,
          paddingLeft: 130,
          color: COLORS.black,
          paddingTop: 14,
          paddingBottom: 14,
          marginBottom: 10,
          backgroundColor: COLORS.white,
          alignItems: "center",
          flexDirection : 'column'}}>

      </View>
      <Text
        style={{
          ...FONTS.h2,
          paddingLeft: SIZES.padding,
          color: COLORS.black,
          paddingTop: 14,
          paddingBottom: 14,
          marginBottom: 10,
          backgroundColor: COLORS.white,
        }}
      >
        Saved Books
      </Text>
      <Text
        style={{
          ...FONTS.h2,
          paddingLeft: SIZES.padding,
          color: COLORS.black,
          paddingTop: 14,
          paddingBottom: 14,
          marginBottom: 10,
          backgroundColor: COLORS.white,
        }}
      >
        Search{"       "}
        <Image
          source={icons.search_icon}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
          }}
        />
      </Text>
      <Text
        style={{
          ...FONTS.h2,
          paddingLeft: SIZES.padding,
          color: COLORS.black,
          paddingTop: 14,
          paddingBottom: 14,
          marginBottom: 10,
          backgroundColor: COLORS.white,
        }}
      >
        Settings
      </Text>
      <Text
        style={{
          ...FONTS.h2,
          paddingLeft: SIZES.padding,
          color: COLORS.black,
          paddingTop: 14,
          paddingBottom: 14,
          marginBottom: 10,
          backgroundColor: COLORS.white,
        }}
      >
        Help & Feedback
      </Text>
    </View>
  );
}
