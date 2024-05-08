import axios from "axios";
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../services/weatherslice";
import { useNavigation } from "@react-navigation/native";
import weatherList from "./weatherList";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";
export function Weather() {
  const animation = useRef(null);

  const [city, setCity] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  async function fetchData() {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=0aa904663d2b4d069c693053242504&q=${city}&aqi=no`
      );
      const data = response.data;

      dispatch(addData(data));
      navigation.navigate("weatherList");
    } catch (error) {
      alert("lütfen bir şehir giriniz");
    } finally {
      setCity("");
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <LottieView
        autoPlay
        resizeMode="contain"
        ref={animation}
        speed={1}
        style={{
          width: 300,
          height: 300,
          backgroundColor: "white",
          marginTop: 50,
        }}
        source={require("../assets/anim.json")}
      />

      <View
        style={{
          width: "100%",
          height: "100%",
          marginTop: 80,
          backgroundColor: "white",
          alignItems: "center",
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
        }}
      >
        <TextInput
          style={{
            width: 350,
            height: 50,
            borderWidth: 2,
            borderRadius: 20,
            textAlign: "center",
            marginTop: 10,
          }}
          value={city}
          onChangeText={setCity}
          placeholder="enter a city..."
        />
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,

            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => fetchData()}
        >
          <LottieView
            autoPlay
            resizeMode="contain"
            ref={animation}
            speed={1}
            style={{
              width: 250,
              height: 150,
              backgroundColor: "white",
              marginTop: 180,
            }}
            source={require("../assets/anim2.json")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Weather;
