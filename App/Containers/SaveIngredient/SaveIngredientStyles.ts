import { ApplicationStyles, Colors } from '../../Themes';
import { ViewStyle, TextStyle } from 'react-native';

export default {
    ...ApplicationStyles.screen,
    ...ApplicationStyles.texts,
    ...ApplicationStyles,

    TitleText: { fontSize: 22, fontWeight: 'bold', color: 'red' } as TextStyle,
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    } as TextStyle,

    ToucheText: { fontWeight: 'bold', textAlign: 'center' } as TextStyle,
    OkButtonView: { borderBottomWidth: 0, borderColor: '#333', height: 30, width: 80, backgroundColor: '#0EFEE0', borderRadius: 5, justifyContent: 'center' } as ViewStyle,
    CancelButtonView: { borderBottomWidth: 0, borderColor: '#333', height: 30, width: 80, backgroundColor: '#FF0000', borderRadius: 5, justifyContent: 'center' } as ViewStyle,
    BlockButtonView: { flexDirection: 'row', justifyContent: 'space-between', height: 50, margin: '5%' } as ViewStyle,


};