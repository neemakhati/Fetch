// import React, { useContext } from 'react';
// import { View, Text } from 'react-native';
// import { useSelector } from 'react-redux';
// import { ThemeContext } from '../context/ThemeContext';
// import { colors } from '../config/theme';

// const RecommendedScreen = () => {
//   const { theme } = useContext(ThemeContext);
//   const activeColors = colors[theme.mode];
  
//   const favorites = useSelector((state) => state.favorites.favorites);

//   return (
//     <View style={{ backgroundColor: activeColors.primary, flex: 1 }}>
//       <Text style={{ color: activeColors.text }}>Recommendation Here</Text>

//       {/* Render the list of favorite workshops */}
//       {favorites.map((workshop, index) => (
//         <Text key={index} style={{ color: activeColors.text }}>
//           {workshop}
//         </Text>
//       ))}
//     </View>
//   );
// };

// export default RecommendedScreen;


import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../context/ThemeContext';
import { colors } from '../config/theme';

const RecommendedScreen = () => {
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode];
  
  const favorites = useSelector((state) => state.favorites.favorites);
console.log('favorites:', favorites);

return (
  <View style={{ backgroundColor: activeColors.primary, flex: 1 }}>
    <Text style={{ color: activeColors.text }}>Recommendation Here</Text>

    {/* Render the list of favorite workshops */}
    {favorites.map((workshop, index) => {
      console.log('workshop:', workshop);
      return (
        <View key={index}>
          <Text style={{ color: activeColors.text, fontWeight: 'bold' }}>
            Workshop: {workshop.Workshop}
          </Text>
          <Text style={{ color: activeColors.text }}>
            College: {workshop.College}
          </Text>
          {/* Display other properties of the workshop */}
          {/* <Text style={{ color: activeColors.text }}>
            Some other property: {workshop.SomeOtherProperty}
          </Text> */}
        </View>
      );
    })}
  </View>
);
  };
export default RecommendedScreen;
