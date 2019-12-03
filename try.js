// import React, { Component } from 'react';

// import {MapView,Permissions,Location} from 'expo';
// import { StyleSheet, View, Dimensions } from 'react-native';

// export default class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       region:{
//         Latitude:37.78825,
//         Longitude:-122.4324,
//         LatitudeDelta:0.922,
//         LongitudeDelta:0.0421,
//       }
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>
//           it worked
//         </Text>
//         <MapView  
//          initialRegion={this.state.region}
//          showsUserLocation={true}
//          showsCompass={true}
//          rotateEnabled={false}
//          style={{flex:1}}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   mapStyle: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });

import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import {MapView,Permissions,Location} from 'react-native-maps';
export default class GeneralExample extends Component {

  constructor(props){
    super(props);
    this.state={
      region:{
        Latitude:37.78825,
        Longitude:-122.4324,
        LatitudeDelta:0.922,
        LongitudeDelta:0.0421,
      }
    }
  }
  render() {
    return (
      <Container>
        <Text>
          it worked
        </Text>
        <MapView  
         initialRegion={this.state.region}
         showsUserLocation={true}
         showsCompass={true}
         rotateEnabled={false}
         style={{flex:1}}
        />
      </Container>
    );
  }
}

