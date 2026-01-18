export const APP_CONSTANTS = {
  APP_NAME: 'ToastEase',
  VERSION: '1.0.0',
  WELCOME_ENABLED: true,
  
  ROLES: {
    TOASTMASTER: 'toastmaster',
    SPEAKER: 'speaker',
    EVALUATOR: 'evaluator',
    GENERAL_EVALUATOR: 'general-evaluator',
    AH_COUNTER: 'ah-counter',
    GRAMMARIAN: 'grammarian',
    TIMER: 'timer',
    TABLE_TOPICS: 'table-topics-master',
  },

  // Toastmasters Official Color Palette
  COLORS: {
    // Primary Colors
    PRIMARY_BLUE: '#004165',        // Loyal Blue
    SECONDARY_MAROON: '#772432',    // True Maroon
    TEXT_GRAY: '#A9B2B1',           // Cool Gray
    ACCENT_YELLOW: '#F2DF74',       // Happy Yellow
    
    // Extended Palette for UI
    BG: '#F5F5F5',
    LIGHT_BG: '#F5F5F5',
    CARD_BG: '#FFFFFF',
    TEXT_PRIMARY: '#004165',         // Use Loyal Blue for main text
    TEXT_SECONDARY: '#A9B2B1',       // Use Cool Gray for secondary
    BORDER: '#E0E0E0',
    FAVORITE: '#F2DF74',             // Happy Yellow for favorites
    SUCCESS: '#4CAF50',
    ERROR: '#D32F2F',
  },

  SIZES: {
    SCREEN_PADDING: 16,
    BORDER_RADIUS: 12,
    ICON_SIZE: 24,
  },

  TIME_LIMITS: {
    PREPARED_SPEECH_MIN: 5,
    PREPARED_SPEECH_MAX: 7,
    IMPROMPTU_MIN: 1,
    IMPROMPTU_MAX: 2,
  },

  FEATURES: {
    OFFLINE_ENABLED: true,
    PRINT_ENABLED: true,
    SHARE_ENABLED: true,
    FAVORITES_ENABLED: true,
    SEARCH_ENABLED: true,
  },
};
