import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CustomPicker} from '@flyskywhy/react-native-custom-picker';

export default class EasyCustomPicker extends Component {
  constructor(props) {
    super(props);

    this.itemMap = props.options.reduce((map, obj) => {
      map.set(obj.value, obj);
      return map;
    }, new Map());
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

  getLabel = item => item && item.label;

  renderField = settings => {
    const {defaultText, selectedItem} = settings;
    const {
      fieldIndiText,
      styleFieldContainer,
      styleFieldImage,
      styleFieldIndiText,
      styleFieldPlaceholderText,
      styleFieldLabel,
    } = this.props;

    return (
      <View style={[styles.fieldContainer, styleFieldContainer]}>
        {!selectedItem && (
          <Text style={[styles.text, styleFieldPlaceholderText]}>
            {defaultText}
          </Text>
        )}
        {!!selectedItem && (
          <View style={styles.innerContainer}>
            <Text style={[styles.text, styleFieldIndiText]}>
              {fieldIndiText}
            </Text>
            {selectedItem.image ? (
              <Image
                style={[styles.image, styleFieldImage]}
                source={selectedItem.image}
              />
            ) : (
              <Text style={[styles.text, styleFieldLabel]}>
                {selectedItem.label}
              </Text>
            )}
          </View>
        )}
      </View>
    );
  };

  renderOption = settings => {
    const {getLabel, item} = settings;
    const {
      itemValue,
      styleOptionActiveContainer,
      styleOptionActiveLabel,
      styleOptionContainer,
      styleOptionImage,
      styleOptionLabel,
    } = this.props;
    const isActive = getLabel(this.itemMap.get(itemValue)) === getLabel(item);

    return (
      <View
        style={[
          styles.optionContainer,
          isActive ? styleOptionActiveContainer : styleOptionContainer,
        ]}>
        <View style={styles.innerContainer}>
          {item.image && (
            <Image
              style={[styles.image, {marginRight: 10}, styleOptionImage]}
              source={item.image}
            />
          )}
          <Text
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
    justifyContent: 'center',
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
