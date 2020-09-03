import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Linking} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from './slider.style';
import {env} from './../../utils/environment';
import {get} from '../../utils/network';

export default SliderComponent = (props) => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    async function fetchSlids() {
      const json = await get(env.api.slider);
      if (json && json.length > 0) {
        setSlides(json);
      }
    }
    fetchSlids();

    return () => {};
  }, []);

  sliderLink = (data) => {
    switch (data.link_type) {
      case 'product':
        this.props.navigation.navigate('Single');
        break;
      case 'custom_filter':
        this.props.navigation.navigate('SearchResult');
        break;
      case 'link':
        Linking.openURL(data.link_value);
        break;
    }
  };

  return slides.length > 0 ? (
    <View style={styles.sliderWrapper}>
      <Swiper
        height={175}
        key={slides.length}
        autoplay={true}
        autoplayTimeout={10}
        showsButtons={false}
        activeDotColor="rgba(255,255,255,.7)"
        removeClippedSubviews={false}
        containerStyle={{alignSelf: 'stretch'}}
        paginationStyle={{bottom: 10}}>
        {slides.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => sliderLink(item)}
              key={index}>
              <Image style={styles.sliderImage} source={{uri: item.image}} />
            </TouchableOpacity>
          );
        })}
      </Swiper>
    </View>
  ) : null;
};
