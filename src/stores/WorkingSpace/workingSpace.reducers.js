import autodux from "autodux";
import {updateAnswerForListQuestion} from "./workingSpace.utils";
import {listQuestion} from "../../mockData/mock";


export const WorkingSpaceReducer = autodux({
    slice: 'WorkingSpaceReducer',
    initial: {
        listQuestion: listQuestion,
        isLoading: false
    },
    actions: {
        updateQuestionAnswer: (state, {qid, answer}) => {
            const {listQuestion}= state;

            return {
                ...state,
                listQuestion: updateAnswerForListQuestion(listQuestion, qid, answer)
            }
        }
    }
});