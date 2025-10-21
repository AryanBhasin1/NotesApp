const { notes } = require('../models/noteModel');

function getNotes(req, res) {
  const userNotes = notes.filter(n => n.userId === req.user.id);
  res.json(userNotes);
}

function createNote(req, res) {
  const note = { id: Date.now(), userId: req.user.id, text: req.body.text };
  notes.push(note);
  res.json(note);
}

function updateNote(req, res) {
  const note = notes.find(n => n.id == req.params.id && n.userId === req.user.id);
  if (!note) return res.status(404).json({ message: 'Note not found' });
  note.text = req.body.text;
  res.json(note);
}

function deleteNote(req, res) {
  const index = notes.findIndex(n => n.id == req.params.id && n.userId === req.user.id);
  if (index === -1) return res.status(404).json({ message: 'Note not found' });
  notes.splice(index, 1);
  res.json({ message: 'Note deleted' });
}

module.exports = { getNotes, createNote, updateNote, deleteNote };
