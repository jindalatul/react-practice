import React, { Component } from 'react';
import {  
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text,
  View} from 'react-native';
  
import { Constants } from 'expo';

const data = [
  {
    id:1,
    category:'restaurant',
    name:'Indian Restaurant', 
    address:'43393 Mission Blvd',
    city:'Fremont',
    logo:'logo.png'
  },
    {
    id:2,
    category:'restaurant',
    name:'Chinese Restaurant', 
    address:'43393 Mission Blvd',
    city:'Fremont',
    logo:'logo.png'
  },    
  {
    id:3,
    category:'restaurant',
    name:'Afgani Restaurant', 
    address:'43393 Mission Blvd',
    city:'Fremont',
    logo:'logo.png'
  },  
  {
    id:4,
    category:'restaurant',
    name:'Indian Restaurant', 
    address:'43393 Mission Blvd',
    city:'Fremont',
    logo:'logo.png'
  },
    {
    id:5,
    category:'restaurant',
    name:'Chinese Restaurant', 
    address:'43393 Mission Blvd',
    city:'Fremont',
    logo:'logo.png'
  },    
  {
    id:6,
    category:'restaurant',
    name:'Afgani Restaurant', 
    address:'43393 Mission Blvd',
    city:'Fremont',
    logo:'logo.png'
  }
];

const Item = (prop) => {
  return(
          <TouchableOpacity  onPress={()=> {
            alert('does not work'); }
          }>
            <View>
              <Text>{prop.row.name}</Text>
              <Text>{prop.row.address}</Text>
            </View>
          </TouchableOpacity>
      ) //return
}

class ListAllItems extends React.Component 
{
  constructor(props)
  {
       super(props);
  }
  render(){
    return(
      <ScrollView contentContainerStyle={styles.contentContainer}>
          {
            this.props.data.map((current) =>
              <Item row={current} />
            )
        }
      </ScrollView>
      ) //return
  }
}

export default class App extends Component 
{
  /*
  Declare data variable here
  */
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone!
          Save to get a shareable url.
        </Text>
          <ListAllItems data={data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
    contentContainer: {
    paddingVertical: 20
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
