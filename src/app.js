import React, { useState } from 'react';
import './App.css';

const MOODS = [
  { label: 'Happy', emoji: '😊' },
  { label: 'Calm', emoji: '😌' },
  { label: 'Sad', emoji: '😢' },
  { label: 'Anxious', emoji: '😰' },
  { label: 'Grateful', emoji: '🙏' },
  { label: 'Excited', emoji: '🎉' },
];

function App() {
  const [entries, setEntries] = useState(
    () => JSON.parse(localStorage.getItem('pj_entries') || '[]')
  );
  const [form, setForm] = useState({
    title: '', date: new Date().toISOString().slice(0, 10), mood: '', text: ''
  });
  const [viewEntry, setViewEntry] = useState(null);

  const saveToStorage = (data) => localStorage.setItem('pj_entries', JSON.stringify(data));

  const handleAdd = () => {
    if (!form.title.trim() || !form.text.trim()) {
      alert('Please add a title and your journal entry.');
      return;
    }
    const updated = [{ id: Date.now(), ...form }, ...entries];
    setEntries(updated);
    saveToStorage(updated);
    setForm({ title: '', date: new Date().toISOString().slice(0, 10), mood: '', text: '' });
  };

  const handleDelete = (id) => {
    if (!window.confirm('Delete this entry?')) return;
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    saveToStorage(updated);
  };

  const formatDate = (d) => {
    if (!d) return '';
    return new Date(d + 'T00:00:00').toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  return (
    <div className="app">
      <div className="header">
        <h1>🌸 My Journal</h1>
        <p>Your private space to write and reflect</p>
      </div>

      <div className="container">
        {/* New Entry Form */}
        <div className="card">
          <div className="card-title">✏️ New Entry</div>
          <div className="form-row">
            <input type="text" placeholder="Entry title..."
              value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
            <input type="date" value={form.date}
              onChange={e => setForm({ ...form, date: e.target.value })} />
          </div>
          <div className="mood-label">How are you feeling?</div>
          <div className="mood-row">
            {MOODS.map(m => (
              <button key={m.label}
                className={`mood-btn ${form.mood === m.label ? 'active' : ''}`}
                onClick={() => setForm({ ...form, mood: form.mood === m.label ? '' : m.label })}>
                {m.emoji} {m.label}
              </button>
            ))}
          </div>
          <textarea placeholder="Write your thoughts here..."
            value={form.text} onChange={e => setForm({ ...form, text: e.target.value })} />
          <button className="save-btn" onClick={handleAdd}>Save Entry</button>
        </div>

        {/* Entry List */}
        <div className="card">
          <div className="entries-header">
            <div className="card-title">📖 My Entries</div>
            <span className="entry-count">{entries.length} {entries.length === 1 ? 'entry' : 'entries'}</span>
          </div>
          {entries.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📖</div>
              <p>No entries yet. Start writing above!</p>
            </div>
          ) : entries.map(e => (
            <div key={e.id} className="entry-card" onClick={() => setViewEntry(e)}>
              <div className="entry-top">
                <div>
                  <div className="entry-title">{e.title}</div>
                  <div className="entry-meta">
                    <span className="entry-date">{formatDate(e.date)}</span>
                    {e.mood && <span className="mood-tag">
                      {MOODS.find(m => m.label === e.mood)?.emoji} {e.mood}
                    </span>}
                  </div>
                </div>
                <button className="delete-btn" onClick={ev => { ev.stopPropagation(); handleDelete(e.id); }}>✕</button>
              </div>
              <div className="entry-preview">{e.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {viewEntry && (
        <div className="modal-bg" onClick={e => e.target.classList.contains('modal-bg') && setViewEntry(null)}>
          <div className="modal">
            <div className="modal-header">
              <div className="modal-title">{viewEntry.title}</div>
              <button className="modal-close" onClick={() => setViewEntry(null)}>✕</button>
            </div>
            <div className="modal-meta">
              <span>📅 {formatDate(viewEntry.date)}</span>
              {viewEntry.mood && <span>{MOODS.find(m => m.label === viewEntry.mood)?.emoji} {viewEntry.mood}</span>}
            </div>
            <div className="modal-body">{viewEntry.text}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
