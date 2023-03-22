/*CLASS ENTRY
* contstuctor for new entry object
*/
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

/*CLASS ENTRY_DATABASE
* stores entryDatabase array
* allows new entry objects to be added to entryDatabase
*/
class EntryDatabase {
    entryDatabase = new [];

    addEntry(Entry)
    {
        entryDatabase.push(Entry);
    }
}