import { ViewStyle, TextStyle } from 'react-native';
import { ApplicationStyles } from '../../Themes';

export default {

    ...ApplicationStyles.texts,
    ...ApplicationStyles,

        titleText: { color:'#ffffff', textAlign: 'center', fontSize: 25, fontWeight: 'bold' }as TextStyle,
        body: {
          width:'100%',
          height:'100%',
          alignItems:'center',
          justifyContent:'center',
        }as ViewStyle,
        sectionContainer: {
          width:150,
          height:150,
          backgroundColor:'#05B3FB',
          alignContent:'center',
          justifyContent:'center',
          borderRadius:10
        }as ViewStyle,
    
}