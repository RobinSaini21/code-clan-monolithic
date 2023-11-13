<?php 
function twoSum($nums, $target) {
    $map = [];
    for ($i = 0; $i < count($nums); $i++) {
        $complement = $target - $nums[$i];
        if (isset($map[$complement])) {
            return [$map[$complement], $i];
        }
        $map[$nums[$i]] = $i;
    }
    return null;
}

 echo implode(',', twoSum([2,7,11,15], 9)) .  '<br>';
 echo implode(',', twoSum([3,2,4], 6)) .  '<br>';
 echo implode(',', twoSum([3,3], 6)) .  '<br>';