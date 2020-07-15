
export const updateAnswerForListQuestion = (listQuestion, qid, answer) => {
    return listQuestion.map(
        singleQuestion => {
            if (singleQuestion.qid !== qid) return singleQuestion;
            else return {
                ...singleQuestion,
                answer
            }
        }
    );
}