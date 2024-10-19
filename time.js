const teachers = {
    'Math': {
        name: 'Mr. Mukesh Ambani',
        room: 'AB2 102',
        
    },
    'Sci': {
        name: 'Mr. Gautam Adani',
        room: 'AB6 202',
        
    },
    'Soc': { 
        name: 'Mr. K Sivan',
        room: 'AB1 305',
       
    },
    'Hin': {
        name: 'Ms. Anita Kapoor',
        room: 'AB7 402',
      
    },
    'Eng': {
        name: 'Mr. Rakesh Jhunjhunwala',
        room: 'AB8 103',
        
    },
    'Art': {
        name: 'Mr. Akhilesh Yadav',
        room: 'Art Studio',
        
    },
    'Spo': {
        name: 'Mr. Narendra Modi',
        room: 'Gymnasium',
        
    },
    'Pro':{
        name: 'Mr. Anant Ambani',
        room: 'AB3 201',
       
    }
};

function show(sub) {
    let info = document.getElementById("detail");
    let Teacher = teachers[sub];
    document.getElementById("name").innerText = `${sub} Teacher: ${Teacher.name}`;
    document.getElementById("room").innerText = `Room: ${Teacher.room}`;
    info.style.display = "block";
}
