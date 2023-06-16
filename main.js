//Javascript simply handles all the visual feedback and local notification states as they aren't tied to a real database
//User can read all notifications or read one notification by clicking on it to trigger visual feedback and read state

const notifications = document.getElementsByClassName("notification-box");
const notificationCounter = document.getElementById("active-notifications-amount");

//Loop through all as read
function markAllRead () {
    unreadIcons = document.getElementsByClassName("unread-icon"); //Get unread icons
    for(let i=0;i<notifications.length;i++) {
        NotificationReadState(notifications[i], unreadIcons[i]); //Visual and assign readstate
    }
    notificationCounter.innerHTML = 0; //notification is 0
}

//Read one notification not part of challenge
function markThisRead (notification) {
    if(notification.getAttribute("read", true)) return;//If is already read don't mark

    notificationCounter.innerHTML--; //reduce counter by one
    NotificationReadState(notification, notification.querySelector('.unread-icon')); //Visuals of read and state
}


//read state when user reads a notification
function NotificationReadState (notification, readIcon) {
    notification.style.backgroundColor = "white";
    readIcon.style.visibility = "hidden";
    notification.setAttribute("read", true); //Assign that we cant read this notification again  
}