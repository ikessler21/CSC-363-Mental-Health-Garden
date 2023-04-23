
class MoodTracker{
    database = localStorage.getItem("entries");  //set of entries
    //consider adding file parsing to constructor to save things


    checkin(mood){

        localStorage.setItem("checkin", "true");
        var entries = localStorage.getItem("entries");
        if(entries!=null) localStorage.setItem("entries", entries + "," + mood)
        else localStorage.setItem("entries", mood)
        this.database = localStorage.getItem("entries").split(',');
    }
    checkedIn(){ //not used
        if(localStorage.getItem("checkin") == "true") return true;
        else return false;
    }


}
