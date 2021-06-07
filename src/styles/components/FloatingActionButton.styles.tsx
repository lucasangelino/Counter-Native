import { StyleSheet } from 'react-native';

export const fabStyles = StyleSheet.create({
    fab: {
        backgroundColor: '#5856D6',
        borderRadius: 100,
        width: 80,
        height: 80,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    locationRight: {
        right: 25
    },
    locationLeft: {
        left: 25
    },
    locationMiddle: {
        alignSelf: 'center'
    },
    fabText: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center'
    },
});