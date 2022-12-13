import React, { useState } from "react";
// Import required components
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    ImagePickerIOS,
    Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "./components/config";

export default function App() {
    const [image, setImage] = useState(null);

    const pickPhoto = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    console.log(image);
    const upLoadImage = async () => {
        const response = await fetch(image);
        const blob = await response.blob();
        const filename = image.substring(image.lastIndexOf("/") + 1);
        var ref = firebase.storage().ref().child(filename).put(blob);
        try {
            await ref;
        } catch (error) {
            Alert.alert(e);
        }
        setImage(null);
    };

    return (
        <View>
            <TouchableOpacity style={{ marginTop: 20 }} onPress={pickPhoto}>
                <Text>aaaa</Text>
            </TouchableOpacity>
            <View style={{ height: 350, borderWidth: 1 }}>
                {image && (
                    <Image
                        source={{ uri: image }}
                        style={{ height: 150, width: 300 }}
                    ></Image>
                )}
                <TouchableOpacity
                    style={{ marginTop: 20 }}
                    onPress={upLoadImage}
                >
                    <Text>Upload</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
    },
    titleText: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 20,
    },
    textStyle: {
        backgroundColor: "#fff",
        fontSize: 15,
        marginTop: 16,
        color: "black",
    },
    buttonStyle: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#DDDDDD",
        padding: 5,
    },
    imageIconStyle: {
        height: 20,
        width: 20,
        resizeMode: "stretch",
    },
});
