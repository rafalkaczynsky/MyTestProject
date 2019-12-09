import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Fontisto';
interface OtherScreenProps {
    //..
}

interface OtherScreenState {

}

class OtherScreen  extends React.Component<OtherScreenProps, OtherScreenState>{

    static navigationOptions = {
        title: 'Other Screen',
        tabBarBadge: true,
        // tabBarIcon: <Icon name="camera" color={"red"} size={38} />,
        tabBarOptions: {
            labelStyle: {
              fontSize: 12,
            },
            tabStyle: {
              width: 100,
            },
            style: {
              backgroundColor: 'blue',
            },
          }


    };

    constructor(props: OtherScreenProps){
        super(props);
    }
    render(){
        return (
        <View>
            <Text>Super Other Screne</Text>
        </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
    //..user: state.user
})

const mapDispatchToProps = (dispatch: any) => ({
    //updateSomethin: (blabla: string) => dispatch(updateSomething(blabla))
})

export default connect(mapStateToProps,mapDispatchToProps)(OtherScreen);