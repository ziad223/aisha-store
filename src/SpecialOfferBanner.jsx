import { useState, useEffect } from 'react'
import { FaWhatsapp, FaClock, FaFire, FaGift, FaShoppingBag, FaStar } from 'react-icons/fa'
import { MdLocalOffer, MdCake, MdTimer } from 'react-icons/md'

const SpecialOfferBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [soldCount, setSoldCount] = useState(42)

  // حساب الوقت المتبقي حتى يوم الجمعة
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const friday = new Date()
      
      // البحث عن أقرب يوم جمعة (الجمعة القادمة)
      const daysUntilFriday = (5 - now.getDay() + 7) % 7
      friday.setDate(now.getDate() + (daysUntilFriday || 7))
      friday.setHours(23, 59, 59, 999) // نهاية يوم الجمعة

      const difference = friday - now
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  // تأثير زيادة عدد المبيعات
  useEffect(() => {
    const interval = setInterval(() => {
      setSoldCount(prev => {
        if (prev < 98) return prev + Math.floor(Math.random() * 3) + 1
        return prev
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleOrder = () => {
    window.open(`https://wa.me/201271716206?text=${encodeURIComponent('أريد حجز بوكس العرض الخاص بـ 300 جنيه')}`, '_blank')
  }

  return (
    <section className="py-12 mr-5 flex items-center justify-center mx-auto " dir="rtl">
      <div className=" mx-auto">
        {/* البانر الرئيسي */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#8b0000] via-[#b22222] to-[#ff4500] shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          
          {/* خلفية ديكورية */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-500/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-500/10 to-red-500/20 rounded-full translate-y-40 -translate-x-40"></div>
          </div>

          {/* محتوى البانر */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            
            {/* الجزء الأيسر: الصورة والعناصر */}
            <div className="space-y-6">
              {/* العلامة المميزة */}
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full font-bold text-lg flex items-center gap-2 animate-pulse">
                  <FaFire />
                  💥 عرض حصري 💥
                </div>
                <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  <FaStar className="text-yellow-300" />
                  الأكثر طلباً
                </div>
              </div>

              {/* صورة البوكس */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
                  <img
                    src="/images/box.jfif"
                    alt="بوكس الحلويات الخاص"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* علامة السعر على الصورة */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold">300 ج</div>
                    <div className="text-xs opacity-90">السعر الأصلي 450 ج</div>
                  </div>

                
                </div>
              </div>

              {/* مكونات البوكس */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center">
                    <MdCake className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">تورتة</div>
                    <div className="text-white/80 text-xs">تكفي 6 أفراد</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">🥐</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">إكلير</div>
                    <div className="text-white/80 text-xs">طازج يومياً</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">🍥</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">سينابون</div>
                    <div className="text-white/80 text-xs">بالقرفة</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <FaGift className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">٢ قطعة جاتوه</div>
                    <div className="text-white/80 text-xs">بنكهات مختلفة</div>
                  </div>
                </div>
              </div>
            </div>

            {/* الجزء الأيمن: التفاصيل */}
            <div className="space-y-6">
              {/* العنوان الرئيسي */}
              <div>
                <h2 className="text-xl md:text-4xl font-bold text-white mb-3 leading-tight">
                  💥 عرض التوفير الحقيقي 💥
                </h2>
                <p className="text-white/90 text-xl mb-6">
                  بدل ما تشتري قطعة قطعة 👇
                </p>
              </div>

              {/* العرض */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-400/30">
                <div className="text-center mb-6">
                  <div className="md:inline-flex flex-col w-full items-center gap-2 bg-gradient-to-r from-yellow-300 to-orange-400 text-[#8b0000] px-6 py-2 rounded-full font-bold text-xl">
                    <MdLocalOffer className="text-2xl" />
                    خدي بوكس كامل بـ <span className="md:text-3xl text-xl mx-2">300</span> ج بس 😍
                  </div>
                </div>

                {/* توفير */}
                <div className="text-center mb-8">
                  <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl">
                    <div className="text-2xl font-bold">توفير 150 ج</div>
                    <div className="text-sm opacity-90">بدلاً من شراء القطع بشكل منفصل</div>
                  </div>
                </div>

                {/* العد التنازلي */}
                <div className="mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4 text-white">
                    <FaClock className="text-yellow-300" />
                    <span className="font-bold">العرض ينتهي خلال:</span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                      <div key={unit} className="text-center">
                        <div className="bg-black/30 backdrop-blur-sm text-white rounded-xl p-3">
                          <div className="text-3xl font-bold">{value.toString().padStart(2, '0')}</div>
                          <div className="text-xs text-white/70 mt-1">
                            {unit === 'days' && 'أيام'}
                            {unit === 'hours' && 'ساعات'}
                            {unit === 'minutes' && 'دقائق'}
                            {unit === 'seconds' && 'ثواني'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* التنبيه */}
                <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3 text-white">
                    <MdTimer className="text-2xl text-yellow-300" />
                    <div>
                      <div className="font-bold">⏰ العرض لحد يوم الجمعة</div>
                      <div className="text-sm opacity-90">📩 الكميات محدودة</div>
                    </div>
                  </div>
                </div>

                {/* زر الطلب */}
                <button
                  onClick={handleOrder}
                  className="group relative w-full py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <FaWhatsapp className="text-2xl" />
                    <span className='text-sm md:text-2xl'>احجز بوكسك الآن</span>
                  </div>
                </button>

                {/* معلومات إضافية */}
                <div className="text-center mt-6 text-white/80 text-sm">
                  <p>✅ توصيل مجاني داخل المدينة</p>
                  <p>✅ ضمان الجودة والطازجة</p>
                  <p>✅ إمكانية التعديل حسب الرغبة</p>
                </div>
              </div>
            </div>
          </div>

          {/* الزخرفة السفلية */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"></div>
        </div>

        {/* شريط التأكيد */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <div className="text-2xl">🎁</div>
            <div>
              <div className="font-bold text-lg">عرض خاص لفترة محدودة!</div>
              <div className="text-sm opacity-90">لا تفوت فرصة التوفير الكبير</div>
            </div>
          </div>
        </div>
      </div>

      {/* أنماط CSS مخصصة */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 69, 0, 0.5); }
          50% { box-shadow: 0 0 40px rgba(255, 69, 0, 0.8); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default SpecialOfferBanner