import React from 'react';
import styles from './Styles/NavigationStyles';
import InitPage from '../Containers/InitPage/InitPage';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View } from 'react-native';
import LoginPage from '../Containers/LoginPage/LoginPage';
import Ingredient from '../Containers/Ingredient/Ingredient';
import CloseButton from '../Components/CloseButton/CloseButton';
import PrincipalPage from '../Containers/PrincipalPage/PrincipalPage';
import SaveProduct from '../Containers/SaveProduct/SaveProduct';
import SaveIngredient from '../Containers/SaveIngredient/SaveIngredient';
import EditProduct from '../Containers/EditProduct/EditProduct';


const Routes = createAppContainer(

    createStackNavigator({

        ProfileScreenA:
        {
            screen: InitPage,
            navigationOptions: {
                header: null,
            }
        },

        LoginScreen: {
            screen: LoginPage,
            navigationOptions: ({ navigation }) => ({
                headerStyle: styles.appHeader,
                headerTitleStyle: styles.title,
                headerLeftContainerStyle: { marginLeft: 10 },
                headerTitle: <View />,
                headerLeft: <View />,
                headerRight: <View />
            })
        },

        MainScreen: {
            screen: PrincipalPage,
            navigationOptions: ({ navigation }) => ({
                headerStyle: styles.appHeader,
                headerTitleStyle: styles.title,
                headerLeftContainerStyle: { marginLeft: 10 },
                headerTitle: <View />,
                headerLeft: <CloseButton testID={'archive'} navigation={navigation as any} />,
            })
        },

        IngredientScreen: {
            screen: Ingredient,
            navigationOptions: ({ navigation }) => ({
                headerStyle: styles.appHeader,
                headerTitleStyle: styles.title,
                headerLeftContainerStyle: { marginLeft: 10 },
                title: 'Ingredients',
                headerLeft: <View />,
                headerRight: <View />
            })
        },
        SaveProductScreen: {
            screen: SaveProduct,
            navigationOptions: ({ navigation }) => ({
                headerStyle: styles.appHeader,
                headerTitleStyle: styles.title,
                headerLeftContainerStyle: { marginLeft: 10 },
                title: 'Create Product',
                headerLeft: <View />,
                headerRight: <View />
            })
        },
        EditProductScreen: {
            screen: EditProduct,
            navigationOptions: ({ navigation }) => ({
                headerStyle: styles.appHeader,
                headerTitleStyle: styles.title,
                headerLeftContainerStyle: { marginLeft: 10 },
                title: 'Edit Product',
                headerLeft: <View />,
                headerRight: <View />
            })
        },
        SaveIngredientScreen: {
            screen: SaveIngredient,
            navigationOptions: ({ navigation }) => ({
                headerStyle: styles.appHeader,
                headerTitleStyle: styles.title,
                headerLeftContainerStyle: { marginLeft: 10 },
                title: 'Ingredient',
                headerLeft: <View />,
                headerRight: <View />
            })
        },
        //. . . MyOtherRoutes
    })
);

export default Routes;