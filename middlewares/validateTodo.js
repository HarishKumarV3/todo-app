module.exports = (req, res, next) => {
  if (!req.body.text || req.body.text.trim() === '') {
    return res.status(400).json({ error: 'Todo text is required' });
  }
  next();
};
