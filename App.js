
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './Apps/Navigation/StackNav';

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
} 

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
