import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import fontFamily from "../../../styles/fontFamily";
import { moderateScale, textScale } from "../../../styles/responsiveSize";

const styles = StyleSheet.create({
  titleContainer:{flexDirection:'row',justifyContent:'space-between',bottom:moderateScale(30),padding:moderateScale(10),paddingHorizontal:moderateScale(13)},
  titlePopularCars:{
    color:colors.NAVY_BLUE,
    fontSize:textScale(16),
    fontFamily:fontFamily.POPPINS_SEMI_BOLD
  },
  titleViewAll:{
    color:colors.DARK_GREY,
    fontSize:textScale(14),
    fontFamily:fontFamily.POPPINS_REGULAR,
   }
})
export default styles;