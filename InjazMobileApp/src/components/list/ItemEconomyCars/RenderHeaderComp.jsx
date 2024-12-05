import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../constants/routes';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../redux/slices/language_slices';

const RenderHeaderComp = ({carsData, title, viewAll, id}) => {
  console.log(title, '.......item.category');
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);

  if (!carsData || carsData.length === 0) {
    return (
      <View style={styles.titleHeaderContainer}>
        <Text style={styles.title}>
          {selectedLanguage === 'en' ? 'No Cars Available' : 'لا تتوفر سيارات'}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.titleHeaderContainer}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.CATEGORY_SCREEN, {
            category: title,
            carsData,
            id: id,
          });
        }}>
        <Text style={styles.titleViewAll}>{viewAll}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderHeaderComp;
