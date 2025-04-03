import React from 'react'
import { MdCreate, MdDelete } from "react";

const NoteCard = ({
    title,
    date,
    content,
    ispinned,
    onEdit,
    onDelete,
    onPinNote
}) => {


    return (
        <>
            <div className="bg-amber-200 border rounded p-4 hover:shadow-xl transition-all ease-in">


                <div className="flex items-center justify-between">
                    <h6 className="text-sm font-medium">{title}</h6>
                    <span className="text-xs text-slate-500">{date}</span>
                    <i
                        className={`fa-solid fa-map-pin ${isPinned ? 'text-blue' : 'text-white'}`}
                        onClick={onPinNote}
                    ></i>
                </div>

                <p className='text-xs text-slate-500 mt-2'>{content?.slice(0, 60)}</p>


                <div className='flex gap-2'>
                    <i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>

            </div>
        </>
    )
}

export default NoteCard
