const fs = require('fs');
const path = require('path');

module.exports = function() {
  const darkTheme = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../../themes/endless-bounty-dark.json'), 'utf8')
  );
  const lightTheme = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../../themes/endless-bounty-light.json'), 'utf8')
  );

  // Extract key syntax colors from tokenColors
  const getTokenColor = (theme, name) => {
    const token = theme.tokenColors.find(t => t.name === name);
    return token?.settings?.foreground || '#ffffff';
  };

  return {
    dark: {
      colors: darkTheme.colors,
      syntax: {
        comment: getTokenColor(darkTheme, 'Comment'),
        keyword: getTokenColor(darkTheme, 'Keyword'),
        string: getTokenColor(darkTheme, 'String'),
        function: getTokenColor(darkTheme, 'Function'),
        variable: getTokenColor(darkTheme, 'Variable'),
        type: getTokenColor(darkTheme, 'Type'),
        number: getTokenColor(darkTheme, 'Number'),
        constant: getTokenColor(darkTheme, 'Constant'),
        property: getTokenColor(darkTheme, 'Property'),
        punctuation: getTokenColor(darkTheme, 'Punctuation'),
        operator: getTokenColor(darkTheme, 'Operator'),
        parameter: getTokenColor(darkTheme, 'Parameter'),
        cookIngredient: getTokenColor(darkTheme, 'Cooklang Ingredient'),
        cookCookware: getTokenColor(darkTheme, 'Cooklang Cookware'),
        cookTimer: getTokenColor(darkTheme, 'Cooklang Timer'),
        cookAmount: getTokenColor(darkTheme, 'Cooklang Amount'),
        cookUnit: getTokenColor(darkTheme, 'Cooklang Unit'),
        cookMetaKey: getTokenColor(darkTheme, 'Cooklang Metadata Key'),
        cookMetaValue: getTokenColor(darkTheme, 'Cooklang Metadata Value')
      }
    },
    light: {
      colors: lightTheme.colors,
      syntax: {
        comment: getTokenColor(lightTheme, 'Comment'),
        keyword: getTokenColor(lightTheme, 'Keyword'),
        string: getTokenColor(lightTheme, 'String'),
        function: getTokenColor(lightTheme, 'Function'),
        variable: getTokenColor(lightTheme, 'Variable'),
        type: getTokenColor(lightTheme, 'Type'),
        number: getTokenColor(lightTheme, 'Number'),
        constant: getTokenColor(lightTheme, 'Constant'),
        property: getTokenColor(lightTheme, 'Property'),
        punctuation: getTokenColor(lightTheme, 'Punctuation'),
        operator: getTokenColor(lightTheme, 'Operator'),
        parameter: getTokenColor(lightTheme, 'Parameter'),
        cookIngredient: getTokenColor(lightTheme, 'Cooklang Ingredient'),
        cookCookware: getTokenColor(lightTheme, 'Cooklang Cookware'),
        cookTimer: getTokenColor(lightTheme, 'Cooklang Timer'),
        cookAmount: getTokenColor(lightTheme, 'Cooklang Amount'),
        cookUnit: getTokenColor(lightTheme, 'Cooklang Unit'),
        cookMetaKey: getTokenColor(lightTheme, 'Cooklang Metadata Key'),
        cookMetaValue: getTokenColor(lightTheme, 'Cooklang Metadata Value')
      }
    },
    // The vibrant palette for swatches
    palette: {
      spinach: '#8cb369',
      carrot: '#e07b39',
      apple: '#c75d5d',
      squash: '#d4a84b',
      eggplant: '#9b6b9e',
      honey: '#e0a458',
      tomato: '#bf4b4b',
      sage: '#7d8471'
    }
  };
};
