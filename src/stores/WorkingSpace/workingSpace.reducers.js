import autodux from "autodux";
import {updateAnswerForListQuestion} from "./workingSpace.utils";
import {listQuestion} from "../../mockData/mock";
import {initAnswer, reformatReceiveData, updateAnswer} from "./workingSpace.utility";


export const WorkingSpaceReducer = autodux({
    slice: 'WorkingSpaceReducer',
    initial: {
        listQuestion: listQuestion,
        listAnswer: [],
        startTime: 0,
        endTime: 0,
        isLoading: false
    },
    actions: {
        updateQuestionAnswer: (state, {qid, answer}) => {
            const {listQuestion, listAnswer}= state;

            return {
                ...state,
                listQuestion: updateAnswerForListQuestion(listQuestion, qid, answer),
                listAnswer: updateAnswer(listAnswer, qid, answer)
            }
        },

        requestGetTest: (state, payload) => {
            return {
                ...state,
                isLoading: true
            }
        },
        successRequestGetTest: (state, {testQuiz: {end_time, start_time, questions}}) => {
            return {
                ...state,
                isLoading: false,
                startTime: start_time,
                endTime: end_time,
                listQuestion: reformatReceiveData(questions),
                listAnswer: initAnswer(questions)
            }
        },
        errorRequestGetTest: (state, payload) => {
            return {
                ...state,
                isLoading: false
            }
        },

        requestSubmitTest: (state, payload) => {
            return {
                ...state,
                isLoading: true
            }
        },
        successRequestSubmitTest: (state, payload) => {
            return {
                ...state,
                isLoading: false
            }
        },
        errorRequestSubmitTest: (state, payload) => {
            return {
                ...state,
                isLoading: false
            }
        }
    }
});