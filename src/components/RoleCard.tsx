import React, { useState } from 'react';
import { RoleScript } from '../types';
import { APP_CONSTANTS } from '../constants';
import './RoleCard.css';
import { Star, Share2, Printer } from 'lucide-react';

interface RoleCardProps {
  role: RoleScript;
  isFavorite: boolean;
  onToggleFavorite: (roleId: string) => void;
  onPrint?: (role: RoleScript) => void;
}

const RoleCard: React.FC<RoleCardProps> = ({
  role,
  isFavorite,
  onToggleFavorite,
  onPrint,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: role.name,
          text: `${role.name}: ${role.description}\n\n${role.script}`,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      const text = `${role.name}\n\n${role.description}\n\n${role.script}`;
      navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
      });
    }
  };

  return (
    <div className="role-card">
      {/* Header with title and action buttons */}
      <div className="card-header">
        <div className="title-container">
          <h3 className="role-name">{role.name}</h3>
          <p className="description">{role.description}</p>
        </div>
        <div className="actions">
          <button
            className={`action-btn favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(role.id)}
            aria-label={isFavorite ? 'Remove favorite' : 'Add favorite'}
            title={isFavorite ? 'Remove favorite' : 'Add favorite'}
          >
            <Star
              size={20}
              fill={isFavorite ? '#004165' : 'none'}
              color={isFavorite ? '#004165' : 'currentColor'}
            />
          </button>
          <button
            className="action-btn share-btn"
            onClick={handleShare}
            aria-label="Share"
            title="Share"
          >
            <Share2 size={18} />
          </button>
          {onPrint && (
            <button
              className="action-btn print-btn"
              onClick={() => onPrint(role)}
              aria-label="Print"
              title="Print"
            >
              <Printer size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Script Section */}
      <div className="card-body">
        <div
          className={`script-container ${isExpanded ? 'expanded' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h4 className="script-title">Script</h4>
          <pre className="script-text">{role.script}</pre>
        </div>

        {/* Tips Section */}
        {role.tips && role.tips.length > 0 && (
          <div className="tips-container">
            <h4 className="tips-title">💡 Tips for Success</h4>
            <ul className="tips-list">
              {role.tips.map((tip, index) => (
                <li key={index} className="tip-item">
                  <span className="tip-bullet">•</span>
                  <span className="tip-text">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoleCard;
