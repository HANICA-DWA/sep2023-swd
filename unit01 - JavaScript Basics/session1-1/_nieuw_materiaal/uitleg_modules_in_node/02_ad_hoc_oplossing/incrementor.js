function initModule() {
    let value = 0;

    return () => {
        value++;
        return value;
    };
    
    
};

const increment = initModule();