import { endPoints } from "../const/endPoints";
import { instance } from "../instance/axios";

export class PROBLEMS {
    static getAllProblems(){
        return instance.get(endPoints.GET_ALL_PROBLEMS)
    }
    static getProblem(params: string){
        return instance.get(`${endPoints.GET_PROBLEM}/${params}`)
    }
}