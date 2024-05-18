import React, { useState, useRef, useEffect } from 'react';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import { TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import imageChatbot from '../assets/chatbot.png';
import LogoChatbot from './logoChatbot';
import './styles.css';
import { Link } from 'react-router-dom';
import MainChatAdmin from './callAdmin/MainChatAdmin'; 

const MessageForm = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const [isBotImageVisible, setIsBotImageVisible] = useState(true);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isBouncing, setIsBouncing] = useState(true); // Tambahkan state untuk mengontrol animasi bounce
  const [showQuestionText, setShowQuestionText] = useState(false); // Tambahkan state untuk menampilkan teks "Tanyakan Pertanyaan Anda"

  useEffect(() => {
    const bounceInterval = setInterval(() => {
      setIsBouncing(!isBouncing); // Toggle animasi bounce
    }, 8000);

    return () => {
      clearInterval(bounceInterval);
    };
  }, [isBouncing]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (event) => {
    event.preventDefault();
    let messageText = event.target.message.value.trim();
    messageText = messageText.toLowerCase();
    if (isBotImageVisible) {
      setIsBotImageVisible(false);
    }
    let responseText = "";

    const greetingsKeywords = ["halo", "hi","hai","hey"];
    const howAreYouKeywords = ["bagaimana kabarmu", "apa kabar", "gimana kabarnya","kabar"];
    const whatIsReactKeywords = ["apa itu react", "react itu apa","react","reactjs"];
    const newQuestionKeywords = ["siapa kamu", "kamu siapa"];
    const jawabanLagi = ["baik"];
    const perSatu = ["dokumen", "pendaftaran", "mahasiswa baru", "ijazah", "transkrip", "KTP", "pasfoto"]
    const perDua = ["biaya", "pendaftaran", "mahasiswa baru"]
    const perTiga = ["mahasiswa transfer", "penerimaan", "informasi"]
    const perEmpat = ["proses", "seleksi", "beasiswa", "prestasi akademik", "ekstrakurikuler", "wawancara"]
    const perLima = ["persyaratan", "beasiswa", "prestasi akademik", "kebutuhan finansial"]
    const perEnam = ["melamar", "beasiswa", "formulir aplikasi", "dokumen pendukung"]
    const perTujuh = ["deadline", "aplikasi beasiswa", "bulan Juli"]
    const perDelapan = ["beasiswa khusus","mahasiswa berprestasi", "akademik", "seni", "olahraga"]
    const perSembilan = ["mengetahui", "syarat", "beasiswa", "website", "penerimaan mahasiswa"]
    const perSepuluh = ["bantuan finansial", "beasiswa", "program bantuan", "biaya pendidikan", "mahasiswa"]

    if (greetingsKeywords.some(keyword => messageText.includes(keyword))) {
      responseText = "Halo juga! Ada yang bisa saya bantu?";
    } else if (howAreYouKeywords.some(keyword => messageText.includes(keyword))) {
      responseText = "Saya baik, terima kasih! Bagaimana denganmu?";
    } else if (whatIsReactKeywords.some(keyword => messageText.includes(keyword))) {
      responseText = "React adalah sebuah library JavaScript untuk membangun antarmuka pengguna.";
    } else if (jawabanLagi.some(keyword => messageText.includes(keyword))){
      responseText = "Alhamdulillah";
    } else if (newQuestionKeywords.some(keyword => messageText.includes(keyword))) {
      responseText = "Saya adalah bot yang dibuat untuk membantu menjawab pertanyaanmu.";
    } else if (perSatu.some(keyword => messageText.includes(keyword))) {
      responseText = "Anda memerlukan ijazah SMA, transkrip nilai, fotokopi KTP, dan pasfoto.";
    }  else if (perDua.some(keyword => messageText.includes(keyword))) {
      responseText = " Biaya pendaftaran kami adalah Rp 200.000.";
    } else if (perTiga.some(keyword => messageText.includes(keyword))) {
      responseText = "Ya, kami menerima mahasiswa transfer. Silakan hubungi bagian penerimaan mahasiswa untuk informasi lebih lanjut.";
    } else if (perEmpat.some(keyword => messageText.includes(keyword))) {
      responseText = "Proses seleksi meliputi penilaian prestasi akademik, kegiatan ekstrakurikuler, dan wawancara.";
    } else if (perLima.some(keyword => messageText.includes(keyword))) {
      responseText = "Ya, persyaratan berbeda-beda tergantung jenis beasiswa. Biasanya meliputi prestasi akademik dan kebutuhan finansial.";
    } else if (perEnam.some(keyword => messageText.includes(keyword))) {
      responseText = "Anda perlu mengisi formulir aplikasi beasiswa dan melampirkan dokumen pendukung yang diminta.";
    } else if (perTujuh.some(keyword => messageText.includes(keyword))) {
      responseText = " Deadline pengajuan aplikasi beasiswa biasanya ditetapkan pada bulan Juli setiap tahunnya.";
    } else if (perDelapan.some(keyword => messageText.includes(keyword))) {
      responseText = "Ya, kami memiliki beasiswa khusus untuk mahasiswa berprestasi di bidang akademik, seni, dan olahraga.";
    } else if (perSembilan.some(keyword => messageText.includes(keyword))) {
      responseText = "Anda dapat meninjau syarat-syarat beasiswa yang tersedia di website resmi kami atau menghubungi bagian penerimaan mahasiswa.";
    } else if (perSepuluh.some(keyword => messageText.includes(keyword))) {
      responseText = "Kami juga menyediakan program bantuan biaya pendidikan bagi mahasiswa yang membutuhkan.";
    } else {
      responseText = "Maaf, saya tidak mengerti pertanyaanmu.";
    }

    if (messageText) {
      setMessages(messages => [...messages, { text: messageText, sender: 'user' }]);
      setTimeout(() => {
        setMessages(messages => [...messages, { text: responseText, sender: 'bot' }]);
        scrollToBottom();
      }, 1000);
      event.target.reset();
    }
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  useEffect(() => {
    if (isBotImageVisible) {
      setTimeout(() => {
        setShowQuestionText(true);
      }, 3000); // Delay sebelum muncul teks (dalam milidetik)
    } else {
      setShowQuestionText(false);
    }
  }, [isBotImageVisible]);

  return (
    <div className='fixed bottom-20 right-0 mb-4 mr-4 md:w-1/3 w-full max-w-xs rounded-lg bg-white shadow-lg'>
      <section className={`transition-all ${isChatbotOpen ? 'block' : 'hidden'}`}>
        <div className=''>
          <div className='bg-green-700 p-2 py-5 rounded-t-lg'>
            <div className='flex justify-between items-center'>
              <span className='text-white font-medium font-[poppins]'>Umuslim Bot</span>
              <Link to= "/Hubungi-Admin" className='py-1 px-2 bg-white rounded-full font-[poppins] text-xs font-bold'>Tanya Admin</Link>
            </div>
          </div>
          {isBotImageVisible && (
            <div className={`relative flex justify-center items-center flex-col transition-opacity duration-500 opacity-100 fadeIn`}>
              <img src={imageChatbot} alt="Logo Chatbot" className='w-44 mb-5'/>
              {showQuestionText && (
                <p className="question-text absolute bottom-0 mb-4">Tanyakan Pertanyaan Anda</p>
              )}
            </div>
          )}

          
          <div className='space-y-2 p-2 md:max-h-80 max-h-56 overflow-y-auto overflow-hidden'>
            {messages.map((msg, index) => (
              <div key={index} className={` p-2 ${msg.sender === 'user' ? 'bg-gray-300 text-black self-end w-1/2 ml-36 rounded-l-2xl rounded-br-2xl' : 'bg-[#006633] text-white self-start w-1/2 rounded-r-2xl rounded-bl-2xl '} `}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <form onSubmit={handleSendMessage} className='flex items-center bg-white rounded-b-lg shadow'>
          <TextField
            name="message"
            fullWidth
            variant="outlined"
            placeholder='Masukkan Pertanyaan'
            InputProps={{
              endAdornment: (
                <IconButton type="submit" style={{ color: '#006633' }} aria-label="kirim pesan">
                  <SendIcon />
                </IconButton>
              ),
            }}
          />
        </form>
      </section>

      <div className={`fixed bottom-5 right-5 transition group hover:scale-110 ${isBouncing ? 'bounce-animation animate__animated animate__bounce' : ''}`}>
        <Tooltip title="Ada Pertanyaan?" placement="left-start">
          <IconButton onClick={toggleChatbot} >
            {isChatbotOpen ? (
              <CloseIcon style={{ color: '#FF5733'}}  className='transition'/>
            ) : (
              <LogoChatbot style={{ color: '#006633' }} />
            )}
          </IconButton>
        </Tooltip>
      </div>
    </div>
  )
}

export default MessageForm;
