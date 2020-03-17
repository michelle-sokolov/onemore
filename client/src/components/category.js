import React, { Component } from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     ImageBackground,
// } from 'react-native';

export default class Category extends Component {
    render() {
        return (

            // <ImageBackground source={require('./images/tree.JPEG')} styles={StyleSheet.container}>
                <div className='homeTitle'>
                    <h1>
                        Categories
                    </h1>
                    <div className='barrels'>
                        <a href='/search'>
                            <strong>Oak Barrells</strong>
                            <span>>></span>
                        </a>
                    </div>
                    <div className='cribbage'>
                        <a href='/search'>
                            <strong>Cribbage Boards</strong>
                            <span>>></span>
                        </a>
                    </div>
                    <div className='coffee'>
                        <a href='/search'>
                            <strong>Coffee Tables</strong>
                            <span>>></span>
                        </a>
                    </div>
                    <div className='cutting'>
                        <a href='/search'>
                            <strong>Cutting Boards</strong>
                            <span>>></span>
                        </a>
                    </div>
                    <div className='benches'>
                        <a href='/search'>
                            <strong>Outdoor Benches</strong>
                            <span>>></span>
                        </a>
                    </div>
                </div>
            // </ImageBackground>

        )
    }
}
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: "center"

//     }
// })

