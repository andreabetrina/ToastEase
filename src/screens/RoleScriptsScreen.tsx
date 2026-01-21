import React, { useState, useEffect } from 'react';
import RoleCard from '../components/RoleCard';
import { ROLE_SCRIPTS } from '../data/roleScripts';
import { RoleScript } from '../types';
import { APP_CONSTANTS } from '../constants';
import './RoleScriptsScreen.css';
import { Search, Star, List, ArrowLeft } from 'lucide-react';

type FilterTab = 'all' | 'favorites';

interface RoleScriptsScreenProps {
  onGoHome?: () => void;
}

const RoleScriptsScreen: React.FC<RoleScriptsScreenProps> = ({ onGoHome }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [loading, setLoading] = useState(true);

  // Load favorites from AsyncStorage on mount
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const savedFavorites = localStorage.getItem('favoriteRoles');
        if (savedFavorites) {
          setFavorites(JSON.parse(savedFavorites));
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  // Save favorites to localStorage whenever it changes
  const handleToggleFavorite = async (roleId: string) => {
    try {
      const newFavorites = favorites.includes(roleId)
        ? favorites.filter((id) => id !== roleId)
        : [...favorites, roleId];

      setFavorites(newFavorites);
      localStorage.setItem('favoriteRoles', JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error saving favorite:', error);
    }
  };

  // Filter scripts based on search query and active tab
  const filteredScripts = ROLE_SCRIPTS.filter((script) => {
    const matchesSearch =
      script.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      script.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      script.script.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === 'favorites') {
      return matchesSearch && favorites.includes(script.id);
    }

    return matchesSearch;
  });

  const handlePrint = (role: RoleScript) => {
    const printWindow = window.open('', '', 'height=600,width=800');
    if (printWindow) {
      printWindow.document.write('<html><head><title>' + role.name + '</title>');
      printWindow.document.write('<style>body { font-family: Arial; padding: 20px; }');
      printWindow.document.write('h1 { color: #004165; }');
      printWindow.document.write('pre { white-space: pre-wrap; }</style></head><body>');
      printWindow.document.write('<h1>' + role.name + '</h1>');
      printWindow.document.write('<p><strong>' + role.description + '</strong></p>');
      printWindow.document.write('<pre>' + role.script + '</pre>');
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  };

  const renderRoleItem = ({ item }: { item: RoleScript }) => (
    <RoleCard
      role={item}
      isFavorite={favorites.includes(item.id)}
      onToggleFavorite={handleToggleFavorite}
      onPrint={handlePrint}
    />
  );

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading roles...</p>
      </div>
    );
  }

  return (
    <div className="roles-screen-container">
      {/* Back Button and Search Bar */}
      <div className="search-section">
        <div className="search-container">
          {onGoHome && (
            <button
              className="back-btn"
              onClick={onGoHome}
              aria-label="Go back to home"
              title="Back to home"
            >
              <ArrowLeft size={24} />
            </button>
          )}
          <Search size={20} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search roles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="clear-btn"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="tabs-container">
        <button
          className={`tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          <List size={18} />
          <span>All ({ROLE_SCRIPTS.length})</span>
        </button>

        <button
          className={`tab ${activeTab === 'favorites' ? 'active' : ''}`}
          onClick={() => setActiveTab('favorites')}
        >
          <Star size={18} />
          <span>Favorites ({favorites.length})</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="content-area">
        {filteredScripts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3 className="empty-title">
              {activeTab === 'favorites' ? 'No Favorites Yet' : 'No Roles Found'}
            </h3>
            <p className="empty-text">
              {activeTab === 'favorites'
                ? 'Mark your favorite roles to see them here'
                : 'Try adjusting your search'}
            </p>
          </div>
        ) : (
          <div className="roles-grid">
            {filteredScripts.map((role) => (
              <RoleCard
                key={role.id}
                role={role}
                isFavorite={favorites.includes(role.id)}
                onToggleFavorite={handleToggleFavorite}
                onPrint={handlePrint}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer Features */}
      <footer className="features-footer">
        <div className="feature-badge">
          <span className="badge-icon">📥</span>
          <span className="badge-text">Offline</span>
        </div>
        <div className="feature-badge">
          <span className="badge-icon">🖨️</span>
          <span className="badge-text">Print</span>
        </div>
        <div className="feature-badge">
          <span className="badge-icon">⭐</span>
          <span className="badge-text">Favorites</span>
        </div>
      </footer>
    </div>
  );
};

export default RoleScriptsScreen;
