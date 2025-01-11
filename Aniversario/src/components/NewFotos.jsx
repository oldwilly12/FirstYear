import React from 'react'
import { motion } from 'motion/react'

export default function NewFotos({imagen, titulo, descripcion, id}) {
  return (
    <>
            <motion.div 
            key={id}
            whileInView={{ opacity: 1, x:0}}
                        initial = {{ opacity: 0, x: -100}}
                        transition={{duration: 1}}
            className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden py-2">
                <div className="relative">

                    <img className="w-full h-72 object-cover" src={imagen} alt="Imagen de ejemplo" />
                </div>
                <div className="px-6 py-4">

                    <h2 className="text-xl font-semibold text-gray-800">{titulo}</h2>

                    <p className="text-gray-600 mt-2 text-base">
                        {descripcion}
                    </p>
                </div>
            </motion.div>
        </>
  )
}
