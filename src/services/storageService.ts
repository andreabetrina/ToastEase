import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'toastease_favorites';
const LAST_VIEWED_KEY = 'toastease_last_viewed';

export const StorageService = {
  // Favorites Management
  async getFavorites(): Promise<string[]> {
    try {
      const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error('Error getting favorites:', error);
      return [];
    }
  },

  async addFavorite(roleId: string): Promise<void> {
    try {
      const favorites = await this.getFavorites();
      if (!favorites.includes(roleId)) {
        favorites.push(roleId);
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      }
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  },

  async removeFavorite(roleId: string): Promise<void> {
    try {
      const favorites = await this.getFavorites();
      const filtered = favorites.filter((id) => id !== roleId);
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  },

  async setFavorites(favorites: string[]): Promise<void> {
    try {
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error setting favorites:', error);
    }
  },

  // Last Viewed Tracking
  async getLastViewed(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(LAST_VIEWED_KEY);
    } catch (error) {
      console.error('Error getting last viewed:', error);
      return null;
    }
  },

  async setLastViewed(roleId: string): Promise<void> {
    try {
      await AsyncStorage.setItem(LAST_VIEWED_KEY, roleId);
    } catch (error) {
      console.error('Error setting last viewed:', error);
    }
  },

  // Clear all data
  async clearAll(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([FAVORITES_KEY, LAST_VIEWED_KEY]);
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  },
};
