import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Codet from '../components/Codet';
import Login from '../components/Login';
import FaireUnDon from '../components/FaireUnDon';

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Codet" component={Codet} options={{
                headerTitle:"Codet 1"
            }} />
            <Stack.Screen name='login' component={Login} />
            <Stack.Screen name='don' component={FaireUnDon} />
        </Stack.Navigator>
    )
}

export default StackNav