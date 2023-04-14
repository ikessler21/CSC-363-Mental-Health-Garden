class MoodEntry{
    mood = 0;
    date;

    constructor(m){
        this.mood = m;
        this.date = new Date();

    } 

    /*consider moving switch to constructor/ swapping mplementation
     (depends on how we want to interact w UI) */
    // get mood(){
    //     switch(this.mood){
    //         default: return "images/blue icon.png";
    //         case 1: return "images/blue icon.png";
    //         case 2: return "images/light blue icon.png";
    //         case 3: return "images/yellow icon.png";
    //         case 4: return "images/light green icon.png";
    //         case 5: return "images/green icon.png";
    //     }

    // }
    

}

class MoodTracker{
    database = [];  //set of entries
    checkedIn = false;
    //consider adding file parsing to constructor to save things

    checkin(mood){
        var m = new MoodEntry(mood)
        this.database.push(m);
        this.checkedIn = true;

    }

    reset(){
        this.checkedIn = false;
    }

    // /**somehow runs on startup? */
    // checkIn(){
    //     if(!checkedIn){
    //         /** UI interaction to get info from user */
    //         mood;
    //         date;
    //         this.database.push(new MoodEntry(mood, date));
    //     }
    // }

    // /**reset/run at midnight? */
    // reset(){
    //     if(checkedIn){
    //         this.checkedIn = false;
    //     }
    //     else {
    //         previousdate; // remove later once defined
    //         this.database.push(new MoodEntry(0,previousdate))
    //     }
    // }
}
