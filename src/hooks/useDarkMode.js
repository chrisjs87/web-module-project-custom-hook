import useLocalStorage from './useLocalStorage'

const useDarkMode = (initialValues) => {
	const [values, setValues] = useLocalStorage('DarkModeActive', initialValues)

	return [ values, setValues ]
};

export default useDarkMode;