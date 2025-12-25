'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaHeart,  FaStar, FaChevronRight, FaChevronLeft, FaWhatsapp } from 'react-icons/fa'
import { MdCake, MdLocalShipping, MdTimer } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CakesSection = () => {

  const cakes = [
    {
      id: 1,
      name: "تورتة كريمة ",
      description: "تورتة كريمة حشو كراميل وشوكليت ومكسرات وقطع شيكولاتة",
      price: 500,
      originalPrice: 320,
      discount: 12,
      category: "كلاسيكي",
      reviews: 124,
      image: "/images/torta/1.jfif",
      flavors: ["شوكولاتة", "كريمة "],
      size: "كبير (28 سم)",
      delivery: "مُتاح للتوصيل",
      isNew: true
    },
    {
      id: 2,
      name: "تورتة الفواكه الطازجة",
      description: "تورتة كريمة حشو كراميل ومكسرات وشيكولاتة ",
      price: 300,
      originalPrice: 380,
      discount: 16,
      category: "صحي",
      rating: 4.9,
      reviews: 89,
      image: "/images/torta/2.jfif",
      flavors: [ "شوكولاتة" , "مكسرات", "كراميل", "كريمة"],
      size: "متوسط (22 سم)",
      delivery: "مُتاح للتوصيل",
      isNew: false
    },
    {
      id: 3,
      name: "تورتة كريمة ",
      description: "تورتة كريمة حشو كراميل ومكسرات وشيكولاتة ",
      price: 400,
      originalPrice: 400,
      discount: 12,
      category: "مميز",
      rating: 4.7,
      reviews: 156,
      image: "/images/torta/3.jfif",
      flavors: ["فانيليا", "شوكولاتة بيضاء"],
      size: "كبير (28 سم)",
      delivery: "مُتاح للتوصيل",
      isNew: true
    },
    {
      id: 4,
      name: "تورتة  المناسبات الكبيرة",
      description: "تورتة بالديزاين اللي تحبه تكفي ٢٢فرد ",
      price: 750,
      originalPrice: 280,
      discount: 14,
      category: "تشيز كيك",
      rating: 4.6,
      reviews: 203,
      image: "/images/torta/4.jfif",
      flavors: ["كل الي تختاريه"],
      size: "صغير (18 سم)",
      delivery: "مُتاح للتوصيل",
      isNew: false
    },
    {
      id: 5,
      name: "تورتة عيد الميلاد",
      description: "تورتة مزينة بشكل احتفالي مع شخصيات كرتونية ",
      price: 400,
      originalPrice: 500,
      discount: 16,
      category: "احتفالي",
      rating: 4.9,
      reviews: 78,
      image: "/images/torta/5.jfif",
      flavors: ["شوكولاتة", "فراولة"],
      size: "كبير (30 سم)",
      delivery: "يحتاج طلب مسبق",
      isNew: true
    },
    {
      id: 6,
      name: "تورتة  شوكولاتة",
      description: "تورتة شيكولاتة تكفي ١٢فرد حشو مكسرات وكراميل وصوص شيكولاتة",
      price: 350,
      originalPrice: 450,
      discount: 15,
      category: "عرس",
      rating: 4.8,
      reviews: 92,
      image: "/images/torta/6.jfif",
      flavors: ["فانيليا", "ورد"],
      size: "متوسط (25 سم)",
      delivery: "يحتاج طلب مسبق",
      isNew: true
    },
    {
      id: 7,
      name: "تورتة الشوكولاتة",
      description: "تورتة بصوص اللوتس  ز",
      price: 400,
      originalPrice: 350,
      discount: 14,
      category: "حلويات",
      rating: 4.7,
      reviews: 145,
      image: "/images/torta/7.jfif",
      flavors: ["لوتس", "كراميل"],
      size: "متوسط (22 سم)",
      delivery: "مُتاح للتوصيل",
      isNew: false
    },
    {
      id: 8,
      name: "تورتة الفراولة ",
      description: "طبقات من الفراولة  مع كريمة ",
      price: 260,
      originalPrice: 300,
      discount: 13,
      category: "فواكه",
      rating: 4.5,
      reviews: 98,
      image: "/images/torta/8.jfif",
      flavors: ["كريمة", "فراولة"],
      size: "صغير (20 سم)",
      delivery: "مُتاح للتوصيل",
      isNew: false
    },
    {
      id: 9,
      name: "تورتة القهوة العربية",
      description: "تورتة شيكولاتة وكريمة بالطعم المميز",
      price: 400,
      originalPrice: 340,
      discount: 15,
      category: "قهوة",
      rating: 4.8,
      reviews: 112,
      image: "/images/torta/9.jfif",
      flavors: ["كريمة", "شوكولاتة"],
      size: "متوسط (24 سم)",
      delivery: "مُتاح للتوصيل",
      isNew: true
    }
  ]



  const CakeCard = ({ cake }) => (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#ffd7c2]">
   

    

      
      {/* الصورة */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-0"></div>
        <img
          src={cake.image}
          alt={cake.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* فئات النكهات */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {cake.flavors.slice(0, 2).map((flavor, idx) => (
            <span key={idx} className="bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              {flavor}
            </span>
          ))}
        </div>
      </div>

      {/* المحتوى */}
      <div className="p-6" dir="rtl">
        {/* الفئة */}
        <div className="mb-3">
          
        </div>

        {/* الاسم والوصف */}
        <h3 className="text-xl font-bold text-[#8b4513] mb-2 group-hover:text-[#d4a574] transition-colors">
          {cake.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {cake.description}
        </p>

      

      

        {/* السعر والزر */}
        <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#8b4513]">
              {cake.price} ج.م
            </span>
<a
            href={`https://wa.me/201271716206?text=أريد طلب ${cake.name} - السعر: ${cake.price} ج.م`}
  target="_blank"
  rel="noopener noreferrer"
  className="group/btn relative overflow-hidden cursor-pointer
  bg-gradient-to-r from-[#25D366] to-[#1ebe5d]
  text-white px-6 py-3 rounded-full text-sm font-semibold
  flex items-center gap-3
  hover:shadow-[0_10px_25px_rgba(37,211,102,0.45)]
  transition-all duration-300"
>
  {/* Shine effect */}
  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />

  {/* Icon */}
  <span className="relative z-10 text-lg group-hover/btn:scale-110 transition-transform">
    <FaWhatsapp />
  </span>

  <span className="relative z-10">
    احجز الآن
  </span>
</a>
          {/* <button className="group/btn relative overflow-hidden bg-gradient-to-r from-[#d4a574] to-[#b8860b] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2">
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
            <FaShoppingCart className="relative z-10" />
            <span className="relative z-10">أضف للسلة</span>
          </button> */}
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-16 bg-gradient-to-b from-[#fffaf5] to-white" dir="rtl">
          {/* ميزات إضافية */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#fff5e6] to-white p-6 rounded-2xl border border-[#ffd7c2] text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#d4a574] to-[#b8860b] flex items-center justify-center">
              <MdLocalShipping className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[#8b4513] mb-2">توصيل سريع</h3>
            <p className="text-gray-600">نوصل طلباتك خلال 120 دقيقة في جميع أنحاء المدينة</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#fff5e6] to-white p-6 rounded-2xl border border-[#ffd7c2] text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4] flex items-center justify-center">
              <MdCake className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[#8b4513] mb-2">تورتات مخصصة</h3>
            <p className="text-gray-600">نصمم تورتة خاصة بك تناسب ذوقك ومناسبتك</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#fff5e6] to-white p-6 rounded-2xl border border-[#ffd7c2] text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb] flex items-center justify-center">
              <FaStar className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[#8b4513] mb-2">جودة مضمونة</h3>
            <p className="text-gray-600">نستخدم أفضل المكونات الطازجة لضمان الجودة والطعم</p>
          </div>
        </div>
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4] flex items-center justify-center">
              <MdCake className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8b4513] to-[#d4a574] bg-clip-text text-transparent">
              تورتاتنا المميزة
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            اكتشف تشكيلتنا الفريدة من التورتات المصنوعة بأفضل المكونات وأيدي خبراء الحلويات
          </p>
        </div>

      

        <div className="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            className="pb-20"
          >
            {cakes.map((cake) => (
              <SwiperSlide key={cake.id}>
                <div className="px-2 py-4">
                  <CakeCard cake={cake} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-prev absolute cursor-pointer lg:-left-12 left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#8b4513] hover:bg-[#fff5e6] transition-colors -translate-x-6">
            <FaChevronLeft />
          </button>
          <button className="custom-next absolute cursor-pointer lg:-right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#8b4513] hover:bg-[#fff5e6] transition-colors translate-x-6">
            <FaChevronRight />
          </button>
        </div>

      

        <div className="text-center mt-12">
          <Link to='/all-cake' className=" relative hover:bg-[#d4a574] overflow-hidden border-2 border-[#d4a574] text-[#8b4513] px-10 py-3 rounded-full text-lg font-semibold hover:text-white transition-colors duration-300">
            <span className="relative z-10">عرض جميع التورتات</span>
          </Link>
        </div>
      </div>

      {/* الأنماط المخصصة */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #d4a574 !important;
          opacity: 0.3 !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet-active {
          width: 30px !important;
          border-radius: 10px !important;
          opacity: 1 !important;
          background: linear-gradient(90deg, #d4a574, #b8860b) !important;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default CakesSection