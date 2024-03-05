import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "./pages/Home"
import { SavedPasswords } from "./pages/SavedPasswords"

const Tab = createBottomTabNavigator()

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="savedPasswords"
                component={SavedPasswords}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}
