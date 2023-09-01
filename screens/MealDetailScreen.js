import React from 'react';
import { Text } from 'react-native';

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;
  return <Text>MealDetailsScreen {mealId} </Text>;
};

export default MealDetailScreen;
