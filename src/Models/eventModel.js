export default event

function event(event) {
    if(event !== undefined) {
        this._id = event._id;
        this.title = event.title;
        this.details = event.details;
        this.date = event.date;
        this.time = event.time;
        this.creator = event.creator;
    }
}
