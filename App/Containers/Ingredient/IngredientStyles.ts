import { ApplicationStyles} from '../../Themes';
import { ViewStyle, TextStyle } from 'react-native';

export default {
    ...ApplicationStyles.screen,
    ...ApplicationStyles.texts,
    ...ApplicationStyles,

    linhaView: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    } as ViewStyle,

    linhaText: {
        marginLeft: 4,
        marginRight: 4,
        fontFamily: 'sans-serif-medium',
        fontSize: 14,
        fontWeight: 'bold'
    } as TextStyle,

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    } as TextStyle,

    fixToText: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%'
    } as ViewStyle,
    NumeberText: { justifyContent: 'center', marginLeft: '1%', width: '15%' } as TextStyle,
    NameText: { justifyContent: 'center', width: '30%' } as TextStyle,
    ToucheText: { fontWeight: 'bold', textAlign: 'center' } as TextStyle,
    AddButtonView: { borderBottomWidth: 0, borderColor: '#333', height: 50, width: 80, backgroundColor: '#FFF000', borderRadius: 5, alignSelf: 'flex-end', justifyContent: 'center', marginRight: '5%' } as ViewStyle,
    BlockButtonView: { flexDirection: 'row', justifyContent: 'space-between', height: 50, margin: '5%' } as ViewStyle,
    OkButtonView: { borderBottomWidth: 0, borderColor: '#333', height: 30, width: 80, backgroundColor: '#0EFEE0', borderRadius: 5, justifyContent: 'center' } as ViewStyle,
    CancelButtonView: { borderBottomWidth: 0, borderColor: '#333', height: 30, width: 80, backgroundColor: '#FF0000', borderRadius: 5, justifyContent: 'center' } as ViewStyle,
};