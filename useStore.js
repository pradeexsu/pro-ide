import create from 'zustand'

const useStore = create(set => ({
    code: "function myScript(){\n\treturn 100;\n}\n",
    showInput: true,
    isLoading: false,
    mode: "javascript",
    theme: "ambiance",
    setCodeValue: (code1) => set(state => ({ code: code1 })),
    setTheme: (theme1) => set(state => ({ theme: theme1 })),
    setModeValue: (mode1) => set(state => ({ mode: mode1 })),
    setLoading: (loading1) => set(state => ({ isLoading: loading1 })),
    setShowInput: (input1) => set(state => ({ showInput: input1 })),
}))

export default useStore;
