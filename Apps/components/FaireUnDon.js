import { View, Text, ScrollView, Image, TextInput, ActivityIndicator, TouchableOpacity, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Octicons, Feather } from '@expo/vector-icons';

const FaireUnDon = ({ navigation }) => {

  const [loading, setLoading] = useState(false);


  const emailRef = useRef('');
  const passwordRef = useRef('');
  const usernameRef = useRef('');

  const handleRegister = async () => {
    if (!emailRef.current || !passwordRef.current || !usernameRef.current) {
      Alert.alert('Inscription', 'Veuillez remplir tous les champs');
      return;
    }

    setLoading(true);

    //let response = await register(emailRef.current, passwordRef.current, usernameRef.current);
    console.log('Register reussi')
    emailRef.current = null;
    passwordRef.current = null;
    usernameRef.current = null;
    Alert.alert('Merci', 'Merci pour votre don')
    setLoading(false);

  }

  return (
    <ScrollView>
      <View style={{ paddingTop: hp(7), paddingHorizontal: wp(5) }} className='flex-1 gap-10'>
        {/*Image de connexion*/}
        <View className='items-center'>
          <Image
            source={require('../../assets/ball.jpg')}
            style={{ height: hp(24) }}
            resizeMode='contain'
          />
        </View>

        <View>
          <Text style={{ fontSize: hp(4) }} className='font-bold tracking-wider text-center text-neutral-800 mb-5'>Faire un don</Text>
          {/* Inputs */}
          <View className='gap-4'>

            <View style={{ height: hp(8) }} className='flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl pb-3'>
              <Feather name='user' size={hp(4)} color="gray" />
              <TextInput
                onChangeText={value => usernameRef.current = value}
                style={{ fontSize: hp(2) }}
                className='flex-1 font-semibold text-neutral-700'
                placeholder="Nom d'utilisateur"
                placeholderTextColor={'gray'}
              />
            </View>

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
            <View style={{ height: hp(8) }} className='flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl pb-3'>
              <Octicons name='lock' size={hp(4)} color="gray" />
              <TextInput
                onChangeText={value => passwordRef.current = value}
                style={{ fontSize: hp(2) }}
                className='flex-1 font-semibold text-neutral-700'
                placeholder='Password'
                secureTextEntry
                placeholderTextColor={'gray'}
              />
            </View>

            {/* Boutton de connexion */}

            <View>
              {
                loading ? (
                  <View className='flex-row justify-center'>
                    <ActivityIndicator size='large' />
                  </View>
                )
                  :
                  (
                    <TouchableOpacity
                      style={{ height: hp(6.5) }}
                      className='bg-indigo-500 rounded-xl justify-center items-center'
                      onPress={handleRegister}
                    >
                      <Text style={{ fontSize: hp(2.7) }} className='text-white font-bold tracking-wider'>Valider</Text>
                    </TouchableOpacity>
                  )
              }
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default FaireUnDon