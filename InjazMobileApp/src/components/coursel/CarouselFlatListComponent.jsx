import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';

const {width} = Dimensions.get('window');
const SPACING = 18;

const CarouselFlatListComponent = ({data, autoplay, loop}) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return null;
  }

  const [indexSelected, setIndexSelected] = useState(0);
  const carouselRef = useRef(null);

  const onSelect = indexSelected => {
    setIndexSelected(indexSelected);
    carouselRef.current?.snapToItem(indexSelected);
  };

  const renderCarouselItem = ({item, index}) => {
    const imageUrl = typeof item === 'string' ? item : item.uri;
    return (
      <>
        <Image key={index} style={styles.imageStyle} source={{uri: imageUrl}} />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        layout="default"
        data={data.slice(0, 1)}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderCarouselItem}
      />
      <FlatList
        horizontal
        auti
        data={data.slice(1)}
        style={styles.flatListContainer}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: SPACING}}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => onSelect(index + 1)}
            activeOpacity={0.9}>
            <Image
              style={[
                styles.thumbImage,
                index + 1 === indexSelected && styles.selectedThumb,
              ]}
              source={{uri: typeof item === 'string' ? item : item.uri}}
            />
          </TouchableOpacity>
        )}
      />
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === indexSelected ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default CarouselFlatListComponent;
