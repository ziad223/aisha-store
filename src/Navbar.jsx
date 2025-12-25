'use client'
import Container from "./Container";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { MdCake, MdLocalCafe } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/201271716206`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:01271716206`, '_blank');
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8e8e8] via-[#fff5f0] to-[#f8e8e8] z-0"></div>
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-4 left-10 w-3 h-3 rounded-full bg-[#ffb6c1] animate-pulse"></div>
        <div className="absolute top-10 right-20 w-4 h-4 rounded-full bg-[#ffd700] animate-pulse delay-300"></div>
        <div className="absolute bottom-8 left-1/4 w-2 h-2 rounded-full bg-[#dda0dd] animate-pulse delay-700"></div>
        <div className="absolute top-20 left-1/3 w-3 h-3 rounded-full bg-[#ffa07a] animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 bg-white/80 backdrop-blur-sm shadow-lg">
        <Container>
          <div className="flex items-center justify-between w-full py-4">
            {/* اللوجو مع أيقونة */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4] flex items-center justify-center shadow-lg">
                  <MdCake className="text-white text-2xl" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#ffd700] flex items-center justify-center">
                  <MdLocalCafe className="text-[#8b4513] text-xs" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-[#d4a574] to-[#b8860b] bg-clip-text text-transparent">
                  Aisha Store
                </div>
                <div className="text-xs text-[#8b4513] font-medium tracking-wider">
                  حلويات & تورتات
                </div>
              </div>
            </div>

            {/* القائمة الرئيسية */}
            {/* <div className="hidden md:flex items-center justify-center flex-1">
              <ul className="flex items-center gap-8">
                <li>
                  <a href="/" className="group flex flex-col items-center">
                    <div className="text-[#8b4513] font-semibold hover:text-[#d4a574] transition-all duration-300 group-hover:scale-110">
                      الرئيسية
                    </div>
                    <div className="w-0 h-0.5 bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4] group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
                <li>
                  <a href="#about" className="group flex flex-col items-center">
                    <div className="text-[#8b4513] font-semibold hover:text-[#d4a574] transition-all duration-300 group-hover:scale-110">
                      من نحن
                    </div>
                    <div className="w-0 h-0.5 bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
                <li>
                  <a href="#products" className="group flex flex-col items-center">
                    <div className="text-[#8b4513] font-semibold hover:text-[#d4a574] transition-all duration-300 group-hover:scale-110">
                      منتجاتنا
                    </div>
                    <div className="w-0 h-0.5 bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
                <li>
                  <a href="#cakes" className="group flex flex-col items-center">
                    <div className="text-[#8b4513] font-semibold hover:text-[#d4a574] transition-all duration-300 group-hover:scale-110">
                      التورتات
                    </div>
                    <div className="w-0 h-0.5 bg-gradient-to-r from-[#ff9a9e] to-[#fecfef] group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="group flex flex-col items-center">
                    <div className="text-[#8b4513] font-semibold hover:text-[#d4a574] transition-all duration-300 group-hover:scale-110">
                      اتصل بنا
                    </div>
                    <div className="w-0 h-0.5 bg-gradient-to-r from-[#d4a574] to-[#8b4513] group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
              </ul>
            </div> */}

            {/* الأزرار على الشمال */}
            <div className="hidden md:flex items-center gap-4">
              {/* أيقونات التواصل الاجتماعي */}
              <div className="flex items-center gap-2 mr-4">
               
                <a href="https://www.facebook.com/share/17Y791GwsT/" target="_blank" className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1877F2] to-[#0D5DB8] flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <FaFacebookF size={16} />
                </a>
              </div>
              
              {/* زر الواتساب */}
              <button 
                onClick={handleWhatsAppClick}
                className="group relative overflow-hidden bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-5 py-2.5 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <FaWhatsapp className="relative z-10 text-xl" />
                <span className="relative z-10 font-semibold">تواصل معنا</span>
              </button>
              
              {/* زر الاتصال المباشر */}
              <button 
                onClick={handlePhoneClick}
                className="group relative overflow-hidden bg-gradient-to-r from-[#d4a574] to-[#b8860b] text-white px-5 py-2.5 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <FiPhone className="relative z-10" />
                <span className="relative z-10 font-semibold">01271716206</span>
              </button>
            </div>

            {/* زر القائمة للموبايل */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMenuOpen(!menuOpen)} 
                className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
              >
                {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>

          {/* القائمة للموبايل */}
          {menuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2  z-50 bg-gradient-to-b from-white to-[#fff9f5] shadow-2xl rounded-2xl p-6 relative border border-[#ffd7c2]">
             
              
              {/* أزرار التواصل في الموبايل */}
              <div className="mt-6 pt-6 border-t border-[#ffd7c2]">
                <div className="flex justify-center gap-4 mb-4">
                  
                  <a href="https://www.facebook.com/share/17Y791GwsT/" target="_blank" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1877F2] to-[#0D5DB8] flex items-center justify-center text-white">
                   <FaFacebookF size={18} />
                  </a>
                </div>
                
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => {
                      handleWhatsAppClick();
                      setMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp size={20} />
                    واتساب
                  </button>
                  
                  <button 
                    onClick={() => {
                      handlePhoneClick();
                      setMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-[#d4a574] to-[#b8860b] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <FiPhone size={20} />
                    اتصل الآن: 01271716206
                  </button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Navbar;