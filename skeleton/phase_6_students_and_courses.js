class Student{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        this.courses = [];
        this.timeblocks = {
            "Mon" : new Array(8).fill(true),
            "Tue" : new Array(8).fill(true),
            "Wed" : new Array(8).fill(true),
            "Thr" : new Array(8).fill(true),
            "Fri" : new Array(8).fill(true),
        }
    }
}

class Course{
    constructor(name, dep, credits, times){
        this.name = name;
        this.dep = dep;
        this.credits = credits;
        this.students = [];
        this.times = times;
        // times = {"Mon" : 1, "Mon" : 2, "Wed" : 3}
    }
}

Course.prototype.conflictsWith = function(student){
    this.keys(times).forEach(function(key){
        let val = times[key];
        if(!student.timeblocks[key][val]){
            return false;
        }
    });
    return true;
}

Course.prototype.addStudent = function(student){
    this.students.push(student)
}

Student.prototype.name = function(){
    return `${this.firstname} ${this.lastname}`
}

Student.prototype.enroll = function(course){
    if(this.courses.includes(course) || course.conflictsWith(this)){
        return;
    }
    this.courses.push(course);
    this.updateTimeBlocks(course);
    course.addStudent(this);
}

Student.prototype.updateTimeBlocks = function(course){
    course.keys(times).forEach(function(key){
        let val = times[key];
        student.timeblocks[key][val] = false;
    });
}

Student.prototype.courseLoad = function(){
    creditslist = {};
    for(let i = 0; i < this.courses.length; i ++){
        let course = courses[i];
        let dep = course.dep;
        let credit = course.credits;
        if(creditslist[dep] === undefined){
            creditslist[dep] = credit;
        }else{
            creditslist[dep] += credit;
        }
    }
    return creditslist;
}
