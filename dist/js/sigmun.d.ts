const sigmun = {
    functions: {
        showAlert: (
            message: string,
            type: string,
            container: string,
            timeout: number
        ): void => {},
        showToast: (
            id: string,
            autohide: boolean,
            delay: number,
            options: unknown
        ): void => {},
    },
};

// export as namespace
export as namespace sigmun;

// export as default
export default sigmun;
