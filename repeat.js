if (! String.prototype.repeat) {
    String.prototype.repeat = function (times) {
        return new Array(times+1).join(this);
    }
}
