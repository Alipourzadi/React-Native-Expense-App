import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ManageExpence from "./screens/ManageExpence";
import RecentExpences from "./screens/RecentExpences";
import AllExpences from "./screens/AllExpences";
import { GlobalStyles } from "./constants/GlobalStyles";
import IconButton from "./components/UI/IconButton";
import { Provider } from "react-redux";
import store from "./store/Store";

const Stack = createNativeStackNavigator();
const bottomTabs = createBottomTabNavigator();

function ExpencesOverview() {
  return (
    <bottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "white",
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={34}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      })}
    >
      <bottomTabs.Screen
        name="RecentExpences"
        component={RecentExpences}
        options={{
          title: "Recent Expences",
          tabBarLabel: "Recent",
          tabBarLabelStyle: { fontSize: 11, paddingBottom: 2 },
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <bottomTabs.Screen
        name="AllExpences"
        component={AllExpences}
        options={{
          title: "All Expences",
          tabBarLabel: "All Expences",
          tabBarLabelStyle: { fontSize: 11, paddingBottom: 2 },
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </bottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="ExpencesOverview"
              component={ExpencesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpence}
              options={{
                presentation: "modal",
                headerStyle: {
                  backgroundColor: GlobalStyles.colors.primary400,
                },
                headerTintColor: "white",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
