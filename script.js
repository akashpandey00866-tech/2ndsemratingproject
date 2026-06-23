function calculateResult()
{
    let studentName = document.getElementById("name").value;

    let maths = Number(document.getElementById("m1").value);
    let physics = Number(document.getElementById("m2").value);
    let chemistry = Number(document.getElementById("m3").value);
    let english = Number(document.getElementById("m4").value);
    let computer = Number(document.getElementById("m5").value);

    let total = maths + physics + chemistry + english + computer;

    let average = total / 5;

    let percentage = (total / 500) * 100;

    let result;
    if(percentage >= 40)
        result = "PASS";
    else
        result = "FAIL";

    let grade;

    if(percentage >= 90)
        grade = "A+";
    else if(percentage >= 80)
        grade = "A";
    else if(percentage >= 70)
        grade = "B";
    else if(percentage >= 60)
        grade = "C";
    else if(percentage >= 40)
        grade = "D";
    else
        grade = "F";

    let rank;

    if(percentage >= 90)
        rank = "1";
    else if(percentage >= 75)
        rank = "2";
    else if(percentage >= 60)
        rank = "3";
    else
        rank = "4";

    document.getElementById("result").innerHTML = `
        <h2>Student Report Card</h2>

        <h3>Name : ${studentName}</h3>

        <table>
            <tr>
                <th>Subject</th>
                <th>Marks</th>
            </tr>

            <tr>
                <td>Maths</td>
                <td>${maths}</td>
            </tr>

            <tr>
                <td>Physics</td>
                <td>${physics}</td>
            </tr>

            <tr>
                <td>Chemistry</td>
                <td>${chemistry}</td>
            </tr>

            <tr>
                <td>English</td>
                <td>${english}</td>
            </tr>

            <tr>
                <td>Computer</td>
                <td>${computer}</td>
            </tr>
        </table>

        <h3>Total Marks : ${total} / 500</h3>
        <h3>Average Marks : ${average.toFixed(2)}</h3>
        <h3>Percentage : ${percentage.toFixed(2)}%</h3>
        <h3>Grade : ${grade}</h3>
        <h3>Result : ${result}</h3>
        <h3>Rank : ${rank}</h3>
    `;
}