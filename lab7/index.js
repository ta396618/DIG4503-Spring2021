import Express from "express";

const App = Express();
const port = 45030;

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];


App.get('/names/:person', (req, res) => {
    let person = req.params.person;

    if (names.includes(person)) {
        res.json({ Person: person });
    } else {
        res.json({ Person: "That person is not here." });
    }
});

App.get("/search/:person", (req, res) => {
    const result = names.filter(str => str.includes(req.params.person));

    if (result != 0) {
        res.json({ Search: result });
    } else {
        res.json({ Search: "No value fond against given name." });
    }
});

App.listen(port, () => {
    console.log("server running")
});