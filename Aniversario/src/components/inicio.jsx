import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function inicio() {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[url('BG_inicio.png')] bg-cover bg-center relative">
            {/* Capa de desenfoque */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

            {/* Contenido principal */}
            <div className="relative flex flex-col md:flex-row items-center justify-center w-11/12 md:w-3/4 lg:w-1/2 bg-slate-800 rounded-lg shadow-lg bg-opacity-80 p-4 md:p-6">
                {/* Sección izquierda */}
                <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-full py-4 px-2 md:px-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-white py-2 text-center">¡Feliz Aniversario!</h1>
                    <p className="text-white text-sm md:text-base text-center py-5">
                        Hola Amor, quise hacer algo para recordar este momento especial ya que es la primera vez que se cumple un
                        aniversario de los muchos que nos esperan en el futuro. Por lo que sé que te gustan los detalles y yo amo
                        ver cómo disfrutas los detalles, creé lo siguiente para ti.
                        <br />
                        Te amo mucho y espero que te guste.
                    </p>
                </div>
                {/* Sección derecha */}
                <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-full py-4">
                    <button
                        className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-6 rounded text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300"
                        onClick={() => navigate('/recuerdos')}
                    >
                        Iniciar Recuerdos
                    </button>
                </div>
            </div>
        </div>
    )
}
