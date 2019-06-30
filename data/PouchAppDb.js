import PouchDB from 'pouchDB'
import findPlugin from 'pouchdb-find'
PouchDB.plugin(findPlugin)
// PouchDB.plugin(require('pouchdb-find'))

const PouchAppDb = new PouchDB('http://localhost:5984/app')

PouchAppDb.createIndex({
  index: {fields: ['dataType']}
})

export default PouchAppDb
