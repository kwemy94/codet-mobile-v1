import { View, Text, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Octicons } from '@expo/vector-icons';

const Login = ({ navigation }) => {

  const [loading, setLoading] = useState(false);

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleLogin = () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert('Connexion', 'Veuillez remplir tous les champs');
      return;
    }

    setLoading(true);
    // const response = await login(emailRef.current, passwordRef.current);
    console.log('email: ' + emailRef.current + ' Password: ' + passwordRef.current);
    emailRef.current = null;
    passwordRef.current = null;
    navigation.navigate('home')
    setLoading(false);
    // console.log('Connexion: ', response);
    // if (!response.success) {
    //   Alert.alert('Connexion', response.msg);
    // }
  }

  return (
    <ScrollView>
      <View style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }} className='flex-1 gap-10'>
        {/*Image de connexion*/}
        <View className='items-center'>
          <Image
            source={require('../../assets/login.png')}
            style={{ height: hp(24) }}
            resizeMode='contain'
          />
        </View>

        <View>
          <Text style={{ fontSize: hp(4) }} className='font-bold tracking-wider text-center text-neutral-800 mb-5'>Connexion</Text>
          {/* Inputs */}

          <View className='gap-1'>
            <View className='gap-4'>
              <View style={{ height: hp(8) }} className='flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl pb-3'>
                <Octicons name='mail' size={hp(4)} color="gray" />
                <TextInput
                  onChangeText={value => emailRef.current = value}
                  style={{ fontSize: hp(2) }}
                  className='flex-1 font-semibold text-neutral-700'
                  placeholder='Adresse mail'
                  placeholderTextColor={'gray'}
                />
              </View>
            </View>

            <View className='gap-4'>
              <View style={{ height: hp(8) }} className='flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl'>
                <Octicons name='lock' size={hp(4)} color="gray" />
                <TextInput
                  onChangeText={value => passwordRef.current = value}
                  style={{ fontSize: hp(2) }}
                  className='flex-1 font-semibold text-neutral-700'
                  placeholder='Password'
                  placeholderTextColor={'gray'}
                  secureTextEntry
                />
              </View>
              <Text style={{ fontSize: hp(1.8) }} className='font-semibold text-right text-neutral-400'>Mot de passe oublié ?</Text>
            </View>
          </View>

          {/* Boutton de connexion */}

          <View className='mt-3'>
            {
              loading ? (
                <View className='flex-row justify-center'>
                  <ActivityIndicator size={hp(8)} />
                </View>
              )
                :
                (
                  <TouchableOpacity
                    style={{ height: hp(6.5) }}
                    className='bg-indigo-500 rounded-xl justify-center items-center'
                    onPress={handleLogin}
                  >
                    <Text style={{ fontSize: hp(2.7) }} className='text-white font-bold tracking-wider'>Se connecter</Text>
                  </TouchableOpacity>
                )
            }
          </View>

          {/* text d'inscription */}

          <View className='flex-row justify-center mt-5'>
            <Text style={{ fontSize: hp(1.9) }} className='font-semibold text-neutral-500'>Vous n'avez pas de compte ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('register')}>
              <Text style={{ fontSize: hp(1.9) }} className='font-bold text-indigo-500'>Inscription</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </ScrollView>
  )
}

export default Login