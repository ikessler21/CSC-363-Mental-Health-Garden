/*IS_WILTED
* if it's been 7 days, then function will return true value to indicate flowers are wilted
*/
window.onload = function isWilted() {
    var compareDate = EntryDatabase.entryDatabase[EntryDatabase.entryDatabase.length - 1];
    var diff = Math.abs(new Date() - compareDate);
    if (diff > 7)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  document.getElementById("wilt").innerHTML =isWilted();
  //in main html, on page load, check this value and set background accordingly

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