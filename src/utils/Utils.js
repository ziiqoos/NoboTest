class Utils {
    static isEmpty(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }
}

export default Utils;
