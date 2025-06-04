function TwoSum (nums, target){
    let numMap = {};

    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(complement in numMap && numMap[complement] !== i){
            return [numMap[complement], i]
        }
        numMap[nums[i]] = i;
    }
    return [];
}

let nums = [2, 7, 11, 15];
let target = 9;

const res = TwoSum(nums, target);
console.log(res);