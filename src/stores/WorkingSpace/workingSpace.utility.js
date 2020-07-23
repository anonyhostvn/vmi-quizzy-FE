export const reformatReceiveData = (questions) => questions.map(
    ({choices, content, id}) => ({
        qid: id,
        question: content,
        options: choices.map(
            ({content, id}) => ({
                key: id,
                description: content
            })
        )
    })
);

export const updateAnswer = (recentListAnswer, qid, ans) => {
    return [
        ...recentListAnswer.filter(s => s.question !== qid),
        {
            question: qid,
            choices: ans
        }
    ]
};

export const initAnswer = (questions) => {
    return questions.map(question => ({
        question: question.id,
        choices: []
    }))
}