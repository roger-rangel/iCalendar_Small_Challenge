/* eslint-disable no-unused-vars */
import eventModel from "../Models/eventModel";

export function retrieveEvents() {
    let data = [];
    
    data.push(new eventModel({
        id: 1,
        title: "Sofia's Birthday",
        details: "We will be meeting at the Main Boulevard for pizza and drinks",
        date: '10/15/2022',
        time: "11:55",
        creator: "Brian Culbertson",
    }))  
    data.push(new eventModel({
        id: 2,
        title: "International party",
        details: "This party will take place at the National park",
        date: '7/3/2022',
        time: "15:00",
        creator: "Brian Culbertson",
    }))  
    
    return data;
}
