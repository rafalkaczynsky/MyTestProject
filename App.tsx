import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View
} from 'react-native';


export interface AppProps {

}

export interface AppState {
    isVisible: boolean;
    text: string;
}

class App extends React.Component<AppProps, AppState>{
    state: AppState;

    constructor(props){
        super(props);

        this.state = {
            isVisible: true,
            text: "RAF"
        }
    }
    render(){
        return (
                <View style={{flex: 1, backgroundColor: 'lighgrey',  alignItems: 'center', justifyContent: 'space-around'}}>
                    <Text style={{fontSize: 17}}>Hello I'm App</Text>
                    <View >
                        <Text style={{fontSize: 17}}>Hello johny</Text>
                    </View>
                </View>
      );
    }
}

const styles = StyleSheet.create({

});

export default App;
