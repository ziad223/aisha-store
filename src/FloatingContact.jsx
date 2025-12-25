'use client'
import { useState, useEffect } from 'react'
import { FaWhatsapp, FaPhone, FaTimes, FaComment, FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { MdMessage, MdCall } from 'react-icons/md'

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  const phoneNumber = '201271716206'
  const whatsappNumber = '201271716206'
  const whatsappMessage = 'مرحباً، أريد الاستفسار عن المنتجات'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
  }

  return (
    <>
      {/* العنصر العائم الرئيسي */}
      <div className={`fixed left-6 bottom-6 z-50 transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
        
        {/* الزر الرئيسي */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ${
            isOpen 
              ? 'bg-gradient-to-br from-[#25D366] to-[#1ebe5d] scale-110 rotate-180' 
              : 'bg-gradient-to-br from-[#8b4513] to-[#d4a574] hover:scale-110'
          }`}
        >
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20"></div>
          
          <div className="relative z-10 text-white">
            {isOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <div className="relative">
                <MdMessage className="text-2xl" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-[#ff6b6b] to-[#ff8787] rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
        </button>

        {/* قائمة الأزرار المنبثقة */}
        <div className={`absolute left-0 bottom-16 mb-2 space-y-3 transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}>
          
          {/* زر الواتساب */}
          <div className="relative group">
            <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="text-[#8b4513] font-bold text-sm">تواصل عبر الواتساب</div>
              <div className="text-gray-600 text-xs mt-1">رد سريع خلال دقائق</div>
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
            </div>
            
            <button
              onClick={handleWhatsApp}
              className="w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#1ebe5d] rounded-full shadow-xl flex items-center justify-center text-white hover:shadow-2xl hover:scale-110 transition-all duration-300 group-hover:rotate-12"
            >
              <FaWhatsapp className="text-xl" />
            </button>
          </div>

          {/* زر الاتصال */}
          <div className="relative group">
            <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="text-[#8b4513] font-bold text-sm">اتصل بنا الآن</div>
              <div className="text-gray-600 text-xs mt-1">متاحون 24/7</div>
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
            </div>
            
            <button
              onClick={handleCall}
              className="w-12 h-12 bg-gradient-to-br from-[#4cd964] to-[#5ac8fa] rounded-full shadow-xl flex items-center justify-center text-white hover:shadow-2xl hover:scale-110 transition-all duration-300 group-hover:rotate-12"
            >
              <FaPhone className="text-xl" />
            </button>
          </div>

          {/* زر إخفاء */}
          <div className="relative group">
            <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="text-[#8b4513] font-bold text-sm">إخفاء</div>
              <div className="text-gray-600 text-xs mt-1">انقر للاخفاء</div>
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
            </div>
            
            {/* <button
              onClick={() => setIsVisible(false)}
              className="w-12 h-12 bg-gradient-to-br from-[#ff6b6b] to-[#ff8787] rounded-full shadow-xl flex items-center justify-center text-white hover:shadow-2xl hover:scale-110 transition-all duration-300 group-hover:rotate-12"
            >
              <FaChevronDown className="text-xl" />
            </button> */}
          </div>
        </div>

        {/* بادج عندما يكون مطوي */}
        {!isOpen && isVisible && (
          <div className={`absolute right-16 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-500 ${
            isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="flex items-center gap-2">
              <div className="text-[#8b4513] font-bold text-sm">تواصل معنا</div>
              <div className="w-2 h-2 bg-gradient-to-r from-[#25D366] to-[#1ebe5d] rounded-full animate-pulse"></div>
            </div>
          </div>
        )}
      </div>

     
      {/* أنماط CSS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(37, 211, 102, 0.5); }
          50% { box-shadow: 0 0 30px rgba(37, 211, 102, 0.8); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}

export default FloatingContact