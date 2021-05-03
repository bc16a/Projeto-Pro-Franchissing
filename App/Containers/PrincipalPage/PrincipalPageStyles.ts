import { ApplicationStyles, Colors } from '../../Themes';
import { ViewStyle, TextStyle } from 'react-native';

export default {
    ...ApplicationStyles.screen,
    ...ApplicationStyles.texts,
    ...ApplicationStyles,

    TitleText: { fontSize: 14, fontWeight: 'bold', color: 'black' } as TextStyle,
    fixToText: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%'
    } as ViewStyle,
    NameStyle: { alignItems: 'center', justifyContent: 'center', marginBottom: '8%', marginLeft: '1%', width: '50%' } as ViewStyle,
    PriceStyle: { alignItems: 'center', justifyContent: 'center', marginBottom: '8%', marginLeft: '1%', width: '9%' } as ViewStyle,
    ImageStyle: { alignItems: 'center', justifyContent: 'center', marginLeft: '1%' } as ViewStyle,
    HeadStyle: { flexDirection: 'row', marginRight: '5%', marginLeft: '5%', marginTop: '5%', justifyContent: 'space-between' } as ViewStyle,
    AddStyle: { alignSelf: 'flex-end', height: 50, width: 70, justifyContent: 'center', backgroundColor: '#FFF000', borderRadius: 5 } as ViewStyle,



};