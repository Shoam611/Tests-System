const fs = require('fs');
const util = require("util");
const Enumerable = require('node-enumerable')
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const demofile = './db-server/questions-db/questions.json';
//interface: 
/*
    create new file
    add data to file
    get data from file
    get peginated data
    Delete data from File
    Update object in File
*/
class Repository {
    constructor() {  }
    
    initFile(dir,file)
    {
        //creaes a file and wtite an empty arrey into it
        // fs.open(demofile, 'w' ,(err, file) => {if (err) throw err;console.log('Saved!');});
        // fs.writeFile(file, '[ ]', function (err) { if (err) { console.log('error: '+err); throw err } console.log('updated') })
    }
    
    async readFileAsync(filename) { return Enumerable.create(...JSON.parse(await readFile(filename))); }
    
    
    async AddToFileAsync(filename, object) 
    {
        const data = await this.readFileAsync(filename);
        console.log("data : " +JSON.stringify(data));
        if (!data) {data = []; }
        data.push(object);
        await writeFile(filename, JSON.stringify(data));
    }
    async getPeginatedList(){ return [  ] }
}
module.exports = Repository;

// const TestActions = () => {
//     let fileDbContext = new FileDbContext();
//     (() => {
//         fileDbContext.AddToFileAsync(file, { id: 5, cont: "some contend" })
//     })();
// }
// TestActions();