import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Codet from '../components/Codet';

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Codet" component={Codet} options={{
                headerTitle:"Codet 1"
            }} />
        </Stack.Navigator>
    )
}

export default StackNav