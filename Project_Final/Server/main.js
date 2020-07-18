const express = require('express');
const path = require('path');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const parseString = require("xml2js").parseString;
const fs = require("fs");
const xml2js = require("xml2js");

function buildXML(path, json) {
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(json);
    fs.writeFile(path, xml, function (err, data) {
        if (err) console.log(err);
        console.log("successfully written our update xml to file");
    });
}

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

app.get('/menu', function (req, res) {
    res.contentType('text/xml');
    res.sendFile(path.join(__dirname, 'data/menu.xml'));
});

app.get('/revervation', function (req, res) {
    res.contentType('text/xml');
    res.sendFile(path.join(__dirname, 'data/revervation.xml'));
});

app.get('/contact', function (req, res) {
    res.contentType('text/xml');
    res.sendFile(path.join(__dirname, 'data/contact.xml'));
});

app.post('/revervation', function (req, res) {
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
        res.send({ code: 400 })
        console.log('wrong')
    } else {
        const path = 'data/revervation.xml'
        try {
            if (fs.existsSync(path)) {
                fs.readFile(path, "utf-8", function (err, data) {
                    if (err) console.log(err);
                    parseString(data, function (err, result) {
                        if (err) console.log(err);
                        const length = result.revervations.revervation.length;
                        let id = Number(result.revervations.revervation[length - 1].id[0]) + 1;
                        let data = req.body;
                        data['id'] = id;
                        data['confirm'] = false;
                        result.revervations.revervation.push(data);
                        buildXML(path, result);
                        res.send({ code: 202 })
                    });
                });
            } else {
                let json = {};
                let data = req.body;
                data['id'] = 0;
                data['confirm'] = false;
                json['revervations'] = [{ revervation: data }]
                buildXML(path, json);
                res.send({ code: 201 })
            }

        } catch (err) {
            res.send({ code: 400 })
        }

    }
});

app.post('/contact', function (req, res) {
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
        res.send({ code: 400 })
        console.log('wrong')
    } else {
        const path = 'data/contact.xml'
        try {
            if (fs.existsSync(path)) {
                fs.readFile(path, "utf-8", function (err, data) {
                    if (err) console.log(err);
                    parseString(data, function (err, result) {
                        if (err) console.log(err);
                        const length = result.contacts.contact.length;
                        let id = Number(result.contacts.contact[length - 1].id[0]) + 1;
                        let data = req.body;
                        data['id'] = id;
                        data['isRead'] = false;
                        result.contacts.contact.push(data);
                        buildXML(path, result);
                        res.send({ code: 202 })
                    });
                });
            } else {
                let json = {};
                let data = req.body;
                data['id'] = 0;
                data['isRead'] = false;
                json['contacts'] = [{ contact: data }]
                buildXML(path, json);
                res.send({ code: 201 })
            }

        } catch (err) {
            res.send({ code: 400 })
        }

    }
});

app.post('/add', function (req, res) {
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
        res.send({ code: 400 })
        console.log('wrong')
    } else {
        const path = 'data/menu.xml'
        try {
            if (fs.existsSync(path)) {
                fs.readFile(path, "utf-8", function (err, data) {
                    if (err) console.log(err);
                    parseString(data, function (err, result) {
                        if (err) console.log(err);
                        const length = result.menu.item.length;
                        let id = Number(result.menu.item[length - 1].id[0]) + 1;
                        let data = req.body;
                        data['id'] = id;
                        result.menu.item.push(data);
                        buildXML(path, result);
                        res.send({ code: 202 })
                    });
                });
            } else {
                let json = {};
                let data = req.body;
                data['id'] = 0;
                json['menu'] = [{ item: data }]
                buildXML(path, json);
                res.send({ code: 201 })
            }

        } catch (err) {
            res.send({ code: 400 })
        }

    }
});

app.post('/login', function (req, res) {
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
        res.send({ code: 400 })
        console.log('wrong')
    } else {
        const data = req.body;
        if (data.username == 'se05883' && data.password == 'se05883') {
            res.send({ code: 200 })
        } else {
            res.send({ code: 400 })
        }
    }
});

app.put('/delete', function (req, res) {
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
        res.send({ code: 400 })
        console.log('wrong')
    } else {
        const path = 'data/menu.xml'
        try {
            if (fs.existsSync(path)) {
                fs.readFile(path, "utf-8", function (err, data) {
                    if (err) console.log(err);
                    parseString(data, function (err, result) {
                        if (err) console.log(err);
                        let data = req.body;
                        for (let i = 0; i < result.menu.item.length; i++) {
                            if (result.menu.item[i].id[0] == data.deleteID) {
                                result.menu.item.splice(i, 1);
                                console.log('remove');
                                break;
                            }
                        }
                        buildXML(path, result);
                        res.send({ code: 202 })
                    });
                });
            }
        } catch (err) {
            res.send({ code: 400 })
        }

    }
})

app.put('/update-reversation', function (req, res) {
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
        res.send({ code: 400 })
        console.log('wrong')
    } else {
        const path = 'data/revervation.xml'
        try {
            if (fs.existsSync(path)) {
                fs.readFile(path, "utf-8", function (err, data) {
                    if (err) console.log(err);
                    parseString(data, function (err, result) {
                        if (err) console.log(err);
                        let data = req.body;
                        for (let i = 0; i < result.revervations.revervation.length; i++) {
                            if (result.revervations.revervation[i].id[0] == data.id) {
                                result.revervations.revervation[i].confirm = true;
                                console.log('update');
                                break;
                            }
                        }
                        buildXML(path, result);
                        res.send({ code: 202 })
                    });
                });
            }
        } catch (err) {
            res.send({ code: 400 })
        }

    }
})

app.put('/update-contact', function (req, res) {
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
        res.send({ code: 400 })
        console.log('wrong')
    } else {
        const path = 'data/contact.xml'
        try {
            if (fs.existsSync(path)) {
                fs.readFile(path, "utf-8", function (err, data) {
                    if (err) console.log(err);
                    parseString(data, function (err, result) {
                        if (err) console.log(err);
                        let data = req.body;
                        for (let i = 0; i < result.contacts.contact.length; i++) {
                            if (result.contacts.contact[i].id[0] == data.id) {
                                result.contacts.contact[i].isRead = true;
                                console.log('update');
                                break;
                            }
                        }
                        buildXML(path, result);
                        res.send({ code: 202 })
                    });
                });
            }
        } catch (err) {
            res.send({ code: 400 })
        }

    }
})



const server = app.listen(8080, () => {
    console.log('Started listening on 8080');
});