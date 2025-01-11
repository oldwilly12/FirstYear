import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { recuerdosData } from '../data/recuerdos'
import { useNavigate } from 'react-router-dom';
import NewFotos from './NewFotos';
export default function Recuerdos() {

    const navigate = useNavigate();

  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center w-full mx-3 my-3'>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-bold py-4 my-3 text-2xl lg:text-5xl">Bienvenida a nuestros recuerdos</h1>
        <FaHeart className="text-red-600 text-3xl lg:text-5xl" />
      </div>
      <div className='my-4 py-4'>
        {recuerdosData.map((recuerdo) => (
          <NewFotos
            key={recuerdo.id}
            titulo={recuerdo.titulo}
            imagen={recuerdo.imagen}
            descripcion={recuerdo.descripcion}
          />
        ))}
      </div>
      <div className='flex justify-center items-center my-4 py-4'>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-6 rounded text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => navigate('/video')}
        >
          video
        </button>
      </div>
      
    </div>
  )
}
