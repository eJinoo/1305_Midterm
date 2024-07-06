function quickSort(array){
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[0];
    const leftOfPivot = [];
    const rightOfPivot = [];

    for (let i = 1; i < array.length;i++ ) {
        if (array[i] < pivot) {
            leftOfPivot.push(array[i]);
        } else {
            rightOfPivot.push(array[i]);
        }
    }
    return [...quickSort(leftOfPivot), pivot, ...quickSort(rightOfPivot)]
}

//q1
function FindMissingNumber(array, n){
    sortedArray = quickSort(array);
    compareArr = []
    
    for (let i = 1; i <= n; i++){
        compareArr.push(i);
    }
    console.log(compareArr);
    for (let i = 0; i < compareArr.length; i++){
        if (compareArr[i] != sortedArray[i]){
            return compareArr[i];
        }
    }
    // sort array
    // make new array to n
    // loop through and if smt doesnt match return that number
}

//q1 alternate

function FindMissingNumber2(array, n){
    if (n === 0){
        return;
    }
    let FoundNumber = false
    for (let i = 0; i < array.length; i++){
        if (array[i] === n){
            FoundNumber = true;
            break;
        }
    }

    if (FoundNumber === false){
        return n;
    } else {
        return FindMissingNumber2(array, n-1);
    }
    
}
// TESTING 
array1 = [5, 4, 1, 2]
n1 = 5
// Expected output: 3
array2 = [9, 5, 3, 2, 6, 1, 7, 8, 10]
n2 = 10
// Expected output: 4
array3 = [2, 3, 1, 5]
n3 = 5
// Expected output: 4
array4 = [1, 2, 3, 4, 5]
n4 = 6
// Expected output: 6


//q2


function returnIndices(array, target, index){
    if (index >= array.length -1){
        return [];
    }
    // take first thing of array
    for (let i = index + 1; i < array.length; i++){
        if (array[index] + array[i] === target){
            return [index, i]
        }
    }

    return returnIndices(array, target, index + 1);
        
}

//TEST CASES
array5 = [1, 5, 2, 7]
target5 = 8
// Expected output: [0, 3]
array6 = [20, 1, 5, 2, 11]
target6 = 3
// Expected output: [1, 3]
array7 = [3, 2, 4]
target7 = 6
// Expected output: [1, 2]

//q3

function permutation(arr, comparedArr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== comparedArr[i]){
            return 0
        } else {
            console.log(arr);
            let a = arr.shift;
            arr.push(a);
            return permutation(arr, comparedArr)
        }
    }

}

arr1 = ["A", "B", "C"];
arr2 = ["A", "B", "C"];


function generatePermutation(str){
    let combinationList = [];

    combinationList.push(str);

    let compareArr = str.split('');
    let strArr = str.split('');

    console.log(strArr);

    let a = strArr.shift();

    console.log(strArr);

    console.log(a);

    strArr.push(a);

    console.log(strArr);

    console.log(permutation(strArr, compareArr));
    // strArr.push(strArr.shift());
    // strArr.join('');
    //combinationList.push(strArr);


    
    // split string
    // add combo
    // shift front letter to back
    // base case = if combo was how it was in the beginning
    // reverse string
    // add combo and shift again

// return array of combos
}
//q4

class Node {
    constructor(data) {
        this.data = data;
        this.next = null; 
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    printList() {
        let current = this.head;
        let str = '';
        while(current !== null) {
            str = str + current.data + ' -> ';
            current = current.next;
        }

        console.log(str + ' null ');
    }

    checkIfCycleExists(headNode){
        let current = this.head;
        while(current !== null) {
            if (current === headNode){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    makeCycle(){
        let current = this.head;
        while(current !== null) {
            if (current.next === null){
                current.next = this.head;
                break;
            }
            current = current.next;
        }
    }
}

let linkedList = new LinkedList();

linkedList.prepend("A");
linkedList.prepend("C");
linkedList.prepend("B");

linkedList.printList();

//linkedList.makeCycle();
console.log(linkedList.checkIfCycleExists("A"));

//q5
function isValidParenthesis(str) {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    for (char of str){
        switch(char) {
            case "(":
                count1++
                break;
            case "[":
                count++
                break;
            case "{":
                count3++
                break;
            default:
                if (count1 != 1 || count2 != 1 || count3 != 1){
                    switch(char) {
                        case ")":
                            count1++
                            break;
                        case "]":
                            count++
                            break;
                        case "}":
                            count3++
                            break;
                    }
                } 
                else {
                    return false;
                }
        }
        
    }

    if (count < 0){
        return
    }
    
}

// damn i really thought this was gonna work
