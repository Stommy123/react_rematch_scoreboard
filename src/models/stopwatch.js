export const stopwatch = {
    state: {
        isRunning: false,
        previousTime: 0,
        elapsedTime: 0,
    },
    reducers: {
        handleStopWatch: state => ({
            ...state,
            isRunning: !state.isRunning,
            previousTime: state.isRunning ? state.previousTime: Date.now()

        }),
        onReset: state => ({
            ...state,
            elapsedTime: 0,
            previousTime: Date.now()
        }),
        onTick: state => {
            const { isRunning, elapsedTime, previousTime } = state;
            if (isRunning) {
                const now = Date.now()
                return {
                    ...state,
                    elapsedTime: elapsedTime + (now - previousTime),
                    previousTime: Date.now()
                };
            }
            return state;
        }
    }
};