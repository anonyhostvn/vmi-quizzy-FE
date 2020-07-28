import {combineEpics, ofType} from "redux-observable";
import {WorkingSpaceReducer} from "./workingSpace.reducers";
import {catchError, mergeMap} from "rxjs/operators";
import {observableGetTest, observableSubmitTest} from "../../services/testMotorbike.service";
import {of} from "rxjs";

const {
    actions: {
        requestGetTest, successRequestGetTest, errorRequestGetTest,
        requestSubmitTest, successRequestSubmitTest, errorRequestSubmitTest
    }
} = WorkingSpaceReducer;

const requestGetA1TeEpic = action$ => action$.pipe(
    ofType(requestGetTest().type),
    mergeMap(
        action => observableGetTest().pipe(
            mergeMap(
                data => of(
                    successRequestGetTest({testQuiz: data})
                )
            ),
            catchError(
                err => of(
                    errorRequestGetTest()
                )
            )
        )
    )
);

const requestSubmitTestEpic = action$ => action$.pipe(
    ofType(requestSubmitTest().type),
    mergeMap(
        ({payload}) => observableSubmitTest(payload).pipe(
            mergeMap(
                ({data}) => of(
                    successRequestSubmitTest({testResult: data})
                )
            ),
            catchError(
                err => of(
                    errorRequestSubmitTest()
                )
            )
        )
    )
);

export const workingSpaceItemEpic = combineEpics(
    requestGetA1TeEpic,
    requestSubmitTestEpic
);