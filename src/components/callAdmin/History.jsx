import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';


const History = () => {
  return (
    <section className='min-h-screen w-full bg-gray-100 py-3 border px-5 font-[poppins]'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>History</h1>
        <Link to="/Hubungi-Admin" className='text-slate-600'><ArrowBackIosIcon /></Link>
        <p>Di sini Anda dapat melihat riwayat obrolan Anda.</p>
      </div>
    </section>
  );
};

export default History;
