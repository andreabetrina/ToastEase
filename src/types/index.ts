export interface RoleScript {
  id: string;
  name: string;
  role: string;
  description: string;
  script: string;
  tips?: string[];
  isFavorite?: boolean;
}

export interface AppState {
  favorites: string[]; // Array of role IDs
}
