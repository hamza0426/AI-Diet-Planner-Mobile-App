import Colors from "@/shared/Colors";
import { Text, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";

export default function Button({ title, onPress,icon ,loading = false }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={{
        padding: 13,
        backgroundColor: Colors.PRIMARY,
        width: "100%",
        borderRadius: 20,
      }}
    >
      {loading?<ActivityIndicator color ={Colors.WHITE}/>:
      <Text
        style={{
          fontSize: 20,
          color: Colors.WHITE,
          textAlign: "center",
        }}
      >
        {icon}
        {title}
      </Text>
}
    </TouchableOpacity>
  );
}
