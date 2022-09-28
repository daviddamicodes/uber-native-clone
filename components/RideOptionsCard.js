import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  const data = [
    {
      id: "Uber-X-123",
      title: "Uber X",
      multiplier: 1,
      image: "http://links.papareact.com/3pn",
    },
    {
      id: "Uber-XL-456",
      title: "Uber XL",
      multiplier: 1.2,
      image: "http://links.papareact.com/5w8",
    },
    {
      id: "Uber-LUX-789",
      title: "Uber LUX",
      multiplier: 1.75,
      image: "http://links.papareact.com/7pf",
    },
  ];

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="font-awesome" size={16} />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>
      <FlatList
        data={data}
        //you can destructure item and still pass item itself here
        renderItem={({ item: { id, image, title, multiplier }, item }) => (
          <TouchableOpacity
            style={tw.style(
              id === selected?.id && "bg-gray-200",
              "flex-row items-center justify-between px-10"
            )}
            onPress={() => setSelected(item)}
          >
            <Image
              source={{
                uri: image,
              }}
              style={{
                width: 100,
                height: 100,
              }}
              resizeMode="contain"
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Travel Time...</Text>
            </View>
            <Text style={tw`text-xl`}>$99</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <View>
        <TouchableOpacity
          style={tw.style("bg-black py-3 m-3", !selected && "bg-gray-300")}
          disabled={!selected}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Ride with {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
