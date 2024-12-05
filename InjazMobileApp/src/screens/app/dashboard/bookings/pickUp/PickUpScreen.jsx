import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Accordion from '../../../../../components/accordian/Accordian';
import CollapsibleView from '../../../../../components/collapsableView/CollapsableView';

import styles from './styles';
import ConfirmPickupButton from '../../../../../components/button/confirmPickUpButton/ConfirmPickUpButton';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../../../constants/routes';
import {useSelector, useDispatch} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';
import {getAllBranchThunk} from '../../../../../redux/asyncThunk/AsyncThunk';
import SwipeButton from '../../../../../components/button/swiperButton/SwiperButton';

const PickUpScreen = () => {
  const [isContentVisible, setContentVisible] = useState(false);
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  const [branches, setBranches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmPickUp = value => {
    if (value) {
      navigation.navigate(routes.REVIEW_BOOKING_SCREEN);
    }
  };
  const dispatch = useDispatch();
  const toggleContentVisibility = () => {
    setContentVisible(!isContentVisible);
  };

  useEffect(() => {
    getAllBranches();
  }, []);

  const getAllBranches = () => {
    dispatch(getAllBranchThunk())
      .unwrap()
      .then(apiResponse => {
        if (Array.isArray(apiResponse) && apiResponse.length > 0) {
          setBranches(apiResponse);
        } else {
          console.log('No branches available.');
        }
      })
      .catch(error => {
        console.error('Error fetching branches:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <View>
      <Text style={styles.titleBranches}>Branches</Text>
      <Text style={styles.titleNear}>Look at the branches near you</Text>
      <CollapsibleView
        title={selectedLanguage === 'en' ? 'Branches' : 'الفروع'}
        isContentVisible={isContentVisible}
        toggleContentVisibility={toggleContentVisibility}
        style={styles.collapsibleViewContainer}>
        {isContentVisible && (
          <View style={styles.collapsibleContent}>
            {branches.map(branch => (
              <Accordion
                key={branch._id}
                title={
                  selectedLanguage === 'en' ? branch.name : branch.location
                }>
                <Text style={styles.textStyle}>{branch.location}</Text>
              </Accordion>
            ))}
          </View>
        )}
      </CollapsibleView>

      <SwipeButton onToggle={handleConfirmPickUp} />
    </View>
  );
};

export default PickUpScreen;
