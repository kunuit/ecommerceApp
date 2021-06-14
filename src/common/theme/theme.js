import { Dimensions } from 'react-native'
import colors from './colors'
import { size, fontFamily } from './fonts'

export const WidthScreen = Dimensions.get('window').width
export const HeightScreen = Dimensions.get('window').height

export const Theme = {
  colors,
  backgrounds: {
    grayPaper: '#EFEFEF',
    paper: '#F2F3F2',
    white: '#FFFFFF',
    itemImageDetail: 'rgb(242, 243, 242)',
    modal: 'rgba(0, 0, 0, 0.5)',
    buttonBack: 'rgba(0,0,0,0.3)',
    transparent: 'rgba(0,0,0,0)',
  },
  size,
  fontFamily,
}
