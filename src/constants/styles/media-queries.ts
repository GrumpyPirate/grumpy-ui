import screenSizes from './screen-sizes';

const mediaQueries = {
  // 'Up' queries
  largeMobile: `(min-width: ${screenSizes.largeMobile / 16}em)`,
  tablet: `(min-width: ${screenSizes.tablet / 16}em)`,
  desktop: `(min-width: ${screenSizes.desktop / 16}em)`,
  desktopXL: `(min-width: ${screenSizes.desktopXL / 16}em)`,
  desktop2XL: `(min-width: ${screenSizes.desktop2XL / 16}em)`,
  desktop3XL: `(min-width: ${screenSizes.desktop3XL / 16}em)`,

  // 'Down' queries
  largeMobileDown: `(max-width: ${(screenSizes.tablet - 1) / 16}em)`,
  tabletDown: `(max-width: ${(screenSizes.desktop - 1) / 16}em)`,
  desktopDown: `(max-width: ${(screenSizes.desktopXL - 1) / 16}em)`,
  desktopXLDown: `(max-width: ${(screenSizes.desktop2XL - 1) / 16}em)`,
  desktop2XLDown: `(max-width: ${(screenSizes.desktop3XL - 1) / 16}em)`,

  // 'Only' queries
  xsOnly: `(max-width: ${(screenSizes.largeMobile - 1) / 16}em)`,
  largeMobileOnly: `(min-width: ${screenSizes.largeMobile / 16}em) and (max-width: ${(screenSizes.tablet - 1) / 16}em)`,
  tabletOnly: `(min-width: ${screenSizes.tablet / 16}em) and (max-width: ${(screenSizes.desktop - 1) / 16}em)`,
  desktopOnly: `(min-width: ${screenSizes.desktop / 16}em) and (max-width: ${(screenSizes.desktopXL - 1) / 16}em)`,
  desktopXLOnly: `(min-width: ${screenSizes.desktopXL / 16}em) and (max-width: ${(screenSizes.desktop2XL - 1) / 16}em)`,
  desktop2XLOnly: `(min-width: ${screenSizes.desktop2XL / 16}em) and (max-width: ${
    (screenSizes.desktop3XL - 1) / 16
  }em)`,
};

export default mediaQueries;
