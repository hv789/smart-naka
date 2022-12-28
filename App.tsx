import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import LocalAlertsScreen from "./screens/LocalAlertsScreen";
import SearchHistoryScreen from "./screens/SearchHistoryScreen";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type RootParamList = {
  HomeScreen: undefined;
  LocalAlertsScreen: undefined;
  SearchHistoryScreen: undefined;
  Tabbed: undefined;
};

const Tabs = createBottomTabNavigator<RootParamList>();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tabs.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            // headerTransparent: true,
            // headerTintColor: "#FFE15D",
            headerTitleAlign: "center",
            // headerShadowVisible: false,
            tabBarActiveBackgroundColor: "#FFF4B7",
            tabBarStyle: {
              // backgroundColor: "#FFAE35",
              backgroundColor: "#FFD56C",
              height: Platform.OS === "ios" ? 100 : 70,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              // borderRadius: 15,
              position: "absolute",
              // marginHorizontal: 10,
              // marginBottom: 7,
              // elevation: 5,
            },
            tabBarLabelStyle: {
              marginBottom: 8,
              fontSize: 14,
              fontWeight: "500",
            },
            tabBarItemStyle: {
              borderRadius: 12,
              margin: 5,
            },
            // tabBarActiveTintColor: "#E57A00",
            tabBarActiveTintColor: "#926900",
            tabBarInactiveTintColor: "#926900",
          }}
        >
          <Tabs.Screen
            name="SearchHistoryScreen"
            component={SearchHistoryScreen}
            options={{
              headerTitleStyle: {
                fontSize: 36,
                color: "#AF6A03",
                padding: 4,
              },
              headerStyle: {
                backgroundColor: "#fcf9f7",
                borderBottomWidth: 4,
                borderBottomColor: "#AF6A03",
              },
              headerTintColor: "#AF6A03",
              title: "Search History",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="time" color={color} size={size} />
              ),
            }}
          />

          <Tabs.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />

          <Tabs.Screen
            name="LocalAlertsScreen"
            component={LocalAlertsScreen}
            options={{
              headerTitleStyle: {
                fontSize: 36,
                color: "#FF6423",
                padding: 4,
              },
              headerStyle: {
                backgroundColor: "#fcf9f7",
                borderBottomWidth: 4,
                borderBottomColor: "#FF6423",
              },
              tabBarBadge: 3,
              title: "Local Alerts",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="alert-circle" color={color} size={size} />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </>
  );
}
