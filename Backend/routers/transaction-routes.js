const router = require('express').Router();
const connection = require('./../db');
const TRANSACTION_QUERY = "SELECT * FROM fa_Transaction";

router.get('/', (req,res) => {
    connection.query(TRANSACTION_QUERY, (err, result) => {
        if (err) throw err;
        else
          return res.json(result)
    });
});

//  Retrieve user with id
router.get('/:id', function (req, res) {
    let id = req.params.id;
    connection.query(TRANSACTION_QUERY+' where id=?', id, (err, result) => {
        if (err) throw err;
        else
          return res.json(result)
    });

});

//  Create New Device
router.post('/', (req, res) => {
    let trans = req.body;

    connection.query("Insert into fa_Transaction set ?", trans, (err, result) => {
        if (err) throw err;
        else
        {
            return res.json({  data: result["insertId"], message: 'New transaction has been created successfully.' });
        }
    });

});


// Update an existing device
router.put('/:id', (request, response) => {
    const id = request.params.id;

    connection.query('UPDATE fa_Transaction SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;

        response.send('Transaction updated successfully.');
    });
});

// Delete a device
router.delete('/:id', (request, response) => {
    const id = request.params.id;

    connection.query('DELETE FROM fa_Transaction WHERE id = ?', id, (error, result) => {
        if (error) throw error;

        response.send('Transaction deleted.');
    });
});

module.exports = router;
