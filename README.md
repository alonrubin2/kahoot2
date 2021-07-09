This is the learning project by Hadas Attia and Alon Rubin to see how websockets work and how kahoot is implemented through them.

------ things we need:


------  user system:

        sign up
        login

        quiz creation
        question creation
        answer (right and wrong) creation

        edit - user, questions, answers, quizes
        delete - user, questions, answers, quizes

        user interaction and connection


------  data base:

        user collection
            id
            username
            email
            password
            quizes - array of quiz ids that link to quiz collection
            friends list - array of user ids that link to user collection

        quiz collection
            id
            array of question ids


        question collection
            id
            string of question
            array of 3 wrongAnswers ids
            rightAnswer id


        rightAnswer collection
            id
            string of right answer


        wrongAnswer collection
            id
            string of wrong answer





when answering a question we trigger a function that takes the question id, and answer(given by user) id and check if the answer is the correct one for this question. the function then returns true or false.

function ifRightAnswer(questionId, answerId) {
    if (question.rightAnswer.id === answer.id) {
        return true;
    }
    return false;
}






