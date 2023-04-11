class MoodEntry{
    mood = 0;
    date;

    constructor(mood){
        this.mood = mood;
        this.date = new Date();

    } 

    /*consider moving switch to constructor/ swapping mplementation
     (depends on how we want to interact w UI) */
    get mood(){
        switch(this.mood){
            case 0: return "Image/color for null here";
            case 1: return "Image/color for :(( here";
            case 2: return "Image/color for :( here";
            case 3: return "Image/color for :| here";
            case 4: return "Image/color for :) here";
            case 5: return "Image/color for :)) here";
        }

    }
    

}

class MoodTracker{
    database = [];  //set of entries
    checkedIn = false;

    checkin(mood){
        
        this.database.push(new MoodEntry(mood));
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
