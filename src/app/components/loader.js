import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export function Loader() {
    return (
        <div className='container mx-auto flex flex-col items-center justify-center h-screen'>
            <AiOutlineLoading3Quarters
                className='animate-spin'
                size={30}
            />
            <span className='mx-auto text-2xl'>Cargando...</span>
        </div>
    );
}

export default Loader;