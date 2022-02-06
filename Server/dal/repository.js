const fs = require('fs');
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const file = './db-server/questions-db/questions.json';
class FileDbContext {
    constructor() { /*this.init();*/ }
    init()
    {
        fs.open(file, 'w',(err, file) => {if (err) throw err;console.log('Saved!');});
        fs.writeFile(file, '[ ]', function (err) { if (err) { console.log('error: '+err); throw err } console.log('updated') })
    }
    
    async readFileAsync(filename) { return JSON.parse(await readFile(filename)); }

    async AddToFileAsync(filename, object) {
        const data = await this.readFileAsync(filename);
        console.log("data : " +JSON.stringify(data));
        if (!data) {data = []; }
        data.push(object);
        await writeFile(filename, JSON.stringify(data));
    }
}
const TestActions = () => {
    let fileDbContext = new FileDbContext();
    (() => {
        fileDbContext.AddToFileAsync(file, { id: 5, cont: "some contend" })
    })();
}
TestActions();