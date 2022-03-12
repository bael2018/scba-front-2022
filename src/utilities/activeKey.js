export const setActivePrice = (array, id) => {
    const filteredArray = array.map((item) => {
        return {
            ...item,
            active: false,
        };
    });

    return filteredArray.map((item) => {
        if (item.id === id) {
            return {
                ...item,
                active: true,
            };
        } else {
            return item;
        }
    });
};

export const setActiveColour = (array, id) => {
    return array.map((item) => {
        if (item.id === id) {
            if (item.active) {
                return {
                    ...item,
                    active: !item.active,
                };
            } else {
                return {
                    ...item,
                    active: !item.active,
                };
            }
        } else {
            return item;
        }
    });
};
