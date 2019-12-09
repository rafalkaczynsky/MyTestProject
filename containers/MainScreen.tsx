import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import { User } from '../models/user';
import { selectUser } from '../actions';

export interface MainScreenProps {
  users: User[];
  videos: any[];
  activeUser: User;
  selectUser: (user: User) => void;
}

export interface MainScreenState {}

class MainScreen extends React.Component<MainScreenProps, MainScreenState> {
  props: MainScreenProps;

  static navigationOptions = {
    title: 'Main Screen',
  };

  constructor(props: any) {
    super(props);
  }

  renderUserItem = (item: User) => {
    return (
      <View key={item.id} style={styles.itemListContainer}>
        <TouchableOpacity onPress={() => this.props.selectUser(item)}>
          <Text style={styles.itelListText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderActiveUser = () => {
    const { activeUser } = this.props;
    return (
      <View style={styles.itemListContainer}>
        <Text>name: {activeUser.name}</Text>
        <Text>surname: {activeUser.surname}</Text>
        <Text>age: {activeUser.age}</Text>
      </View>
    );
  };

  render() {
    const { users, activeUser, navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Text style={{ color: 'black' }}>All Users</Text>
        {users.map((item: User) => this.renderUserItem(item))}
        <Text style={{ color: 'black' }}>Active user</Text>
        {activeUser && this.renderActiveUser()}
        {!activeUser && <Text>Select user...</Text>}
        <Button
          title={'Press me'}
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemListContainer: {
    flexDirection: 'row',
    backgroundColor: 'green',
    margin: 10,
    padding: 10,
  },
  itelListText: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 2,
  },
});

const mapStateToProps = (state: any) => ({
  users: state.users,
  videos: state.videos,
  activeUser: state.activeUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  selectUser: (user: User) => dispatch(selectUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
