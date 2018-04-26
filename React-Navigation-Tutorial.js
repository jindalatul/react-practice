import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ marginTop: 50 }}>Hello Profile!</Text>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Profile')}>
          <Text>Press here for the Dashboard</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ marginTop: 50 }}>Search!</Text>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Home')}>
          <Text>
            <Text style={{ marginTop: 50 }}>Search!</Text>
            Press here for the Dashboard
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Settings extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ marginTop: 50 }}>Settings</Text>
      </View>
    );
  }
}

class Profile extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ marginTop: 50 }}>Profile</Text>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
          <Text>
            <Text style={{ marginTop: 50 }}>Search!</Text>
            Press here for the Dashboard
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const HomeStack = StackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
});


const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
  },
  Search: {
    screen: Search,
  },
  Settings: {
    screen: Settings,
  },
});
//
export default class App extends React.Component {
  render() {
    return <Tabs />;
  }
}
