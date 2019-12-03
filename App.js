import React,{useState} from 'react';
import MapView from 'react-native-maps';
import { Button,StyleSheet, View, Dimensions } from 'react-native';

export default function App() {
  const initialState = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  const [region, setRegion] = useState(initialState)
const newRegion = { 
  latitude:20.593683,
        longitude:78.962883,
        latitudeDelta:0.922,
        longitudeDelta:0.0421
}
const ser =(region) => {
  setRegion(newRegion)
}

    return (
      <View style={styles.container}>
    <MapView  
         initialRegion={region}
         showsUserLocation={true}
         showsCompass={true}
         rotateEnabled={false}
         style={styles.mapStyle}
         onRegionChange={ser}
        />
        
        <View  style={styles.btn}>
          
        <Button onPress={() => {
          console.log('object')
          setRegion(newRegion)
          console.log(region)
        }
        }  title="dabaoo" />

        </View>
              </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  btn: {
    zIndex:999
  }
});