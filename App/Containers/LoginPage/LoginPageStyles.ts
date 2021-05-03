import { ViewStyle } from 'react-native';
import { ApplicationStyles } from '../../Themes';

export default {

  ...ApplicationStyles.texts,
  ...ApplicationStyles,

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10
  } as ViewStyle,

  body: {
    backgroundColor: 'grey',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  } as ViewStyle,
  sectionContainer: {
    marginTop: 32,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 300,
    height: 300,
    zIndex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  } as ViewStyle,
  circuloView: {
    marginTop: -200,
    backgroundColor: 'lightblue',
    borderRadius: 600,
    width: 600,
    height: 600,
    marginBottom: -300,


    alignItems: 'center', 
    paddingHorizontal: 24,
  } as ViewStyle,
  BoxView:{ backgroundColor: 'white', marginTop: 330, borderRadius: 10, height: 100, width: 300, flexDirection: 'row', justifyContent: 'center' }as ViewStyle,
  EmailView:{ padding: 10, backgroundColor: 'white', borderColor: '#00feef', borderRadius: 10, borderWidth: 2, margin: 10 }as ViewStyle,
  PasswordView:{ flexDirection: 'row', padding: 10, backgroundColor: 'white', borderColor: '#00feef', borderRadius: 10, borderWidth: 2, margin: 10 }as ViewStyle,
}