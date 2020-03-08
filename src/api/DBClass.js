// Firebase App (the core Firebase SDK) is always required and must be listed first

export default class DBActions {
    constructor(){
        
          this.databaseRef = firebase.database().ref();
    }
    fetchLearnings() {
        const topics =  this.databaseRef.child('/learn-topics/yLJOSetvfCcKHpm3IoMk');
        console.log(topics);
    }



  
}
