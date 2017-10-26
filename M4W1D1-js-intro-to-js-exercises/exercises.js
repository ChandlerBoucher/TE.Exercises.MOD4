function sumDouble(x, y) {
    if (x === y) {
        return ((x + y) * 2);
    }
    else {
        return x + y;
    }
}

function hasTeen(x, y, z) {
    var nums = [x, y, z];
    var result = false;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < 20 && nums[i] > 12) {
            result = true;
        }
    }

    return result;
}

function lastDigit(x, y) {
    var result = false;
    if (x % 10 === y % 10) {
        result = true;
    }
    return result;
}

function seeColor(str) {
    var result = "";
    if (str.substring(0, 3) == "red") {
        result = "red";
    }
    else if (str.substring(0, 4) == "blue") {
        result = "blue";
    }
    return result;
}

function middleThree(str) {
    var startIndex = ((str.length - 3) / 2);
    return str.substr(startIndex, 3);
}

function frontAgain(str) {
    var result = false;
    var front = str.substring(0, 2);
    var end = str.substr((str.length - 2), 2)

    if (front == end) {
        result = true;
    }
    return result;
}

function alarmClock(numDay, onVacation) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var result;

    if (numDay != 0 && numDay != 6) //not the weekend
    {
        if (onVacation) {
            result = "10:00";
        }
        else {
            result = "7:00";
        }
    }
    else {
        if (onVacation) {
            result = "off";
        }
        else {
            result = "10:00";
        }
    }
    return result;
}

function makeMiddle(nums) {
    var result = new Array();

    if (nums.length >= 2 && nums.length % 2 == 0) {
        result = [nums[(nums.length / 2) - 1], nums[nums.length / 2]];
    }
    return result;
}

function oddOnly(nums) {
    var result = new Array();

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 1) {
            result.push(nums[i]);
        }
    }
    return result;
}

function weave(nums1, nums2) {
    var result = new Array();

    for (var i = 0; i < nums1.length; i++) {
        result.push(nums1[i]);
        if (nums2.length > i) {
            result.push(nums2[i]);
        }
        if (nums1.length - 1 == i) {
            for (i++; i < nums2.length; i++) {
                result.push(nums2[i]);
            }
        }
    }
    return result;
}

function cigarParty(num, isWeekend) {
    var result = false;
    if ((num >= 40 && isWeekend) || (num >= 40 && num <= 60 && !isWeekend)) {
        result = true;
    }
    return result;
}

function stringSplosion(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        result = result + str.substr(0, i + 1);
    }
    return result;
}

function fizzBuzz(x) {
    var result = "";
    if (x % 3 === 0 && x % 5 === 0) {
        result = "FizzBuzz";
    }
    else if (x % 3 === 0) {
        result = "Fizz";
    }
    else if (x % 5 === 0) {
        result = "Buzz";
    }
    else {
        result = x;
    }
    return result;
}

function countValues(nums) {
    var result = new Object();

    for (var i = 0; i < nums.length; i++) {
        if (result[nums[i]] == null) {
            result[nums[i]] = 1
        }
        else {
            result[nums[i]]++;
        }
    }
    return result;
}

function reverseArray(nums) {
    var result = new Array();

    for (var i = 0; i < nums.length; i++)
    {
        result[i] = nums[nums.length - (i + 1)];
    }
    return result;
}