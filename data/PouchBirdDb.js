import PouchDB from 'pouchDB'

var PouchBirdDb = new PouchDB('http://localhost:5984/birds')

export default PouchBirdDb
