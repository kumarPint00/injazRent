import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import ItemKeyFeatures from '../../../../../../components/list/ItemKeyFeatures/ItemKeyFeatures';
import {keyFeaturesData} from '../../../../../../constants/list';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {getAllCarsByIdThunk} from '../../../../../../redux/asyncThunk/AsyncThunk';
import {useRoute} from '@react-navigation/native';
import Loader from '../../../../../../components/Loader/Loader';

const KeyFeaturesScreen = () => {
  const [carDetails, setCarDetails] = useState([]);
  const dispatch = useDispatch();
  const route = useRoute();
  const id = route.params.id;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getAllCarsByIdThunk({id: id}))
      .unwrap()
      .then(res => {
        const {keyFeatures} = res?.data?.data;
        setCarDetails(keyFeatures);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, [dispatch, id]);

  return (
    <View style={styles.container}>
      {isLoading ? <Loader visible={isLoading} /> : null}
      {carDetails && carDetails.length > 0 && (
        <FlatList
          data={carDetails.slice(1)}
          numColumns={2}
          renderItem={({item, index}) => (
            <ItemKeyFeatures
              item={item}
              index={index}
              customStyle={[
                index % 2 === 0
                  ? styles.yellowBackground
                  : styles.purpleBackground,
              ]}
              id={id}
              carDetails={carDetails}
            />
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
    </View>
  );
};

export default KeyFeaturesScreen;
