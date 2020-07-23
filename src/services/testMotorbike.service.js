import Axios from 'axios';
import {Observable} from "rxjs";
import {endPoint, url} from "./constant";

export const observableGetTest = () => new Observable(observer => {
    Axios.get(`${url}/${endPoint.getA1Test}`).then(({data: {data}}) => observer.next(data)).catch(err => observer.error(err));
});

export const observableSubmitTest = (data) => new Observable(observer => {
    Axios.post(`${url}/${endPoint.getA1Test}`, data).then(({data}) => observer.next(data)).catch(err => observer.error(err));
})