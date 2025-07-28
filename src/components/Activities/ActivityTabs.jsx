import { useState } from 'react';

const seasons = ['Summer', 'Fall', 'Winter', 'Spring'];

function ActivityTabs({ selected, onSelect }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 18, margin: '2rem 0' }}>
      {seasons.map((season) => (
        <button
          key={season}
          onClick={() => onSelect(season)}
          style={{
            padding: '0.6rem 1.5rem',
            fontSize: '1rem',
            borderRadius: '2rem',
            border: 'none',
            background: selected === season ? '#3a5a40' : '#eaf6fb',
            color: selected === season ? '#fff' : '#3a5a40',
            fontFamily: 'serif',
            cursor: 'pointer',
            boxShadow: selected === season ? '0 2px 8px rgba(0,0,0,0.10)' : 'none',
            transition: 'background 0.2s',
          }}
        >
          {season}
        </button>
      ))}
    </div>
  );
}

export default ActivityTabs; 