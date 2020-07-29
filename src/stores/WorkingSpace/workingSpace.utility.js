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
        ...recentListAnswer.map(s => s.question !== qid ? s : {
            ...s,
            question: qid,
            choices: ans
        })
    ]
};

export const initAnswer = (questions) => {
    return questions.map(question => ({
        question: question.id,
        choices: []
    }))
}

export const transformStatusAnswer = (userAnswer, serverAnswer) => {
    return serverAnswer.map(
        (singleServerAnswer, index) => {
            const respondingUserAnswer = userAnswer[index];

            return singleServerAnswer.choices.map(
                singleChoices => {
                    const status = singleChoices.is_correct ?
                        respondingUserAnswer.choices.includes(singleChoices.id) ? 'right' : 'miss'
                        : respondingUserAnswer.choices.includes(singleChoices.id) ? 'wrong' : 'nothing';
                    return {
                        ...singleChoices,
                        status
                    }
                }
            )
        }
    );
};