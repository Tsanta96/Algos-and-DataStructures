// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// Definition for singly-linked list.
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// @param {ListNode} l1
// @param {ListNode} l2
// @return {ListNode}


var addTwoNumbers = function (l1, l2) {

    let overTen = false;
    let runner1 = l1;
    let runner2 = l2;
    let head;
    let mainRunner;
    while (runner1 || runner2 || overTen) {
        let sum = overTen ? 1 : 0;
        if (runner1) {
            sum += runner1.val;
            runner1 = runner1.next;
        }
        if (runner2) {
            sum += runner2.val;
            runner2 = runner2.next;
        }
        let newNode = new ListNode(sum % 10)
        if (!head) {
            head = newNode;
            mainRunner = head;
        } else {
            mainRunner.next = newNode;
            mainRunner = newNode;
        }
        overTen = sum >= 10 ? true : false;

    }
    return head;
};

// Input: two linked lists each representing an integer with a reversed order
// Output: One Linked List is the addition of the sum of both linked lists in the normal order.
// Strategy:
//     1) Iterate backwards through both linked lists summing the value of the nodes in each linked list 
//     2) store the sum in each linked lists respective variable 
//     3) sum together the variables
//     4) isolate each digit of the resulting value and create a new linked list with each node representing a digit 

// var addTwoNumbers = function (l1, l2) {
//     let l1Curr = l1;
//     let l2Curr = l2

//     let l1StringNumRev = linkedListNumArr(l1Curr);
//     let l2StringNumRev = linkedListNumArr(l2Curr);

//     let l1StringNumNorm = l1StringNumRev.split("").reverse().join("");
//     let l2StringNumNorm = l2StringNumRev.split("").reverse().join("");

//     let l1Num = parseInt(l1StringNumNorm);
//     let l2Num = parseInt(l2StringNumNorm);

//     const linkedListSum = l1Num + l2Num;

//     let linkedListSumArrRev = String(linkedListSum).split("").reverse();

//     let l3 = new ListNode(linkedListSumArrRev[0]);
//     let l3Head = l3

//     let counter = 1;

//     while (counter < linkedListSumArrRev.length) {
//         l3.next = new ListNode(linkedListSumArrRev[counter]);
//         console.log(l3);
//         l3 = l3.next;
//         counter++;
//     }

//     // console.log(l3);
// };

// function linkedListNumArr(linkedList) {
//     let linkedListStringNum = '';

//     while (linkedList) {
//         linkedListStringNum += linkedList.val;
//         linkedList = linkedList.next
//     }

//     return linkedListStringNum;
// }
