const redTheme = {
  PRIMARY_COLOR_DARK: '#D32F2F',
  PRIMARY_COLOR: '#F44336',
  PRIMARY_COLOR_LIGHT: '#FFCDD2',
  PRIMARY_COLOR_TEXT: '#FFFFFF',
  ACCENT_COLOR: '#4CAF50',
  PRIMARY_TEXT_COLOR: '#212121',
  SECONDARY_TEXT_COLOR: '#757575',
  DIVIDER_COLOR: '#BDBDBD',
  PRIMARY_LINK_TEXT_COLOR: '#F44336',
  SECONDARY_LINK_TEXT_COLOR: '#448AFF',
  SUCCESS_BUTTON_COLOR: '#8BC34A',
  SUCCESS_BUTTON_COLOR_TEXT: '#FFF',
  WARNING_BUTTON_COLOR: '#FFC107',
  WARNING_BUTTON_COLOR_TEXT: '#FFF',
};

const blueTheme = {
  PRIMARY_COLOR_DARK: '#1976D2',
  PRIMARY_COLOR: '#2196F3',
  PRIMARY_COLOR_LIGHT: '#BBDEFB',
  PRIMARY_COLOR_TEXT: '#FFFFFF',
  ACCENT_COLOR: '#009688',
  PRIMARY_TEXT_COLOR: '#212121',
  SECONDARY_TEXT_COLOR: '#757575',
  DIVIDER_COLOR: '#BDBDBD',
  PRIMARY_LINK_TEXT_COLOR: '#448AFF',
  SECONDARY_LINK_TEXT_COLOR: '#F44336',
  SUCCESS_BUTTON_COLOR: '#8BC34A',
  SUCCESS_BUTTON_COLOR_TEXT: '#FFF',
  WARNING_BUTTON_COLOR: '#FFC107',
  WARNING_BUTTON_COLOR_TEXT: '#FFF',
};

export const env = {
  // Main server address
  server: 'http://online-store-db.herokuapp.com',
  // Api address
  api: {
    categories: '/categories',
    products: '/products',
    slider: '/slider',
    top_categories: '/topCategories',
    on_sale_products: '/onSaleProducts',
    main_page_products_list: '/mainPageProductsList',
    products_variations: '/productsVariations',
    products_details: '/productsDetails',
    products_comments: '/productsComments',
    banners: '/banners',
    users: '/users',
    wishList: '/wishList',
    messages: '/messages',
  },
  config: {
    currency_position: 'right',
    price_thousand_sep: ',',
    price_decimal_sep: '.',
    price_num_decimals: '3',
    price_currency_symbol: '\u0024',
  },
  toastConfig: {
    duration: 1000,
    position: -20,
    animation: true,
    shadow: true,
    hideOnPress: true,
    delay: 0,
  },
  // Current theme
  theme: redTheme,
};
