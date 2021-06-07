import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';

// Components
import FloatingActionButon from './FloatingActionButon';

// Styles
import { CounterStyle } from '../styles/components/Counter.styles';
import { MainViewStyle } from '../styles/views/MainView.styles';
import { Pallete } from '../styles/Pallete.styles';

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const {counterText} = CounterStyle;
    const {mainViewContainer} = MainViewStyle;
    const { bgSuccess, bgDanger, bgPrimary } = Pallete;

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(0);

    return (
        <View
            style={[
                mainViewContainer,
                (counter === 0)
                    ? bgPrimary
                    : (counter > 0)
                        ? bgSuccess
                        : bgDanger
            ]}
        >
            <Text style={counterText}>
                {`Counter: ${counter}`}
            </Text>

            <FloatingActionButon 
                title={'+1'}
                onClick={increment}
                position={'br'}
                bg={'primary'}

            />

            <FloatingActionButon 
                title={'Reset'}
                onClick={reset}
                position={'bm'}
            />

            <FloatingActionButon 
                title={'-1'}
                onClick={decrement}
                position={'bl'}
                bg={'primary'}
            />
        </View>
    );
};
