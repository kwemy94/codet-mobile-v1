import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Codet from '../components/Codet';
import Login from '../components/Login';
import FaireUnDon from '../components/FaireUnDon';
import Register from '../components/Register';
import Home from '../components/Home';

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Codet" component={Codet} options={{
                headerTitle:"Codet 1"
            }} />
            <Stack.Screen name='login' component={Login} options={{
                headerShown:false
            }} />
            <Stack.Screen name='don' component={FaireUnDon} />
            <Stack.Screen name='register' component={Register} options={{
                headerShown:false
            }} />
            <Stack.Screen name='home' component={Home} />
        </Stack.Navigator>
    )
}

export default StackNav