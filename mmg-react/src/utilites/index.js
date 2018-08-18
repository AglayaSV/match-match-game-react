export const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

export const delay = ms => new Promise(_ => setTimeout(_, ms));

export const getResGame = (sec, level) =>
    Math.round(10000 * level * (level / 12) / sec);

