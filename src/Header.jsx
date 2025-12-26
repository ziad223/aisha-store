'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const Header = () => {
  const slides = [
    {
      id: 1,
      title: "تورتات بمناسبة كل فرحة",
      subtitle: "صنعنا بحب لأسعد لحظاتك",
      description: "تورتات مخصصة بأشكال وأحجام تناسب جميع المناسبات",
      buttonText: "اطلب تورتتك الآن",
      bgColor: "rgba(212, 165, 116, 0.85)"
    },
    {
      id: 2,
      title: "أشهى الحلويات الشرقية",
      subtitle: "طعم لا يُنسى من المطبخ الشرقي",
      description: "بسبوسة، كنافة، قطايف، معمول وأكثر من المذاق الرائع",
      buttonText: "استعرض الحلويات",
      bgColor: "rgba(139, 69, 19, 0.85)"
    },
    {
      id: 3,
      title: "كيكات إسفنجية مميزة",
      subtitle: "خفيفة ولذيذة بلمستنا الخاصة",
      description: "كيكات طازجة يومياً بأنواع مختلفة من الكريمات",
      buttonText: "اكتشف الكيكات",
      bgColor: "rgba(255, 182, 193, 0.85)"
    },
    {
      id: 4,
      title: "تشكيلة من الحلويات العالمية",
      subtitle: "مذاقات من كل أنحاء العالم",
      description: "تشيز كيك، ماكورون، إكلير، وغيرها من الحلويات العالمية",
      buttonText: "استعرض القائمة",
      bgColor: "rgba(160, 140, 209, 0.85)"
    },
    {
      id: 5,
      title: "مناسبات خاصة؟",
      subtitle: "نحضر أجمل تورتات الزفاف",
      description: "تصميمات فريدة وأشكال مبدعة لمناسباتك الخاصة",
      buttonText: "احجز الآن",
      bgColor: "rgba(255, 215, 194, 0.85)"
    },
    {
      id: 6,
      title: "حلويات صحية",
      subtitle: "بدون سكر مضاف",
      description: "خيارات صحية تناسب الجميع مع المحافظة على الطعم اللذيذ",
      buttonText: "تعرف أكثر",
      bgColor: "rgba(184, 134, 11, 0.85)"
    },
    {
      id: 8,
      title: "توصيل سريع",
      subtitle: "نصل إليك في أي وقت",
      description: "توصيل مجاني للطلبات الكبيرة في كل أنحاء المدينة",
      buttonText: "اطلب الآن",
      bgColor: "rgba(248, 232, 232, 0.85)"
    },
    {
      id: 9,
      title: "مكونات طازجة",
      subtitle: "جودة لا تُقارن",
      description: "نستخدم أفضل المكونات الطازجة لضمان الجودة والطعم",
      buttonText: "تذوق الفرق",
      bgColor: "rgba(254, 207, 239, 0.85)"
    }
  ]

  return (
    <div className="relative h-screen">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index, className) {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        effect="fade"
        speed={1000}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* الصورة */}
              <div className="absolute inset-0">
                <img
                  src={`/images/sliders/${slide.id}.jfif`}
                  alt={slide.title}
                  fill
                  className="w-full"
                  priority={slide.id === 1}
                  style={{backgroundPosition : 'top'}}
                />
              </div>
              
              {/* Overlay مع تدرج لوني */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to right, ${slide.bgColor}, rgba(0,0,0,0.3))`
                }}
              />
              
              {/* Overlay إضافي أسفل النص */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
              
              {/* المحتوى */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                  <div className="max-w-2xl text-white" dir="rtl">
                    {/* العنوان الرئيسي */}
                    <div className="mb-6">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight animate-fade-up">
                        {slide.title}
                      </h2>
                      <div className="w-20 h-1 bg-gradient-to-r from-[#d4a574] to-[#ffb6c1] mb-4"></div>
                    </div>
                    
                    {/* العنوان الفرعي */}
                    <p className="text-xl md:text-2xl mb-4 text-[#ffd700] font-semibold animate-fade-up animation-delay-200">
                      {slide.subtitle}
                    </p>
                    
                    {/* الوصف */}
                    <p className="text-lg md:text-xl mb-14 leading-relaxed animate-fade-up animation-delay-400">
                      {slide.description}
                    </p>
                    
                    {/* الزر */}
                    <button className="group relative mt-18 overflow-hidden bg-gradient-to-r from-[#d4a574] to-[#b8860b] text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-up animation-delay-600">
                      <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <span className="relative z-10">{slide.buttonText}</span>
                    </button>
                    
                    {/* أيقونات زخرفية */}
                    <div className="grid grid-cols-2 md:grid-cols-3  gap-6 mt-12 animate-fade-up animation-delay-800">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-[#d4a574]/20 flex items-center justify-center">
                          <span className="text-2xl">🍰</span>
                        </div>
                        <span className="text-sm">تورتات مخصصة</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-[#ffb6c1]/20 flex items-center justify-center">
                          <span className="text-2xl">⭐</span>
                        </div>
                        <span className="text-sm">جودة عالية</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-[#b8860b]/20 flex items-center justify-center">
                          <span className="text-2xl">🚚</span>
                        </div>
                        <span className="text-sm">توصيل سريع</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* أزرار التنقل */}
        <div className="swiper-button-prev !text-white !w-12 !h-12 hover:!scale-110 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div className="swiper-button-next !text-white !w-12 !h-12 hover:!scale-110 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </Swiper>

      {/* Styles في المكون */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 30px !important;
        }
        
        .custom-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
          margin: 0 8px !important;
          transition: all 0.3s ease !important;
          border-radius: 50% !important;
        }
        
        .custom-bullet:hover {
          background: rgba(255, 255, 255, 0.8) !important;
          transform: scale(1.2);
        }
        
        .custom-bullet.swiper-pagination-bullet-active {
          background: linear-gradient(45deg, #d4a574, #ffb6c1) !important;
          width: 40px !important;
          border-radius: 10px !important;
        }
        
        .swiper-button-prev:after,
        .swiper-button-next:after {
          display: none;
        }
        
        .swiper-button-prev,
        .swiper-button-next {
          background: rgba(212, 165, 116, 0.2) !important;
          backdrop-filter: blur(10px);
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(212, 165, 116, 0.4) !important;
          border-color: rgba(255, 255, 255, 0.6);
        }
        
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  )
}

export default Header