import {View, Text, FlatList, Button, Image, Dimensions} from 'react-native';
import React, {useState, useRef} from 'react';
import {swiperData} from '../../constants/list';
import images from '../../constants/images'; // Import your image constants
import {moderateScale, textScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
import fontFamily from '../../styles/fontFamily';
import ButtonComp from '../button/ButtonComp/ButtonComp';
import {useNavigation} from '@react-navigation/native';
import routes from '../../constants/routes';

const OnBoardingSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null); // Ref for FlatList
  const navigation = useNavigation();
  const data = swiperData;
  const itemWidth = Dimensions.get('window').width;

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex + 1,
      });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex); // Update currentIndex first
      console.log('New index:', newIndex); // Log the new index
      flatListRef.current.scrollToIndex({
        animated: true,
        index: newIndex, // Use the updated currentIndex value
      });
    }
  };

  const renderDot = index => {
    return (
      <View
        key={index}
        style={{
          width: 20,
          height: 4,
          borderRadius: 5,
          backgroundColor: index === currentIndex ? 'white' : 'gray',
          marginHorizontal: 5,
          bottom: moderateScale(80),
        }}
      />
    );
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 200,
          width: itemWidth,
        }}>
        <View style={{top: moderateScale(200)}}>
          <Text
            style={{
              width: '100%',
              textAlign: 'justify',
              fontSize: textScale(44),
              color: colors.WHITE,
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
              top: moderateScale(70),
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              width: '100%',
              textAlign: 'justify',
              fontSize: textScale(14),
              color: colors.GREY_LIGHT,
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
              top: moderateScale(90),
            }}>
            {item.sub_title}
          </Text>
        </View>
        <View style={{top: moderateScale(380)}}>
          <Image source={item.image} style={{width: 430, height: 450}} />
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          top: moderateScale(50),
          paddingHorizontal: moderateScale(10),
        }}>
        {currentIndex > 0 && (
          <Button
            title="Previous"
            onPress={handlePrevious}
            disabled={currentIndex === 0}
            color={colors.WHITE}
          />
        )}
        <View>
          {currentIndex < data.length - 1 ? (
            <Button title="Next" onPress={handleNext} color={colors.WHITE} />
          ) : (
            <Button
              title="Skip Now"
              onPress={handleNext}
              color={colors.WHITE}
            />
          )}
        </View>
      </View>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => item.id}
        getItemLayout={(data, index) => ({
          length: itemWidth,
          offset: itemWidth * index,
          index,
        })}
        onMomentumScrollEnd={event => {
          const contentOffset = event.nativeEvent.contentOffset.x;
          const index = Math.round(contentOffset / itemWidth);
          setCurrentIndex(index);
        }}
      />
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        {data.map((item, index) => renderDot(index))}
      </View>
      <ButtonComp
        onPress={() => navigation.navigate(routes.ACCOUNT_SCREEN)}
        text="Get Started"
        textStyle={{
          color: colors.BLACK,
          fontSize: textScale(18),
          fontFamily: fontFamily.POPPINS_SEMI_BOLD,
        }}
        style={{
          width: '90%',
          backgroundColor: colors.WHITE,
          alignSelf: 'center',
          bottom: moderateScale(50),
        }}
      />
    </View>
  );
};

export default OnBoardingSwiper;
