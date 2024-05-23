import { View, Text, StyleSheet, FlatList, Image, ScrollView, Button, Alert, ActivityIndicator, TouchableOpacity } from 'react-native'
import { DATA } from '../data/dataImage'
import { useState } from 'react'

const Codet = ({ navigation }) => {


  const handlePressDon = () => {
    navigation.navigate('don')
  }

  const handlePressLogin = () => {
    navigation.navigate('login')
  }

  return (
    <View style={styles.container}>
      <View style={styles.entete}>

        <TouchableOpacity
          onPress={handlePressDon}
          style={styles.don}
        >

          <Text style={styles.textLogin}>Faire un don</Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePressLogin}
          style={styles.login}
        >

          <Text style={styles.textLogin}>Login</Text>

        </TouchableOpacity>

      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </ScrollView>
      <View>
        <FlatList
          data={DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image source={{ uri: item.img }} style={styles.image} />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    height: 100,
    width: 350,
    margin: 5
  },
  entete: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 5
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  text: {
    textAlign: 'justify',

  },
  login: {
    backgroundColor: '#007BFF',
    padding: 8,
    
    marginTop: 6,
  },
  don: {
    backgroundColor: '#007BFF',
    padding: 8,
    marginTop: 6,
  },
  textLogin: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15
  }
})

export default Codet