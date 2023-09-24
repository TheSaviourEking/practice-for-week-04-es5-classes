// Your code here
Array.prototype.isEqual = function(arr) {
    if(this.length === arr.length) {
        for(let i = 0; i < this.length; i++) {
            if (this[i] !== arr[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}
