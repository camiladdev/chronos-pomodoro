type DefaultInputProps = {
    type: 'text' | 'numer' | 'search';
};

export function DefaultInput({ type }: DefaultInputProps) {
    return (
        <>
            <label htmlFor="meuInput">task</label>
            <input type={type} id="meuInput" />
        </>
    );
}