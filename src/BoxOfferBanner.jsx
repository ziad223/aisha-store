'use client'
import { useState, useEffect } from 'react'
import { FaWhatsapp, FaGift, FaShippingFast, FaHeart, FaMagic, FaCrown } from 'react-icons/fa'
import { MdCake, MdLocalShipping, MdConfirmationNumber } from 'react-icons/md'

const BoxOfferBanner = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedCupcakes, setSelectedCupcakes] = useState(0)

  const cupcakesOptions = [
    { id: 1, name: "شوكولاتة", emoji: "🍫", color: "bg-gradient-to-br from-[#8B4513] to-[#D2691E]" },
    { id: 2, name: "فانيليا", emoji: "🍦", color: "bg-gradient-to-br from-[#FFE4B5] to-[#FFDAB9]" },
    { id: 3, name: "فراولة", emoji: "🍓", color: "bg-gradient-to-br from-[#FF69B4] to-[#FF1493]" },
    { id: 4, name: "لوتس", emoji: "🍯", color: "bg-gradient-to-br from-[#F4A460] to-[#DAA520]" },
    { id: 5, name: "قهوة", emoji: "☕", color: "bg-gradient-to-br from-[#654321] to-[#8B4513]" },
    { id: 6, name: "ليمون", emoji: "🍋", color: "bg-gradient-to-br from-[#FFFACD] to-[#F0E68C]" },
  ]

  const boxContents = [
    { id: 1, item: "بوكس ٤ كبات", description: "من اختيارك", icon: "🥧" },
    { id: 2, item: "تورتة شوكولاتة", description: "فاخرة", icon: "🎂" },
    { id: 3, item: "هدية مجانية", description: "مفاجأة سعيدة", icon: "🎁" },
    { id: 4, item: "توصيل مجاني", description: "أي مكان في الزقازيق", icon: "🚚" },
  ]

  const handleOrder = () => {
    window.open(`https://wa.me/201271716206?text=${encodeURIComponent('أريد حجز بوكس ٤ كبات + تورتة شوكولاتة بـ٣٥٠ج')}`, '_blank')
  }

  return (
    <section className="py-12 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* البانر الرئيسي */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2C3E50] via-[#4A235A] to-[#1B4F72] shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          
          {/* خلفية النجوم */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${1 + Math.random() * 2}s`
                }}
              />
            ))}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-900/20 to-blue-900/10 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-900/10 to-indigo-900/20 rounded-full translate-y-48 -translate-x-48"></div>
          </div>

          {/* محتوى البانر */}
          <div className="relative z-10 p-8">
            
            {/* العنوان الرئيسي مع التاج */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <FaCrown className="text-4xl text-yellow-400 animate-bounce" />
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFEC8B] to-[#FFFACD] bg-clip-text text-transparent">
                  عرض مميز للعائلات
                </h1>
                <FaCrown className="text-4xl text-yellow-400 animate-bounce" />
              </div>
              <p className="text-white/80 text-lg">بوكس متكامل لكل أفراد الأسرة ❤️</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* الجزء الأيسر: الصورة والاختيارات */}
              <div className="space-y-6">
                
                {/* صورة البوكس مع تأثير */}
                <div 
                  className="relative group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-white/20 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-400/50">
                    <div className="relative h-80">
                      <img
                        src="/images/12.jfif"
                        alt="بوكس العائلة المميز"
                        className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                      />
                      
                      {/* تأثير الهدية */}
                      <div className="absolute top-4 left-4 animate-bounce">
                        <div className="relative">
                          <FaGift className="text-3xl text-pink-500" />
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-3 rounded-2xl shadow-2xl">
                        <div className="text-3xl font-bold">350 ج</div>
                        <div className="text-xs opacity-90">قيمة حقيقية 500+ ج</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* ملاحظة الهدية */}
               
                </div>

                {/* اختيار الكبات */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <FaMagic className="text-xl text-purple-400" />
                    <h3 className="text-xl font-bold text-white">اختر نكهات الكبات المفضلة لديك</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {cupcakesOptions.map((cupcake) => (
                      <button
                        key={cupcake.id}
                        onClick={() => setSelectedCupcakes(prev => prev === cupcake.id ? 0 : cupcake.id)}
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          selectedCupcakes === cupcake.id
                            ? 'ring-2 ring-purple-400 ring-offset-2 ring-offset-[#2C3E50] scale-105'
                            : 'hover:bg-white/10'
                        } ${cupcake.color}`}
                      >
                        <div className="text-2xl mb-1">{cupcake.emoji}</div>
                        <div className="text-white text-sm font-medium">{cupcake.name}</div>
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-center text-white/70 text-sm">
                    {selectedCupcakes === 0 ? (
                      <p>اختر ٤ نكهات مختلفة</p>
                    ) : (
                      <p className="text-purple-300">✓ {cupcakesOptions.find(c => c.id === selectedCupcakes)?.name} تم الاختيار</p>
                    )}
                  </div>
                </div>
              </div>

              {/* الجزء الأيمن: التفاصيل */}
              <div className="space-y-6">
                
                {/* العرض بالتفصيل */}
                <div className="bg-gradient-to-br from-[#1B4F72]/50 to-[#4A235A]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <MdConfirmationNumber className="text-3xl text-cyan-400" />
                    <h2 className="text-2xl font-bold text-white">ما داخل البوكس؟</h2>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {boxContents.map((item) => (
                      <div key={item.id} className="flex flex-col md:flex-row items-center gap-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                        <div className="text-3xl">{item.icon}</div>
                        <div className="flex-1">
                          <div className="text-white font-bold text-lg">{item.item}</div>
                          <div className="text-white/70">{item.description}</div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                          <FaHeart className="text-white text-sm" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ميزة التوصيل */}
                  <div className="bg-gradient-to-r from-teal-600/30 to-emerald-600/30 rounded-xl p-4 border border-teal-500/30 mb-6">
                    <div className="flex items-center gap-3">
                      <MdLocalShipping className="text-2xl text-teal-300" />
                      <div>
                        <div className="text-white font-bold">🚚 التوصيل مجاني لأي مكان</div>
                        <div className="text-teal-200 text-sm">داخل الزقازيق</div>
                      </div>
                    </div>
                  </div>

                  {/* حساب التوفير */}
                  <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl p-4 mb-6">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold mb-2">🎯 توفير أكثر من 30%</div>
                      <div className="flex flex-col md:flex-row justify-center items-baseline gap-2">
                        <span className="text-3xl font-bold text-yellow-300">350 ج</span>
                        <span className="text-white/70 line-through text-lg">500+ ج</span>
                        <span className="text-green-300 font-bold">= توفير 150+ ج</span>
                      </div>
                    </div>
                  </div>

                  {/* زر الطلب */}
                  <button
                    onClick={handleOrder}
                    className="group relative w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <FaWhatsapp className="text-2xl" />
                      <span>احجز بوكس العائلة الآن</span>
                    </div>
                  </button>

                  {/* معلومات إضافية */}
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <div className="text-cyan-300 font-bold">🎂</div>
                      <div className="text-white text-sm">تورتة شوكولاتة فاخرة</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <div className="text-pink-300 font-bold">🎁</div>
                      <div className="text-white text-sm">هدية مفاجأة داخلية</div>
                    </div>
                  </div>
                </div>

                {/* ميزات إضافية */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-cyan-500/50 transition-colors">
                    <FaShippingFast className="text-2xl text-cyan-400 mx-auto mb-2" />
                    <div className="text-white font-bold text-sm">توصيل سريع</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-pink-500/50 transition-colors">
                    <FaGift className="text-2xl text-pink-400 mx-auto mb-2" />
                    <div className="text-white font-bold text-sm">هدية مجانية</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ملاحظة مهمة */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 text-white px-6 py-3 rounded-xl border border-cyan-500/30">
                <FaHeart className="text-pink-400" />
                <span className="font-bold">البوكس يناسب 4-6 أفراد - مثالي للعائلة أو الأصدقاء</span>
                <FaHeart className="text-pink-400" />
              </div>
            </div>
          </div>

          {/* الزخرفة السفلية */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
        </div>

        {/* نص دعائي */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-[#4A235A] to-[#1B4F72] text-white px-8 py-4 rounded-2xl shadow-lg">
            <div className="text-xl font-bold mb-2">🎪 العرض متاح لفترة محدودة!</div>
            <div className="text-white/80">نكتفي بـ 50 بوكس فقط هذا الأسبوع</div>
          </div>
        </div>
      </div>

      {/* أنماط CSS مخصصة */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default BoxOfferBanner