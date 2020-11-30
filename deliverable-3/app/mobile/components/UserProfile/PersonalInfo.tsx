
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import colors from '../../constants/Colors';

export default function PersonalInfo(props) {
    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            alignItems: 'center', 
            // backgroundColor: 'yellow'
        },     
        userAvatar: {
            width: 150,
            height: 150,
            borderRadius: 150/2
        }, name: {
            padding: 15,
            color: colors.offWhite, 
            fontSize: 18,
            fontWeight: 'bold'
        }

    });
    const {firstname, lastname} = props
    const avatarURI = "https://ui-avatars.com/api?name=" + "Joshua" + "+" + "Chua" + "&background=" + colors.greenRaw + "&color=" + colors.offWhiteRaw + "&size=" + 512; 

    return (
        <View style={styles.container}>
            <Image style={styles.userAvatar}source={{ uri: avatarURI}}/>
            <Text style={styles.name}>{firstname + " " + lastname} </Text> 
        </View> 
        
    )
}