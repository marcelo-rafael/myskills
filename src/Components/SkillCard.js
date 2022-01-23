import React from 'react';
import {StyleSheet, Text, TouchableOpacityComponent} from 'react-native';

export function SkillCard() {
  return (
    <TouchableOpacityComponent key={1} style={styles.buttonSkill}>
      <Text style={styles.textSkill}>skill</Text>
    </TouchableOpacityComponent>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
