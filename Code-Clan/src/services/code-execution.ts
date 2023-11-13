import { instance } from "../instance/axios";
import { endPoints } from "../const/endPoints";

interface configBodyType {
   readonly code: string,
   readonly lang: string,
   readonly id: string | undefined
  }
  
interface fileBody {
    id: string
}

export class CodeExecution {
    static writeFile(body: configBodyType) {
        return instance.post(endPoints.WRITE_FILE, body)
    }
    static runFile(body: fileBody){
        return instance.post(endPoints.EXECUTE_FILE, body)
    }
}