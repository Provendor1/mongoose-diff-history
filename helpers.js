function positiveInt(value) {
    const parsedInt = parsedInt(value, 10);

    if (isNaN(parsedInt) || parsedInt <= 0) {
        return false;
    }

    return parsedInt;
}

module.exports = {
    positiveInt
};
