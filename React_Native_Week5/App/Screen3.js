import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { useFonts } from 'expo-font';

const Screen3 = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 1024;


  return (
    <View style={isLargeScreen ? largeStyles.container : styles.container}>
      <Text style={isLargeScreen ? largeStyles.title : styles.title}>Điện Thoại Vsmart Joy 3{'\n'}Hàng chính hãng</Text>
      <Image
        source={require('./assets/red.png')}
        style={isLargeScreen ? largeStyles.phoneImage : styles.phoneImage}
      />
      <View style={isLargeScreen ? largeStyles.colorSelector : styles.colorSelector}>
        <Text style={isLargeScreen ? largeStyles.colorSelectorTitle : styles.colorSelectorTitle}>Chọn một màu bên dưới:</Text>
        <View style={isLargeScreen ? largeStyles.colorOptions : styles.colorOptions}>
          <TouchableOpacity style={[styles.colorOption, styles.lightBlue]} />
          <TouchableOpacity style={[styles.colorOption, styles.red]} />
          <TouchableOpacity style={[styles.colorOption, styles.black]} />
          <TouchableOpacity style={[styles.colorOption, styles.blue]} />
        </View>
      </View>
      <TouchableOpacity style={isLargeScreen ? largeStyles.doneButton : styles.doneButton}>
        <Text style={isLargeScreen ? largeStyles.doneButtonText : styles.doneButtonText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  title: {
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    color: '#000000',
    marginVertical: 10,
  },
  phoneImage: {
    width: 112,
    height: 132,
    alignSelf: 'center',
    marginVertical: 10,
  },
  colorSelector: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    padding: 10,
    marginVertical: 10,
  },
  colorSelectorTitle: {
    fontSize: 18,
    lineHeight: 21,
    color: '#000000',
    marginBottom: 10,
  },
  colorOptions: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  colorOption: {
    width: 85,
    height: 80,
    marginBottom: 13,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  lightBlue: {
    backgroundColor: '#C5F1FB',
  },
  red: {
    backgroundColor: '#F30D0D',
  },
  black: {
    backgroundColor: '#000000',
  },
  blue: {
    backgroundColor: '#234896',
  },
  doneButton: {
    width: '90%',
    height: 44,
    backgroundColor: 'rgba(25, 82, 226, 0.58)',
    borderWidth: 1,
    borderColor: '#CA1536',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  doneButtonText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    lineHeight: 23,
    color: '#F9F2F2',
  },
});

const largeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 0,
  },
  title: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    lineHeight: 18,
    color: '#000000',
    marginVertical: 10,
  },
  phoneImage: {
    width: 112,
    height: 132,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginVertical: 10,
  },
  colorSelector: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    padding: 0,
    marginVertical: 0, 
  },
  colorSelectorTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    lineHeight: 21,
    color: '#000000',
    marginVertical: 10,
    marginLeft: 10, 
  },
  colorOptions: {
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: 13, 
  },

  doneButton: {
    width: '90%', 
    height: 44,
    backgroundColor: '#1952E2',  
    borderWidth: 1,
    borderColor: '#CA1536',  
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 20,
    marginVertical: 20,  
  },
  doneButtonText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    lineHeight: 23,
    color: '#FFFFFF',
    textTransform: 'uppercase',  
  },
});

export default Screen3;