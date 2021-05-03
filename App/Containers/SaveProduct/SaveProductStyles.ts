import { ApplicationStyles } from '../../Themes';
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
    SaveButtonView: { alignSelf: 'center', borderBottomWidth: 0, borderColor: '#333', height: 30, width: 80, backgroundColor: '#0EFEE0', borderRadius: 5, justifyContent: 'center' } as ViewStyle,
    CancelButtonView: { alignSelf: 'center', borderBottomWidth: 0, borderColor: '#333', height: 30, width: 80, backgroundColor: 'red', borderRadius: 5, justifyContent: 'center' } as ViewStyle,
    BlocklButtonView: { flexDirection: 'row', justifyContent: 'space-between', height: 50, margin: '5%' } as ViewStyle,
    AddlButtonView: { height: 50, width: 80, backgroundColor: '#FFF000', borderRadius: 5, alignSelf: 'flex-end', justifyContent: 'center' } as ViewStyle,


};