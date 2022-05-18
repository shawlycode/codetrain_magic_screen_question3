import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/bg1.jpg")}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.innerContainer}>
          <View style={{ width: "100%", height: "50%" }}>
            <Image
              source={require("./assets/joo.jpg")}
              blurRadius={15}
              style={styles.profileBg}
            />
            <View style={{ position: "absolute", top: 40, left: 80 }}>
              <View style={styles.profileContainer}>
                <Image
                  source={require("./assets/joo.jpg")}
                  style={styles.profileImg}
                />
              </View>
            </View>
          </View>
          <View
            style={{ position: "absolute", bottom: 0, top: 260, left: 170 }}
          >
            <MaterialCommunityIcons
              name="police-badge"
              size={50}
              color="#4a5759"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>Mike Parker</Text>
            <Text style={styles.description}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content
            </Text>
          </View>
          <View style={styles.icons}>
            <View style={styles.socialIcons}>
              <FontAwesome5 name="facebook-f" size={30} color="#f72585" />
            </View>
            <View style={styles.socialIcons}>
              <FontAwesome5 name="twitter" size={30} color="#f72585" />
            </View>
            <View style={styles.socialIcons}>
              <FontAwesome5 name="google-plus-g" size={30} color="#f72585" />
            </View>
            <View style={styles.socialIcons}>
              <FontAwesome5 name="instagram" size={30} color="#f72585" />
            </View>
            <View style={styles.socialIcons}>
              <FontAwesome5 name="linkedin-in" size={30} color="#f72585" />
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: 380,
    height: 550,
    backgroundColor: "#ded9e2",
    borderRadius: 10,
    padding: 5,
    shadowColor: "#ffd6ff",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.78,
    elevation: 13,
  },
  profileContainer: {
    width: 207,
    height: 207,
    backgroundColor: "#f72585",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  profileBg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  profileImg: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: "cover",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#495057",
  },
  description: {
    marginVertical: 15,
    fontSize: 23,
    lineHeight: 30,
    letterSpacing: 0.5,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  socialIcons: {
    width: 55,
    height: 55,
    backgroundColor: "#4a5759",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    shadowColor: "#f72585",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 7.68,
    elevation: 8,
  },
});
