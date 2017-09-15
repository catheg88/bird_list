import PouchDB from 'pouchDB'

var db = new PouchDB('http://localhost:5984/birds')

export default db
