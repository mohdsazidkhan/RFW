// Translation helper for dynamic content from JSON files
import { translations as enTranslations } from '../translations/en';
import { translations as arTranslations } from '../translations/ar';

// This function will be used to get translations for calendar and designer data
export const getTranslation = (language, key, defaultValue = '') => {
  const translations = language === 'ar' ? arTranslations : enTranslations;
  
  // Navigate through nested translation keys
  const keys = key.split('.');
  let value = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return defaultValue;
    }
  }
  
  return value || defaultValue;
};

// Helper to translate calendar text
export const translateCalendarText = (language, text) => {
  if (language === 'ar') {
    switch (text) {
      case enTranslations.calendarData.runwayShows:
        return arTranslations.calendarData.runwayShows;
      case enTranslations.calendarData.collectionPresentation:
        return arTranslations.calendarData.collectionPresentation;
      default:
        return text;
    }
  }
  return text;
};

// Helper to translate month names
export const translateMonth = (language, dateString) => {
  if (language === 'ar') {
    const [month, day] = dateString.split(' ');
    if (month.toUpperCase() === enTranslations.calendarData.october.toUpperCase()) {
      return `${arTranslations.calendarData.october} ${day}`;
    }
  }
  return dateString;
};

// Helper to translate category types
export const translateCategory = (language, category) => {
  if (language === 'ar') {
    const categoryMap = {
      'COUTURE': 'أزياء عالية',
      'READY-TO-WEAR': 'جاهز للارتداء',
      'STREETWEAR': 'ملابس الشارع',
      'CARGO': 'كارغو'
    };
    return categoryMap[category] || category;
  }
  return category;
};

