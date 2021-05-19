class Until {
    convertMoney(number, prefix = true) {
        let strNumber = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        if(prefix) {
            strNumber = strNumber + ' VNĐ';
        }
        return strNumber;
    }
}

export default new Until();
