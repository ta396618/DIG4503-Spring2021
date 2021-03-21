import Express from 'express';
import CORS from 'cors';

const App  = Express();
const port = 45030;

App.use(CORS()); 

let names = [
    'Cortney',
    'Dewayne',    'Trenton',    'Pamala',    'Ettie',    'Errol',
    'Lorrie',    'Hang',    'Lauryn',    'Caterina',    'Isa',
    'Marcela'
];


App.get("/people/:person", (req,res) => {
    let result = {name: "not found"};
    names.forEach((value) => {
        if(req.params.person == value){
            result = {name: value};
        }

    });
    res.json(result);
});

App.get("/search/:name", (req, res) => {
    let result = {search: "not found"};
    
    let searchResult = [];
    
    names.forEach((value) => {
        if(value.includes(req.params.name)){
            searchResult.push(value);
            
        }
    });
    if(searchResult.length>0){
        result ={names: searchResult};
    }
    
    res.json(result);
});
App.put("/people/:person", (req, res) => {
    const newName= req.params.person;
    names.push(newName);
    res.json({name: newName});
}); 

App.listen(port, ()=>{
    console.log("server is running!");
    
});



