import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image,ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const background = require("./img/background2.png");

export default class Home extends React.Component {
  post=()=>{
    this.props.navigation.navigate('Post');
  }
  render() {
    return (
    <View style={styles.containerMain}>
        <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
    
    
        <View style={styles.header}>
            <Image
                source={require("./img/logo2.png")} style={{width: 230, height: 170, marginTop:20}}
            />
        </View>

        <View style={styles.Mainmenu}>
            <View style={styles.menu}>
                <TouchableHighlight onPress={this.post}>
                <Image
                    source={require("./img/add.png")} style={{width: 150, height: 150}}
                />
                </TouchableHighlight>

                <TouchableHighlight style={styles.menu1} onPress={this.post}>
                     <Text style={styles.textMenu}>Tambah Buku</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menu1}>
                <Image
                    source={require("./img/edit.png")} style={{width: 150, height: 150}}
                />
                <Text style={styles.textMenu}>Update Buku</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.Mainmenu}>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menu1}>
                <Image
                    source={require("./img/findbook.png")} style={{width: 150, height: 150}}
                />
                <Text style={styles.textMenu}>Cari Buku</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menu1}>
                <Image
                    source={require("./img/buybook.png")} style={{width: 150, height: 150}}
                />
                <Text style={styles.textMenu}>Pembelian Buku</Text>
                </TouchableOpacity>
            </View>

        </View>
        

      
        </ImageBackground>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    containerMain: {
    backgroundColor: '#ffffff',
    flex: 1,
  },

  textMenu:{
      color:'white',
  },

  header:{
    alignItems:'center',
    flex:1,
  },

  menu1:{
      alignItems:'center'
  },
  Mainmenu :{
    flex:1,
    flexDirection:'row'
  },
  menu:{
    borderRadius:1,
    borderWidth:1,
    borderColor:'#fff',
    margin:5,
    borderColor:'white',
    alignItems:'center',
    justifyContent: 'center',
    flex:1,
    flexDirection:'column',
  }
  
});
