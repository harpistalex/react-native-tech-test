import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

const styles = StyleSheet.create({
  heading: {
    fontSize: 48,
    fontFamily: "BebasNeue",
  },
  body: {
    fontSize: 14,
    fontFamily: "Montserrat",
  },
});

interface Props extends TextProps {
  type?: "heading" | "body";
}

const AppText: React.FC<Props> = ({ type = "body", ...textProps }) => {
  return (
    <Text
      {...textProps}
      style={[
        type === "heading" ? styles.heading : styles.body,
        textProps.style,
      ]}
    />
  );
};

export default AppText;
