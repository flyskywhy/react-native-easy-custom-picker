import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CustomPicker} from '@flyskywhy/react-native-custom-picker';

export default class EasyCustomPicker extends Component {
  constructor(props) {
    super(props);

    if (typeof props.options[0] === 'object') {
      this.itemMap = props.options.reduce((map, obj) => {
        map.set(obj.value, obj);
        return map;
      }, new Map());
      this.getLabel = item => item && item.label;
    } else {
      this.itemMap = props.options.reduce((map, value) => {
        map.set(value, value);
        return map;
      }, new Map());
      this.getLabel = item => item;
    }
  }

  static defaultProps = {
    fieldPlaceholderText: 'Pick an item...',
    itemValue: 'one item.value in options',
    options: [
      {
        label: 'AUTO',
        value: 'auto',
      },
      {
        label: 'FILL',
        value: 'fill',
      },
      {
        label: 'CONTAIN',
        value: 'contain',
      },
      {
        label: 'COVER',
        value: 'cover',
      },
      {
        label: 'NONE',
        value: 'none',
      },
    ],
    styleOptionActiveContainer: {backgroundColor: 'white'},
    styleOptionActiveLabel: {color: 'grey'},
    styleOptionContainer: {backgroundColor: 'grey'},
    styleOptionLabel: {color: 'white'},
  };

  renderField = settings => {
    const {defaultText, getLabel, selectedItem} = settings;
    const {
      fieldExtraRightComponent,
      fieldIndiText,
      styleFieldContainer,
      styleFieldImage,
      styleFieldIndiText,
      styleFieldPlaceholderText,
      styleFieldLabel,
    } = this.props;

    return (
      <View style={[styles.fieldContainer, styleFieldContainer]}>
        {selectedItem === undefined || selectedItem === null ? (
          <Text
            numberOfLines={1}
            style={[styles.text, styleFieldPlaceholderText]}>
            {defaultText}
          </Text>
        ) : (
          <View style={styles.innerContainer}>
            <Text numberOfLines={1} style={[styles.text, styleFieldIndiText]}>
              {fieldIndiText}
            </Text>
            {selectedItem.image ? (
              <Image
                style={[styles.image, styleFieldImage]}
                source={selectedItem.image}
              />
            ) : (
              <Text numberOfLines={1} style={[styles.text, styleFieldLabel]}>
                {getLabel(selectedItem)}
              </Text>
            )}
          </View>
        )}

        {fieldExtraRightComponent}
      </View>
    );
  };

  renderOption = settings => {
    const {getLabel, item} = settings;
    const {
      itemValue,
      options,
      styleOptionActiveContainer,
      styleOptionActiveLabel,
      styleOptionContainer,
      styleOptionImage,
      styleOptionLabel,
    } = this.props;
    const isActive = getLabel(this.itemMap.get(itemValue)) === getLabel(item);

    let isFirstItem = false;
    if (options.length > 1) {
      isFirstItem = getLabel(options[0]) === getLabel(item);
    } else {
      isFirstItem = true;
    }
    const styleFirstItem = isFirstItem
      ? {borderWidth: 0, borderTopWidth: 0}
      : {};

    let isLastItem = false;
    if (options.length > 1) {
      isLastItem = getLabel(options[options.length - 1]) === getLabel(item);
    } else {
      isLastItem = true;
    }
    const styleLastItem = isLastItem
      ? {borderWidth: 0, borderBottomWidth: 0}
      : {};

    return (
      <View
        style={[
          styles.optionContainer,
          isActive ? styleOptionActiveContainer : styleOptionContainer,
          styleFirstItem,
          styleLastItem,
        ]}>
        <View style={styles.innerContainer}>
          {item.image && (
            <Image
              style={[styles.image, {marginRight: 10}, styleOptionImage]}
              source={item.image}
            />
          )}
          <Text
            numberOfLines={1}
            style={[
              styles.text,
              isActive ? styleOptionActiveLabel : styleOptionLabel,
            ]}>
            {getLabel(item)}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    const {
      fieldPlaceholderText,
      itemValue,
      onChange,
      options,
      renderFooter,
      renderHeader,
      styleModalBackdrop,
      styleModalContainer,
    } = this.props;

    return (
      <CustomPicker
        defaultValue={this.itemMap.get(itemValue)}
        fieldTemplate={this.renderField}
        footerTemplate={renderFooter}
        getLabel={this.getLabel}
        headerTemplate={renderHeader}
        modalAnimationType={'fade'}
        backdropStyle={styleModalBackdrop}
        modalStyle={styleModalContainer}
        optionTemplate={this.renderOption}
        options={options}
        onValueChange={onChange}
        placeholder={fieldPlaceholderText}
      />
    );
  }
}

const styles = StyleSheet.create({
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 5,
    borderRadius: 20,
  },
  image: {
    height: 30,
    width: 30,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionContainer: {
    padding: 10,
    margin: 0.5,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
});
