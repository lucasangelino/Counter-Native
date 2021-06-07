import React from 'react'
import { Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native';

// Styles
import { fabStyles } from '../styles/components/FloatingActionButton.styles';
import { Pallete } from '../styles/Pallete.styles';

interface Props {
    title: string,
    position?: 'br' | 'bl' | 'bm',
    bg?: 'primary' | 'secondary',
    onClick: () => void,
};

const FloatingActionButon = ({title, onClick, position = 'br', bg}: Props) => {

    const { 
        fab, fabText, fabLocation, locationLeft,
        locationRight, locationMiddle 
    } = fabStyles;

    const { primary, secondary } = Pallete;

    const ios = () => {
        return (
            <>
                <TouchableOpacity
                    onPress={() => onClick()}
                    activeOpacity={0.5}
                        style={[
                            fabLocation,
                            (position === 'br') 
                                ? locationRight : (position === 'bl') 
                                ? locationLeft : locationMiddle
                        ]}            
                    >
                        <View style={[
                            fab,
                            (bg === 'primary') 
                                ? primary
                                : secondary
                        ]}>
                        <Text style={fabText}>
                            {title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </>
        );
    };

    const android = () => {
        return (
            <>
                <View
                    style={[
                        fabLocation,
                        (position === 'br') 
                            ? locationRight : (position === 'bl') 
                            ? locationLeft : locationMiddle
                    ]}            
                >
                    <TouchableNativeFeedback
                        onPress={() => onClick()}
                        background={ TouchableNativeFeedback.Ripple('white', false, 100) }
                    >
                        <View style={[
                            fab,
                            (bg === 'primary') 
                                ? primary
                                : secondary
                        ]}>
                            <Text style={fabText}>
                                {title}
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </>
        );
    };
    
    return (Platform.OS === 'android') ? android() : ios();
};

export default FloatingActionButon;
