import express from 'express';
import connection from './conf';

const router = express.Router();

// en tant qu'utilisateur, je veux pouvoir créer une nouvelle playlist.
router.post('/playlists', (req, res) => {
  const form = req.body;
  connection.query('INSERT INTO playlist SET ?', form, (err) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(201);
  });
});

// en tant qu'utilisateur, je veux pouvoir consulter une playlist en renseignant son id dans l'url.
router.get('/playlists/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT title FROM playlist WHERE id = ?', id, (err, results) => {
    if (err) {
      res.sendStatus(500);
    }
    res.json(results);
  });
});

// en tant qu'utilisateur, je veux créer et affecter un morceau à une playlist.
router.post('/tracks', (req, res) => {
  const form = req.body;
  connection.query('INSERT INTO track SET ?', form, (err) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(201);
  });
});

// en tant qu'utilisateur, je veux lister tous les morceaux d'une playlist.
router.get('/playlists/:id/tracks', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT title, artist FROM tracks WHERE playlist_id = ?', id, (err, results) => {
    if (err) {
      res.sendStatus(500);
    }
    res.json(results);
  });
});

// en tant qu'utilisateur, je veux pouvoir supprimer une playlist
router.delete('/playlists/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM playlist WHERE id = ?', id, (err) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(204);
  });
});

// en tant qu'utilisateur, je veux pouvoir modifier une playlist.
router.put('/playlists/:id', (req, res) => {
  const { id } = req.params;
  const form = req.body;
  connection.query('UPDATE playlist SET ? WHERE id = ?', [form, id], , (err) => {
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(201);
  })
});

router.get('/playlists', (req, res) => {
  const params = [];
  let sqlQuery = `
  SELECT t.title as trackTitle, p.title 
  FROM track t 
  JOIN playlist P 
  ON t.playlist_id = p.id`;

  const { playlistTitle, playlistGenre, trackTitle } = req.query;
  if (playlistTitle) {
    sqlQuery += ' WHERE p.title LIKE %?%'
    params.push(playlistTitle);
  }

  if (playlistGenre) {
    sqlQuery += (!playlistTitle) ? ' WHERE' : ' AND';
    sqlQuery += ' p.genre = ?';
    params.push(playlistGenre);
  }

  if (trackTitle) {
    sqlQuery += (!playlistGenre && !playlistTitle) ? ' WHERE' : ' AND';
    sqlQuery += 't.title = ?';
    params.push(trackTitle);
  }

  connection.query(sqlQuery, params, (err, results) => {
    if (err) {
      res.sendStatus(500);
    }
    res.json(results);
  })
});

export default router;
