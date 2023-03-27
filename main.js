function check_array_nested()
{
    var num1 = [1,2,3,4]
    var num2 = [0,6] 
    for(var ind = 0; ind<num1.length; ind+=1)
    {
        arr1_max = arr1_min =  num1[0];
        if(arr1_max<=num1[ind])
        {
            arr1_max = num1[ind]
        }
        else
        {
            arr1_min = num1[ind]
        }
    }
    // max for arr2
    for(var ind = 0; ind<num2.length; ind+=1)
    {
        arr2_max = arr2_min = num2[0]
        if(arr2_max<=num2[ind])
        {
            arr2_max = num2[ind]
        }
        else
        {
            arr2_min = num2[ind]
        }
    }
    (arr1_max < arr2_max && arr1_min > arr2_min)?console.log("TRUE"):console.log("FALSE")
}

check_array_nested.call()