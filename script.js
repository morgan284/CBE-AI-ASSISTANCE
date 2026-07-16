function answerQuestion() {
    let question = document.getElementById("question").value.toLowerCase();
    let answer = "";

    if (question.includes("what is ict")) {
        answer = "ICT stands for Information and Communication Technology.";
    } else if (question.includes("capital of kenya")) {
        answer = "The capital city of Kenya is Nairobi.";
    } else if (question.includes("2+2")) {
        answer = "2 + 2 = 4.";
    } else {
        answer = "Sorry, I don't know that yet. More answers can be added later.";
    }

    document.getElementById("answer").innerText = answer;
}
