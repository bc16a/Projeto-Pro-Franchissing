import * as React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { NavigationScreenProp} from 'react-navigation';
import Images from '../../Themes/Images';
import styles from './CloseButtonStyles'; 
import { onSignOut } from '../../Containers/Auth/Auth';

export namespace CloseButton {
    export interface Props {
        navigation: NavigationScreenProp<any, any>;

        testID?: string;
    }
    // tslint:disable-next-line:no-empty-interface
    export interface State {}
}

export default class CloseButton extends React.Component<CloseButton.Props, CloseButton.State> {
    constructor(props: CloseButton.Props) {
        super(props);
    }

    render() {

        return (
            <TouchableOpacity
                testID={this.props.testID} 
                onPress={() => onSignOut().then(() => this.props.navigation.navigate('LoginScreen'))}
                style={[styles.centeredColumn, styles.centeredRow, styles.smallPaddingLeft, styles.smallPaddingRight]}>
                <Image source={Images.shutdown} style={{borderRadius:10, width: 34, height: 34 }}/>
            </TouchableOpacity>
        );
    }
}