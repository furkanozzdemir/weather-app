import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

function WeatherList() {
  const data = useSelector((state) => state.weather.data);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {data ? (
        <View style={styles.container}>
          <LinearGradient colors={["#36D1DC", "#5B86E5"]} style={{ flex: 1 }}>
            <View>
              <Image
                source={{ uri: `https:${data.current.condition.icon}` }}
                style={{
                  width: 400,
                  height: 250,
                  alignSelf: "center",
                  marginTop: 10,
                }}
              />
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 70,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {data.current.temp_c}°C
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 30,
                    marginBottom: 10,
                    color: "white",
                  }}
                >
                  {data.location.name}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 45,
                marginTop: 70,
              }}
            >
              <View style={{ gap: 10, alignItems: "center" }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    color: "white",
                    marginLeft: 10,
                  }}
                >
                  humidity
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 24,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {data.current.humidity}%
                </Text>
              </View>
              <View style={{ gap: 10, alignItems: "center" }}>
                <Text
                  style={{ textAlign: "center", fontSize: 16, color: "white" }}
                >
                  feelslike
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 24,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {data.current.feelslike_c}°C
                </Text>
              </View>
              <View style={{ gap: 10, alignItems: "center" }}>
                <Text
                  style={{ textAlign: "center", fontSize: 16, color: "white" }}
                >
                  wind
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 24,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {data.current.wind_mph} mph
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 600,
    backgroundColor: "white",

    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 35,
    elevation: 40,
  },
});

export default WeatherList;
