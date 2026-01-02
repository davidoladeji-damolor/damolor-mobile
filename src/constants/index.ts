/**
 * App-wide constants
 */

export const API_BASE_URL = __DEV__
  ? 'http://localhost:3000/api/v1'
  : 'https://api.damolor.com/api/v1';

export const API_STAGING_URL = 'https://staging-api.damolor.com/api/v1';

export const STORAGE_KEYS = {
  ACCESS_TOKEN: '@damolor:access_token',
  REFRESH_TOKEN: '@damolor:refresh_token',
  USER_DATA: '@damolor:user_data',
} as const;

export const COLORS = {
  primary: '#1a5f3f',
  secondary: '#2d8659',
  accent: '#4a9d6e',
  background: '#ffffff',
  surface: '#f5f5f5',
  text: '#1a1a1a',
  textSecondary: '#666666',
  error: '#dc3545',
  success: '#28a745',
  warning: '#ffc107',
} as const;

export const FONTS = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
} as const;

