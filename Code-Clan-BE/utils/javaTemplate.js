export const javaTemplate = (id, testCases = []) => {
    
    return  ` import java.util.*;

    public class ${id.split("-").join("")} {
      public static void main(String[] args) {
       ${testCases.map(str => `${str}\n`).join(" ")}
      }
  `
  };