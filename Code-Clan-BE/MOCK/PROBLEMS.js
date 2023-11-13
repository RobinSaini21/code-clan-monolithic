
export const PROBLEMS = {
    sum: {
        id: "sum",
        testCases: {
            js: [
                "\n console.log(sum(10,30))",
                "\n console.log(sum(20,20))",
                "\n console.log(sum(30,30))",
                "\n console.log(sum(30,70))"
            ],
            php: [
                "\n echo sum(10, 30) .  '<br>';",
                "\n echo sum(20, 20) .  '<br>';",
                "\n echo sum(30, 30) .  '<br>';",
                "\n echo sum(30, 70) .  '<br>';",
            ],
            ts: [
                "\n console.log(sum(10,30))",
                "\n console.log(sum(20,20))",
                "\n console.log(sum(30,30))",
                "\n console.log(sum(30,70))"
            ],
            java: [
                "\n System.out.println(sum(10,30));  ",
                "\n System.out.println(sum(20,20));  ",
                "\n System.out.println(sum(30,30));  ",
                "\n System.out.println(sum(30,70));  "
            ]
        },
        ouput: [
            40,
            40,
            60,
            100
        ],
        testCasesForAll: [
            [10, 30],
            [20, 20],
            [30, 30],
            [30, 70]
        ],
        outputType: "arrayOfNumbers"
    },
    "two-sum": {
        id: "two-sum",
        testCases: {
            js: [
                "\n console.log(twoSum([2,7,11,15], 9))",
                "\n console.log(twoSum([3,2,4], 6))",
                "\n console.log(twoSum([3,3], 6))"
            ],
            php: [
                "\n echo implode(',', twoSum([2,7,11,15], 9)) .  '<br>';",
                "\n echo implode(',', twoSum([3,2,4], 6)) .  '<br>';",
                "\n echo implode(',', twoSum([3,3], 6)) .  '<br>';",
            ],
            ts: [
                "\n console.log(twoSum([2,7,11,15], 9))",
                "\n console.log(twoSum([3,2,4], 6))",
                "\n console.log(twoSum([3,3], 6))"
            ],
            java: [
                "\n System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));",
                "\n System.out.println(Arrays.toString(twoSum(new int[]{3,2,4}, 6)));",
                "\n System.out.println(Arrays.toString(twoSum(new int[]{3,3}, 6)));"
            ]
        },
        ouput: [
            [0, 1],
            [1, 2],
            [0, 1]
        ],
        testCasesForAll: [
            [[2, 7, 11, 15], 9],
            [[3, 2, 4], 6],
            [[3, 3], 6]
        ],
        outputType: "arrayOfNumbers"
    },

    "valid-palindrome": {
        id: "valid-palindrome",
        testCases: {
            js: [
                "\n console.log(isPalindrome('A man, a plan, a canal: Panama'))",
                "\n console.log(isPalindrome('race a car'))"
            ],
            php: [
                "\n echo isPalindrome('A man, a plan, a canal: Panama') ? '<br> true' : '<br> false '.  '<br>';",
                "\n echo isPalindrome('race a car') ? '<br>  true' : '<br> false'.  '<br>';"
            ],
            ts: [
                "\n console.log(isPalindrome('A man, a plan, a canal: Panama'))",
                "\n console.log(isPalindrome('race a car'))"
            ],
            java: [
                "\n System.out.println(isPalindrome('A man, a plan, a canal: Panama'));",
                "\n System.out.println(isPalindrome('race a car'));"
            ]
        },
        ouput: [
            true,
            true
        ],
        testCasesForAll: [
            'A man, a plan, a canal: Panama',
            'race a car'
        ],
        outputType: "boolean"
    },

    "reverse-string": {
        id: "reverse-string",
        testCases: {
            js: [
                "\n console.log(reverseString('hello'))",
                "\n console.log(reverseString('world'))"
            ],
            php: [
                "\n echo reverseString('hello') .  '<br>';",
                "\n echo reverseString('world') .  '<br>';"
            ],
            ts: [
                "\n console.log(reverseString('hello'))",
                "\n console.log(reverseString('world'))"
            ],
            java: [
                "\n System.out.println(reverseString('hello'));",
                "\n System.out.println(reverseString('world'));"
            ]
        },
        ouput: [
            'olleh',
            'dlrow'
        ],
        testCasesForAll: [
            'hello',
            'world'
        ],
        outputType: "string"
    },

    "first-unique-character": {
        id: "first-unique-character",
        testCases: {
            js: [
                "\n console.log(firstUniqChar('leetcode'))",
                "\n console.log(firstUniqChar('loveleetcode'))"
            ],
            php: [
                "\n echo firstUniqChar('leetcode') .  '<br>';",
                "\n echo firstUniqChar('loveleetcode') .  '<br>';"
            ],
            ts: [
                "\n console.log(firstUniqChar('leetcode'))",
                "\n console.log(firstUniqChar('loveleetcode'))"
            ],
            java: [
                "\n System.out.println(firstUniqChar('leetcode'));",
                "\n System.out.println(firstUniqChar('loveleetcode'));"
            ]
        },
        ouput: [
            0,
            2
        ],
        testCasesForAll: [
            'leetcode',
            'loveleetcode'
        ],
        outputType: "number"
    },

    "remove-duplicates": {
        id: "remove-duplicates",
        testCases: {
            js: [
                "\n console.log(removeDuplicates([1,1,2]))",
                "\n console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))"
            ],
            php: [
                "\n echo removeDuplicates([1,1,2]) .  '<br>';",
                "\n echo removeDuplicates([0,0,1,1,1,2,2,3,3,4]) .  '<br>';"
            ],
            ts: [
                "\n console.log(removeDuplicates([1,1,2]))",
                "\n console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))"
            ],
            java: [
                "\n System.out.println(removeDuplicates(new int[]{1,1,2}));",
                "\n System.out.println(removeDuplicates(new int[]{0,0,1,1,1,2,2,3,3,4}));"
            ]
        },
        ouput: [
            2,
            5
        ],
        testCasesForAll: [
            [1, 1, 2],
            [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
        ],
        outputType: "number"
    },

    

    "best-time-to-buy-and-sell": {
        id:  "best-time-to-buy-and-sell",
        testCases: {
            js: [
                "\n console.log(maxProfit([7,1,5,3,6,4]))",
                "\n console.log(maxProfit([1,2,3,4,5]))",
                "\n console.log(maxProfit([7,6,4,3,1]))"
            ],
            php: [
                "\n echo maxProfit([7,1,5,3,6,4]) .  '<br>';",
                "\n echo maxProfit([1,2,3,4,5]) .  '<br>';",
                "\n echo maxProfit([7,6,4,3,1]) .  '<br>';"
            ],
            ts: [
                "\n console.log(maxProfit([7,1,5,3,6,4]))",
                "\n console.log(maxProfit([1,2,3,4,5]))",
                "\n console.log(maxProfit([7,6,4,3,1]))"
            ],
            java: [
                "\n System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));",
                "\n System.out.println(maxProfit(new int[]{1,2,3,4,5}));",
                "\n System.out.println(maxProfit(new int[]{7,6,4,3,1}));"
            ]
        },
        ouput: [
            7,
            4,
            0
        ],
        testCasesForAll: [
            [7, 1, 5, 3, 6, 4],
            [1, 2, 3, 4, 5],
            [7, 6, 4, 3, 1]
        ],
        outputType: "number"
    },


    "move-zeroes": {
        id: "move-zeroes",
        testCases: {
            js: [
                "\n console.log(moveZeroes([0,1,0,3,12]))"
            ],
            php: [
                "\n echo implode(',', moveZeroes([0,1,0,3,12])) .  '<br>';"
            ],
            ts: [
                "\n console.log(moveZeroes([0,1,0,3,12]))"
            ],
            java: [
                "\n System.out.println(Arrays.toString(moveZeroes(new int[]{0,1,0,3,12})));"
            ]
        },
        ouput: [
            [1, 3, 12, 0, 0]
        ],
        testCasesForAll: [
            [0, 1, 0, 3, 12]
        ],
        outputType: "array"
    },


    "valid-anagram": {
        id: "valid-anagram",
        testCases: {
            js: [
                "\n console.log(isAnagram('anagram', 'nagaram'))",
                "\n console.log(isAnagram('rat', 'car'))"
            ],
            php: [
                "\n echo isAnagram('anagram', 'nagaram') .  '<br>';",
                "\n echo isAnagram('rat', 'car') .  '<br>';"
            ],
            ts: [
                "\n console.log(isAnagram('anagram', 'nagaram'))",
                "\n console.log(isAnagram('rat', 'car'))"
            ],
            java: [
                "\n System.out.println(isAnagram('anagram', 'nagaram'));",
                "\n System.out.println(isAnagram('rat', 'car'));"
            ]
        },
        ouput: [
            true,
            false
        ],
        testCasesForAll: [
            ['anagram', 'nagaram'],
            ['rat', 'car']
        ],
        outputType: "boolean"
    },


    "contains-duplicate": {
        id: "contains-duplicate",
        testCases: {
            js: [
                "\n console.log(containsDuplicate([1,2,3,1]))",
                "\n console.log(containsDuplicate([1,2,3,4]))"
            ],
            php: [
                "\n echo containsDuplicate([1,2,3,1]) .  '<br>';",
                "\n echo containsDuplicate([1,2,3,4]) .  '<br>';"
            ],
            ts: [
                "\n console.log(containsDuplicate([1,2,3,1]))",
                "\n console.log(containsDuplicate([1,2,3,4]))"
            ],
            java: [
                "\n System.out.println(containsDuplicate(new int[]{1,2,3,1}));",
                "\n System.out.println(containsDuplicate(new int[]{1,2,3,4}));"
            ]
        },
        ouput: [
            true,
            false
        ],
        testCasesForAll: [
            [1, 2, 3, 1],
            [1, 2, 3, 4]
        ],
        outputType: "boolean"
    },
    "single-number": {
        id: "single-number",
        testCases: {
           
            js: [
                "\n console.log(singleNumber([2,2,1]))",
                "\n console.log(singleNumber([4,1,2,1,2]))"
            ],
            php: [
                "\n echo singleNumber([2,2,1]) .  '<br>';",
                "\n echo singleNumber([4,1,2,1,2]) .  '<br>';"
            ],
            ts: [
                "\n console.log(singleNumber([2,2,1]))",
                "\n console.log(singleNumber([4,1,2,1,2]))"
            ],
            java: [
                "\n System.out.println(singleNumber(new int[]{2,2,1}));",
                "\n System.out.println(singleNumber(new int[]{4,1,2,1,2}));"
            ]
        },
        ouput: [
            1,
            4
        ],
        testCasesForAll: [
            [2, 2, 1],
            [4, 1, 2, 1, 2]
        ],
        outputType: "number"
    }

};



export const PROBLEMS_DESCRIPTION_TITLE  = {
    "problems": [
      {
        "title": "Sum",
        "description": "Given two integers, return their sum.",
        "difficulty": "Easy",
        "link": "sum",
        "snippets": {
            "java": "public int sum(int a, int b) { return a + b; }",
            "php": "<?php function sum($a, $b) { return $a + $b; } ?>",
            "typescript": "function sum(a: number, b: number): number { return a + b; }",
            "javascript": "function sum(a, b) { return a + b; }"
          }
      },
      {
        "title": "Two Sum",
        "description": "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
        "difficulty": "Medium",
        "link": "two-sum",
        "snippets": {
            "java": "public int[] twoSum(int[] nums, int target) { /* implementation */ return null; }",
            "php": "<?php function twoSum($nums, $target) { /* implementation */ return null; } ?>",
            "typescript": "function twoSum(nums: number[], target: number): number[] | null { /* implementation */ return null; }",
            "javascript": "function twoSum(nums, target) { /* implementation */ return null; }"
          }
    
      },
      {
        "title": "Valid Palindrome",
        "description": "Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
        "difficulty": "Easy",
        "link": "valid-palindrome",
        "snippets": {
            "java": "public boolean isPalindrome(String s) { /* implementation */ return false; }",
            "php": "<?php function isPalindrome($s) { /* implementation */ return false; } ?>",
            "typescript": "function isPalindrome(s: string): boolean { /* implementation */ return false; }",
            "javascript": "function isPalindrome(s) { /* implementation */ return false; }"
          }
      },
      {
        "title": "Reverse String",
        "description": "Given a string, return the string with its characters reversed.",
        "difficulty": "Easy",
        "link": "reverse-string",
        "snippets": {
            "java": "public String reverseString(String s) { /* implementation */ return \"\"; }",
            "php": "<?php function reverseString($s) { /* implementation */ return \"\"; } ?>",
            "typescript": "function reverseString(s: string): string { /* implementation */ return ''; }",
            "javascript": "function reverseString(s) { /* implementation */ return ''; }"
          }
      },
      {
        "title": "First Unique Character",
        "description": "Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.",
        "difficulty": "Medium",
        "link": "first-unique-character",
        "snippets": {
            "java": "public int firstUniqChar(String s) { /* implementation */ return -1; }",
            "php": "<?php function firstUniqChar($s) { /* implementation */ return -1; } ?>",
            "typescript": "function firstUniqChar(s: string): number { /* implementation */ return -1; }",
            "javascript": "function firstUniqChar(s) { /* implementation */ return -1; }"
          }
      },
      {
        "title": "Remove Duplicates",
        "description": "Given a sorted array `nums`, remove the duplicates in-place such that each element appears only once and returns the new length.",
        "difficulty": "Easy",
        "link":"remove-duplicates",
        "snippets": {
            "java": "public int removeDuplicates(int[] nums) { /* implementation */ return -1; }",
            "php": "<?php function removeDuplicates($nums) { /* implementation */ return -1; } ?>",
            "typescript": "function removeDuplicates(nums: number[]): number { /* implementation */ return -1; }",
            "javascript": "function removeDuplicates(nums) { /* implementation */ return -1; }"
          }
      },
      {
        "title": "Best Time to Buy and Sell",
        "description": "Given a list of daily stock prices, determine the maximum profit you can achieve by buying and selling the stock. You can complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).",
        "difficulty": "Medium",
        "link": "best-time-to-buy-and-sell",
        "snippets": {
            "java": "public int maxProfit(int[] prices) { /* implementation */ return 0; }",
            "php": "<?php function maxProfit($prices) { /* implementation */ return 0; } ?>",
            "typescript": "function maxProfit(prices: number[]): number { /* implementation */ return 0; }",
            "javascript": "function maxProfit(prices) { /* implementation */ return 0; }"
          }
        
      },
      {
        "title": "Move Zeroes",
        "description": "Given an array `nums`, write a function to move all `0`s to the end of it while maintaining the relative order of the non-zero elements.",
        "difficulty": "Medium",
        "link": "move-zeroes",
        "snippets": {
            "java": "public void moveZeroes(int[] nums) { /* implementation */ }",
            "php": "<?php function moveZeroes(&$nums) { /* implementation */ } ?>",
            "typescript": "function moveZeroes(nums: number[]): void { /* implementation */ }",
            "javascript": "function moveZeroes(nums) { /* implementation */ }"
          }
      },
      {
        "title": "Valid Anagram",
        "description": "Given two strings `s` and `t`, write a function to determine if `t` is an anagram of `s`.",
        "difficulty": "Easy",
        "link": "valid-anagram",
        "snippets": {
            "java": "public boolean isAnagram(String s, String t) { /* implementation */ return false; }",
            "php": "<?php function isAnagram($s, $t) { /* implementation */ return false; } ?>",
            "typescript": "function isAnagram(s: string, t: string): boolean { /* implementation */ return false; }",
            "javascript": "function isAnagram(s, t) { /* implementation */ return false; }"
          }
      },
      {
        "title": "Contains Duplicate",
        "description": "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
        "difficulty": "Easy",
        "link": "contains-duplicate",
        "snippets": {
            "java": "public boolean containsDuplicate(int[] nums) { /* implementation */ return false; }",
            "php": "<?php function containsDuplicate($nums) { /* implementation */ return false; } ?>",
            "typescript": "function containsDuplicate(nums: number[]): boolean { /* implementation */ return false; }",
            "javascript": "function containsDuplicate(nums) { /* implementation */ return false; }"
          }
      },
      {
        "title": "Single Number",
        "description": "Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.",
        "difficulty": "Medium",
        "link": "single-number",
        "snippets": {
            "java": "public int singleNumber(int[] nums) { /* implementation */ return -1; }",
            "php": "<?php function singleNumber($nums) { /* implementation */ return -1; } ?>",
            "typescript": "function singleNumber(nums: number[]): number { /* implementation */ return -1; }",
            "javascript": "function singleNumber(nums) { /* implementation */ return -1; }"
          }
      }
    ]
  }
  