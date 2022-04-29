function snapCrackle(n){
    let array = []
    for(let i = 1; i <= n; i++){
        if(i % 2 != 0 && i % 5 == 0){
            array.push("SnapCrackle")
        }else if(i % 2 != 0){
            array.push("Snap")
        }else if(i % 5 == 0){
            array.push("Crackle")
        }else {
            array.push(i)
        }
    }
    return array.join(', ')
}