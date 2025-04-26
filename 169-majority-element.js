// Problem: 169. Majority Element
// Difficulty: Easy
// Link: https://leetcode.com/problems/majority-element/


var majorityElement = function(nums) {
let n = nums.length;
let majority = nums[0];
let votes = 1;
for(let i = 1;i<n;i++){
    if(votes === 0){
        majority = nums[i];
        votes = 1;
    }
    
    else if(majority === nums[i]){
        votes++;
    }
    else{
        votes--;
    }
}
return majority;
};
