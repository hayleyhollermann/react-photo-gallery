const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/likes/:id', (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    console.log(req.body.likes);
        
    const queryT = `UPDATE "gallery" SET "likes" = $1
    WHERE "id" = $2`;
    pool.query(queryT, [req.body.likes, req.params.id]).then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in Put query`, error);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM gallery ORDER BY id`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
}) // END GET Route

module.exports = router;