const add = (...a) => {
    let total = 0;
    a.forEach(function(num){
        total +=num;
    })

    return total;
}

export default add;