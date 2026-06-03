function submitForm(){
    let n =document.getElementById("subjects").value;
    let sub = n;
    let totalMarks = 0;
    for(let i=1; i<=n; i++){
        let marks = parseFloat(prompt("Enter marks for subject " + i));
        totalMarks += marks;
    }
    let avg = totalMarks / n;
    let grade
    let result
    if(avg >= 90){
        grade = "A";
        result = "Pass";
    }
    else if(avg >= 80){
        grade = "B";
        result = "Pass";
    }
    else if(avg >= 70){
        grade = "C";
        result = "Pass";
    }
    else if(avg >= 60){
        grade = "D";
        result = "Pass";
    }
    else{
        grade = "F";
        result = "Fail";
    }
    document.getElementById("result").innerHTML = "Total Marks: " + totalMarks + "<br>Average Marks: " + avg + "<br>Grade: " + grade + "<br>Result: " + result;
}