# react-native-easy-custom-picker

[![npm version](http://img.shields.io/npm/v/react-native-easy-custom-picker.svg?style=flat-square)](https://npmjs.org/package/react-native-easy-custom-picker "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dm/react-native-easy-custom-picker.svg?style=flat-square)](https://npmjs.org/package/react-native-easy-custom-picker "View this project on npm")
[![npm licence](http://img.shields.io/npm/l/react-native-easy-custom-picker.svg?style=flat-square)](https://npmjs.org/package/react-native-easy-custom-picker "View this project on npm")
[![Platform](https://img.shields.io/badge/platform-ios%20%7C%20android%20%7C%20web-989898.svg?style=flat-square)](https://npmjs.org/package/react-native-easy-custom-picker "View this project on npm")

React native easy customizable picker component.

This is a wrap of `@flyskywhy/react-native-custom-picker`, so that can code more easier, e.g. below

![Advanced Example Demo](https://rawgit.com/budiadiono/react-native-custom-picker/master/doc/images/advanced-example.gif "Advanced Example Demo")

related code <https://github.com/flyskywhy/react-native-custom-picker#advanced-example-customized> is more complex, but if use `react-native-easy-custom-picker` can more easier like below `Example As Usage`.

## Installation
```
npm install react-native-easy-custom-picker --save
```

## Example As Usage
```
import EasyCustomPicker from 'react-native-easy-custom-picker';

import moveLeft from '../../node_modules/pixelshapern/src/images/arrow-oW_selected.png';
import fixed from '../../node_modules/pixelshapern/src/images/arrow-oo_selected.png';
import moveRight from '../../node_modules/pixelshapern/src/images/arrow-oE_selected.png';
const optionsDirection = [
  {
    label: 'MOVE LEFT',
    image: moveLeft,
    value: 'moveLeft',
  },
  {
    label: 'FIXED',
    image: fixed,
    value: 'default',
  },
  {
    label: 'MOVE RIGHT',
    image: moveRight,
    value: 'moveRight',
  },
];

const optionsPower = [
  {
    label: 'ON',
    value: 0,
  },
  {
    label: 'OFF',
    value: 1,
  },
];

const optionsScale = [0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7];

...
  constructor(props) {
    super(props);
    this.state = {
      direction: optionsDirection[0].value,
      power: optionsPower[0].value,
      scale: optionsScale[5],
    };
  }

  render() {
    const {direction, power, scale} = this.state;

    ...

      <View>
        <EasyCustomPicker
          options={optionsDirection}
          fieldPlaceholderText={'DIRECTION'}
          fieldIndiText={'DIRECTION' + ': '}
          styleFieldContainer={{
            padding: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          styleFieldPlaceholderText={styles.text}
          styleFieldIndiText={styles.text}
          styleFieldLabel={{color: 'yellow'}}
          styleFieldImage={{width: 20, height: 20}}
          styleModalContainer={{width: 200, height: 115}}
          styleOptionContainer={{backgroundColor: 'grey'}}
          styleOptionLabel={{color: 'white'}}
          styleOptionImage={{width: 20, height: 20}}
          styleOptionActiveContainer={{backgroundColor: 'white'}}
          styleOptionActiveLabel={{color: 'grey'}}
          itemValue={direction}
          onChange={item => this.setState({direction: item.value})}
        />

        <EasyCustomPicker
          options={optionsPower}
          fieldPlaceholderText={'POWER'}
          fieldIndiText={'POWER' + ': '}
          styleFieldContainer={{
            padding: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          }}
          styleFieldPlaceholderText={styles.text}
          styleFieldIndiText={styles.text}
          styleFieldLabel={{color: 'yellow'}}
          styleModalContainer={{width: 200, height: 72}}
          styleOptionContainer={{backgroundColor: 'grey'}}
          styleOptionLabel={{color: 'white'}}
          styleOptionActiveContainer={{backgroundColor: 'white'}}
          styleOptionActiveLabel={{color: 'grey'}}
          itemValue={power}
          onChange={item => this.setState({power: item.value})}
        />

        <EasyCustomPicker
          options={optionsScale}
          fieldPlaceholderText={'SCALE'}
          fieldIndiText={'SCALE' + ': '}
          styleFieldContainer={{
            height: 40,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          styleFieldPlaceholderText={[
            {paddingLeft: 20},
            styles.text,
          ]}
          styleFieldIndiText={styles.text}
          styleFieldLabel={{color: 'yellow'}}
          styleModalContainer={{
            width: 200,
            height: 300,
            marginLeft: 130,
          }}
          styleOptionContainer={{backgroundColor: 'grey'}}
          styleOptionLabel={{color: 'white'}}
          styleOptionActiveContainer={{backgroundColor: 'white'}}
          styleOptionActiveLabel={{color: 'grey'}}
          itemValue={scale}
          onChange={item => this.setState({scale: item})}
        />
      </View>

...

const styles = StyleSheet.create({
  text: {
    alignSelf: 'flex-start',
  },
});
```

## Donate
To support my work, please consider donate.

- ETH: 0xd02fa2738dcbba988904b5a9ef123f7a957dbb3e

- <img src="https://raw.githubusercontent.com/flyskywhy/flyskywhy/main/assets/alipay_weixin.png" width="500">
