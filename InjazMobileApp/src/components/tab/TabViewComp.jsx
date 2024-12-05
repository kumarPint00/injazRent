import React, {useState} from 'react';
import {Text, View} from 'react-native';
import TabComp from './TabComp';
import styles from './styles';
import DividerLine from '../divider/DividerLine';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../redux/slices/language_slices';

const TabViewComp = ({tabs, id}) => {
  console.log(id, '.......tab view id');
  const selectedLanguage = useSelector(selectLanguage);
  const [activeButton, setActiveButton] = useState(
    tabs && tabs.length > 0 ? tabs[0].label[selectedLanguage] : null,
  );
  console.log(selectedLanguage, '..........selected Language');
  const handleTabPress = label => {
    setActiveButton(label);
  };

  if (!tabs) {
    return null;
  }

  return (
    <View>
      <View style={styles.container}>
        {tabs.map((tab, index) => (
          <TabComp
            key={index}
            label={tab.label[selectedLanguage]}
            isActive={activeButton === tab.label[selectedLanguage]}
            onPress={() => handleTabPress(tab.label[selectedLanguage])}
          />
        ))}
        <DividerLine />
      </View>
      <View style={styles.screenContainer}>
        {tabs.map((tab, index) => (
          <React.Fragment key={index}>
            {activeButton === tab.label[selectedLanguage] && tab.screen}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

export default TabViewComp;
