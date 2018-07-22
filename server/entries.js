const router = require('express').Router();
const { Entry } = require('./db');

// matches GET requests to /api/puppies/
router.get('/', async (req, res, next) => {
  try {
    const allEntries = await Entry.findAll();
    res.send(allEntries);
  } catch (err) {
    next(err);
  }
});
// matches POST requests to /api/puppies/
router.post('/', async (req, res, next) => {
  try {
    const newEntry = await Entry.create(req.body);
    res.json(newEntry);
  } catch (err) {
    next(err);
  }
});
// matches PUT requests to /api/puppies/:puppyId
router.put('/:id', async (req, res, next) => {
  try {
    const [updatedRow, updatedEntry] = await Entry.update(req.body, {where: {id: req.params.id}});
    res.json(updatedEntry[0]);
  } catch (err) {
    next(err);
  }
});
// matches DELETE requests to /api/puppies/:puppyId
router.delete('/:id', function (req, res, next) { /* etc */});

module.exports = router;