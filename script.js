// Variables
let currentNode = questions[0];
const userInputField = document.querySelector("input[type='text']");
const sendButton = document.querySelector(".send-button");
const chatbotResponse = document.getElementById("chatbotResponse");

// Show initial question
showQuestion(currentNode);

// Send button click event listener
sendButton.addEventListener("click", function () {
    const userAnswer = userInputField.value.trim();
    if (userAnswer) {
        answerQuestion(userAnswer);
    } else {
        chatbotResponse.textContent = "กรุณาพิมพ์คำตอบของคุณ";
    }
    userInputField.value = ""; // Clear user input field
});

// Function to answer question and navigate nodes
function answerQuestion(userAnswer) {
    const validAnswer = currentNode.answers.includes(userAnswer);

    if (validAnswer) {
        updateChatbotResponse(userAnswer);

        if (!currentNode.children || !currentNode.children[userAnswer]) {
            endConversation();
        } else {
            currentNode = currentNode.children[userAnswer][0];
            showQuestion(currentNode);
        }
    } else {
        chatbotResponse.textContent = "คำตอบของคุณไม่ถูกต้อง กรุณาเลือกคำตอบจากตัวเลือกที่กำหนด";
    }
}

// Function to show question
function showQuestion(node) {
    chatbotResponse.textContent = node.text;
}

// Function to update chatbot response
function updateChatbotResponse(userAnswer) {
    let riskScore = 0;

    // Logic to update risk score based on user answer
    // Add logic here...

    // Display response with risk assessment and recommendation
    chatbotResponse.textContent = `ผลการประเมิน: คุณมีความเสี่ยงเป็นกรดไหลย้อน ${getRiskLevel(riskScore)}`;
}

// Function to end conversation
function endConversation() {
    // Show final message and recommendations based on risk score
    const riskLevel = getRiskLevel(riskScore);
    chatbotResponse.textContent = `ผลการประเมิน: คุณมีความเสี่ยงเป็นกรดไหลย้อน ${riskLevel}`;
}

// Function to answer question and navigate nodes
function answerQuestion(userAnswer) {
  if (currentNode.children && currentNode.children[userAnswer]) {
      // Move to the next question node
      currentNode = currentNode.children[userAnswer][0];
      showQuestion(currentNode);
  } else {
      endConversation();
  }
}
