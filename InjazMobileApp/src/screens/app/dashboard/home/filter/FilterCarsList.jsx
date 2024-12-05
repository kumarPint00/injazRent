import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import CheckBox from '../../../../../components/checkBox/CheckBox';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../../../../styles/responsiveSize';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectBrand,
  selectModel,
  selectYear,
} from '../../../../../redux/slices/getall_cars.slices';

const FilterCarsList = ({
  data,
  onUpdateSelectedItems,
  brands,
  models,
  years,
  priceList,
}) => {
  const dispatch = useDispatch();
  console.log(data, '......selected data1233 ');

  console.log(
    data,
    onUpdateSelectedItems,
    brands,
    models,
    years,
    priceList,
    '............all data 12345',
  );
  const {selectedBrand, selectedModel, selectedYear, selectedPrice} =
    useSelector(state => state.getAllCars);
  const [selectedItems, setSelectedItems] = useState(
    selectedBrand || selectedModel || selectedYear,
  );
  console.log(selectedItems, '....selectedItems123');
  const toggleItem = item => {
    console.log(item, '.......itesms1244');
    if (selectedItems.includes(item)) {
      const data = selectedItems.filter(selectedItem => selectedItem !== item);
      dispatch(selectBrand(data));
      dispatch(selectModel(data));
      dispatch(selectYear(data));
      setSelectedItems(data);
    } else {
      const data = [...selectedItems, item];
      dispatch(selectBrand(data));
      dispatch(selectModel(data));
      dispatch(selectYear(data));
      setSelectedItems(data);
    }
  };

  useEffect(() => {
    onUpdateSelectedItems(selectedItems);
  }, [selectedItems, onUpdateSelectedItems]);

  const getCategoryValues = categoryTitle => {
    switch (categoryTitle) {
      case 'Brand':
        return brands;
      case 'Model':
        return models;
      case 'Year':
        return years;

      default:
        return [];
    }
  };

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        horizontal={false}
        bounces={false}
        data={data}
        contentContainerStyle={{
          paddingBottom: data.length > 0 ? moderateScale(80) : moderateScale(0),
        }}
        renderItem={({item}) => (
          <View
            style={{
              marginVertical: moderateScaleVertical(10),
              justifyContent: 'center',
              marginHorizontal: 20,
            }}>
            <CheckBox
              title={
                (getCategoryValues(item)[0]?.title ||
                  getCategoryValues(item)[0]?.key ||
                  item) + ' '
              }
              selected={selectedItems.includes(item)}
              onCheckboxChange={() => toggleItem(item)}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default FilterCarsList;
