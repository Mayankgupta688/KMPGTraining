function addData(a?: number, b?: number, c?: number){

    if(c != null && a !=null && b !=null) {
        return a + b  + c
    }

    if(a !=null && b !=null) {
        return a + b
    }

    return 10;
}

addData(1, 2, 3)

addData(1, 2)