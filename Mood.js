class MoodEntry{

    constructor(mood,date){
        this.mood = mood;
        this.date = date;

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

    checkin(mood, date){
        this.database.push(new MoodEntry(mood, date));

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