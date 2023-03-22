//constructor for an entry object
class Entry {
    constructor(name, date, body) {
        if (name = null) {          //if the user does not have a name for entry, use date
            this.name = date;
        }
        else {
            this.name = name;
        }

        this.date = date;
        this.body = body;
    }
}

/*
we need:
array of entry objects

whenever user makes new entry:
array.push(Entry.constructor(name, date, body))
*/