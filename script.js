function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function fillDetailsBasedOnCondition() {
    const sub = getQueryParam('sub');
    const type = getQueryParam('type');
    if (sub === 'Science') {
        document.getElementById('name').innerHTML = sub;
        document.getElementById('type').innerHTML = type;
        document.getElementById('tname').innerHTML = "Mr. John Anderson";
        document.getElementById('contact').innerHTML = "9998887776";
        document.getElementById('att').innerHTML = "80.5%";
    } 
    else if (sub === 'Maths') {
        document.getElementById('name').innerHTML = sub;
        document.getElementById('type').innerHTML = type;
        document.getElementById('tname').innerHTML = "Dr. Michael Green";
        document.getElementById('contact').innerHTML = "9876543219";
        document.getElementById('att').innerHTML = "92.7%";
    } 
    else if (sub === 'Arts') {
        document.getElementById('name').innerHTML = sub;
        document.getElementById('type').innerHTML = type;
        document.getElementById('tname').innerHTML = "Mr. John Anderson";
        document.getElementById('contact').innerHTML = "8866335599";
        document.getElementById('att').innerHTML = "77.4%";
    } 
    else if (sub === 'Social') {
        document.getElementById('name').innerHTML = sub;
        document.getElementById('type').innerHTML = type;
        document.getElementById('tname').innerHTML = "Dr. Michael Green";
        document.getElementById('contact').innerHTML = "7897897896";
        document.getElementById('att').innerHTML = "83.6%";
    } 
    else if (sub === 'Hindi') {
        document.getElementById('name').innerHTML = sub;
        document.getElementById('type').innerHTML = type;
        document.getElementById('tname').innerHTML = "Mr. John Anderson";
        document.getElementById('contact').innerHTML = "9871237654";
        document.getElementById('att').innerHTML = "91.8%";
    } 
    else if (sub === 'English') {
        document.getElementById('name').innerHTML = sub;
        document.getElementById('type').innerHTML = type;
        document.getElementById('tname').innerHTML = "Mr. John Anderson";
        document.getElementById('contact').innerHTML = "6789678945";
        document.getElementById('att').innerHTML = "95.1%";
    } 
    else if (sub === 'Sports') {
        document.getElementById('name').innerHTML = sub;
        document.getElementById('type').innerHTML = type;
        document.getElementById('tname').innerHTML = "Mr. John Anderson";
        document.getElementById('contact').innerHTML = "7272989856";
        document.getElementById('att').innerHTML = "75.3%";
    } 
    else if (sub === 'Project') {
        document.getElementById('name').innerHTML = sub;
        document.getElementById('type').innerHTML = type;
        document.getElementById('tname').innerHTML = "Mr. John Anderson";
        document.getElementById('contact').innerHTML = "9089087765";
        document.getElementById('att').innerHTML = "88.2%";
    } 
    else {
        document.getElementById('name').innerHTML = "NA";
        document.getElementById('type').innerHTML = "NA";
        document.getElementById('tname').innerHTML = "NA";
        document.getElementById('contact').innerHTML = "NA";
        document.getElementById('att').innerHTML = "NA";
    }
}