let connection = require('../config/db.js');
let moment = require('moment')

moment.locale('fr'); // 'fr'
class Message{

    constructor (row){
        this.row = row;
    }


    get content(){
        return this.row.content
    }
    get created_at(){
        return moment(this.row.created_at)
    }


    static create (content, cb){
        connection.query("INSERT INTO comments SET content = ?, created_at = ?", [content, new Date()], (err, result) => { 
            if (err) throw err
            cb(result);
         });
    }

    static all(cb){
        connection.query('SELECT * FROM comments', (err,rows)=> {
            if(err) throw err
            cb(rows.map( (row) => new Message(row)))
        })
        
    }
}


module.exports = Message