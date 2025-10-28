export const handleErrors = (err: unknown, context: string): void => {
    if (err instanceof Error) {
        console.error(`${context}: ${err.message}`)
    } else {
        console.error(`${context}: ${err}`)
    }
}