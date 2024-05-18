import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SendIcon from '@mui/icons-material/Send';



const Main = () => {


  return (
    <>
      <section className='min-h-screen w-full bg-gray-100 py-3 border px-5 font-[poppins]'>
        <div className='grid gap-6 md:grid-cols-6 grid-cols-1'>
          <div className='col-span-4'>
            {/* Kiri */}
            <div className='flex gap-5'>
              <Link to="/" className='text-slate-600'><ArrowBackIosIcon /></Link>
              <button className='bg-slate-400 px-2 text-white py-1 rounded'>New Chat</button>
              <Link to="/history" className='bg-gray-600 px-2 py-1 rounded text-white'>History</Link>
            </div>
            {/* Konten kiri lainnya */}
          </div>
        </div>

        <div className="fixed bottom-0 left-0 w-full flex justify-center pb-5 bg-gray-100 px-5">
          <div className="w-full md:w-2/3">
            <div className="flex justify-center px-3 gap-1 items-center w-full bg-[#006633] border-gray-300 border rounded-lg">
              <input
                type="text"
                id="input_pertanyaan"
                className="h-14 text-white text-sm outline-none block w-full p-2.5 bg-transparent"
                placeholder="Input Pertanyaan anda"
                required
              />
              <SendIcon className='text-white'/>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Main;
