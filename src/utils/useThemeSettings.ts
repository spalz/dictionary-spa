import createPersistedState from "use-persisted-state";
const useThemeState = createPersistedState("count");

const useThemeSettings = () => {
    const [theme, setTheme] = useThemeState("night");

    return {
        getTheme() {
            return theme;
        },
        getOption() {
            return theme;
        },
        setOption(value: string) {
            setTheme(value);
        },
        resetOptions() {
            setTheme("day");
        },
    };
};

export default useThemeSettings;
