 import java.util.*;

    public class java18ab0a6dc2154d5aa86090f876bec390 {
      public static void main(String[] args) {
       
 System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));
 
 System.out.println(Arrays.toString(twoSum(new int[]{3,2,4}, 6)));
 
 System.out.println(Arrays.toString(twoSum(new int[]{3,3}, 6)));

      }
   
   public static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return null;
    }
 
}