import {combineEpics} from "redux-observable";
import {workingSpaceItemEpic} from "./WorkingSpace/workingSpace.epics";

export const rootEpics = combineEpics(
    workingSpaceItemEpic
);