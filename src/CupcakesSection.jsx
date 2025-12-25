'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaHeart, FaStar, FaChevronRight, FaChevronLeft, FaWhatsapp } from 'react-icons/fa'
import { MdCake, MdLocalShipping, MdTimer } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CupcakesSection = () => {
  const [favorites, setFavorites] = useState([])

  const cupcakes = [
    {
      id: 1,
      name: "قطعة سينابون ",
      description: "قطعة سينابون بالصوص الأبيض الخطير الخاص بـAisha وكراميل ومكسرات القطعة ",
      price: 40,
      originalPrice: 55,
      discount: 18,
      category: "فاخر",
      rating: 4.9,
      reviews: 124,
      image: "/images/1.jfif",
      flavors: ["شوكولاتة بلجيكي", "كريمة"],
      size: "قطعة كبيرة",
      delivery: "مُتاح للتوصيل",
      isNew: true
    },
    {
      id: 2,
      name: "قطعة جاتوه سويسرول ",
      description: "قطعة جاتوه بكريمة الشوكولاتة المميزة في Aisha Sweets ",
      price: 70,
      originalPrice: 50,
      discount: 20,
      category: "كلاسيكي",
      rating: 4.8,
      reviews: 98,
      image: "/images/2.jfif",
      flavors: ["فانيليا فرنسية", "كريمة"],
      size: "قطعة كبيرة",
      delivery: "مُتاح للتوصيل",
      isNew: false
    },
    {
      id: 3,
       name: "قطعة جاتوه سويسرول ",
      description: "قطعة جاتوه بكريمة الشوكولاتة المميزة في Aisha Sweets ",
      price: 45,
      originalPrice: 60,
      discount: 17,
      category: "مميز",
      rating: 4.9,
      reviews: 156,
      image: "/images/3.jfif",
      flavors: ["ريد فيلفيت", "كريمة جبن"],
      size: "قطعة كبيرة",
      delivery: "مُتاح للتوصيل",
      isNew: true
    },
    {
      id: 4,
      name: "قطعة جاتوه سويسرول",
      description: "قطعة جاتوه سويسرول بالكريمة المميزة وصوص الشيكولاتة والكراميل ",
      price: 45,
      originalPrice: 52,
      discount: 19,
      category: "شهي",
      rating: 4.7,
      reviews: 203,
      image: "/images/4.jfif",
      flavors: ["لوتس", "كراميل"],
      size: "قطعة كبيرة",
      delivery: "مُتاح للتوصيل",
      isNew: false
    },
    {
      id: 5,
      name: "كب توينكز المميز",
      description: "كب توينكز المميز اختراع Aisha طبقات كيك هشة وطرية وطبقات من الكريمة الخطيرة والكراميل وصوص شيكولاتة ",
      price: 40,
      originalPrice: 48,
      discount: 21,
      category: "فواكه",
      rating: 4.8,
      reviews: 78,
      image: "/images/5.jfif",
      flavors: ["فراولة", "شوكولاتة"],
      size: "قطعة متوسطة",
      delivery: "مُتاح للتوصيل",
      isNew: true
    },
    {
      id: 6,
      name: "قطعة كيك ماتيلدا",
      description: "قطعة كيك ماتيلدا غرقانة شيكولاتة+مكسرات ",
      price: 70,
      originalPrice: 45,
      discount: 22,
      category: "قهوة",
      rating: 4.6,
      reviews: 92,
      image: "/images/6.jfif",
      flavors: ["قهوة عربية", "هيل"],
      size: "قطعة متوسطة",
      delivery: "مُتاح للتوصيل",
      isNew: true
    },
    {
      id: 7,
      name: "كب دسباسيتو",
      description: "كب دسباسيتو مميز من Aisha كيك وكريمة ديسباسيتو وصوص الشيكولاتة الناعم ورقائق من الشوكليت شيبس ",
      price: 35,
      originalPrice: 42,
      discount: 24,
      category: "استوائي",
      rating: 4.5,
      reviews: 145,
      image: "/images/7.jfif",
      flavors: ["جوز الهند", "كريمة"],
      size: "قطعة متوسطة",
      delivery: "مُتاح للتوصيل",
      isNew: false
    },
    {
      id: 8,
      name: "كب الفراولة كيك",
      description: "كب الفراولة كيك فانيليا وصوص فراولة وكريمة وقطع من الفراولة الفريش",
      price: 35,
      originalPrice: 40,
      discount: 25,
      category: "منعش",
      rating: 4.7,
      reviews: 98,
      image: "/images/8.jfif",
      flavors: ["ليمون", "نعناع"],
      size: "قطعة صغيرة",
      delivery: "مُتاح للتوصيل",
      isNew: false
    },
    {
      id: 9,
      name: "De Paris بلمسة Aisha",
      description: "كيك شيكولاتة ڤادچ و شيكولاتة مميزة وكنافة بستاشيو وقطع فراولة فريش  ",
      price: 80,
      originalPrice: 58,
      discount: 17,
      category: "فواكه",
      rating: 4.9,
      reviews: 112,
      image: "/images/9.jfif",
      flavors: ["توت", "كريمة"],
      size: "قطعة كبيرة",
      delivery: "مُتاح للتوصيل",
      isNew: true
    },
    {
      id: 10,
      name: "قطعة جاتوه",
      description: "قطعة جاتوه عادي بالكريمة والمكسرات والكراميل   ",
      price: 20,
      originalPrice: 58,
      discount: 17,
      category: "فواكه",
      rating: 4.9,
      reviews: 112,
      image: "/images/10.jfif",
      flavors: ["توت", "كريمة"],
      size: "قطعة كبيرة",
      delivery: "مُتاح للتوصيل",
      isNew: true
    },
     {
      id: 10,
      name: "قطعة جاتوه special ",
      description: "قطعة جاتوه special بالكراميل والمكسرات ",
      price: 20,
      originalPrice: 58,
      discount: 17,
      category: "فواكه",
      rating: 4.9,
      reviews: 112,
      image: "/images/11.jfif",
      flavors: ["توت", "كريمة"],
      size: "قطعة كبيرة",
      delivery: "مُتاح للتوصيل",
      isNew: true
    }
  ]

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    )
  }

  const CupcakeCard = ({ cupcake }) => (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#ffd7c2]">


      {/* الصورة */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-0"></div>
        <img
          src={cupcake.image}
          alt={cupcake.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* فئات النكهات */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {cupcake.flavors.slice(0, 2).map((flavor, idx) => (
            <span key={idx} className="bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              {flavor}
            </span>
          ))}
        </div>
      </div>

      {/* المحتوى */}
      <div className="p-6" dir="rtl">
       
        {/* الاسم والوصف */}
        <h3 className="text-xl font-bold text-[#8b4513] mb-2 group-hover:text-[#d4a574] transition-colors">
          {cupcake.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {cupcake.description}
        </p>

     

        {/* السعر والزر */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#8b4513]">
              {cupcake.price} ج.م
            </span>
            {cupcake.originalPrice > cupcake.price && (
              <span className="text-gray-400 line-through text-sm">
                {cupcake.originalPrice} ج.م
              </span>
            )}
          </div>
          <a
            href={`https://wa.me/201271716206?text=أريد طلب ${cupcake.name} - السعر: ${cupcake.price} ج.م`}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative overflow-hidden cursor-pointer
            bg-gradient-to-r from-[#25D366] to-[#1ebe5d]
            text-white px-6 py-3 rounded-full text-sm font-semibold
            flex items-center gap-3
            hover:shadow-[0_10px_25px_rgba(37,211,102,0.45)]
            transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            <span className="relative z-10 text-lg group-hover/btn:scale-110 transition-transform">
              <FaWhatsapp />
            </span>
            <span className="relative z-10">اطلب الآن</span>
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-16 bg-gradient-to-b from-[#fffaf5] to-white" dir="rtl">
      {/* ميزات إضافية */}
      <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
        <div className="bg-gradient-to-br from-[#fff5e6] to-white p-6 rounded-2xl border border-[#ffd7c2] text-center hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4] flex items-center justify-center">
            <MdTimer className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-[#8b4513] mb-2">تصنيع يومي</h3>
          <p className="text-gray-600">نصنع الكب كيك طازج يومياً لضمان الجودة</p>
        </div>
        
        <div className="bg-gradient-to-br from-[#fff5e6] to-white p-6 rounded-2xl border border-[#ffd7c2] text-center hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb] flex items-center justify-center">
            <FaStar className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-[#8b4513] mb-2">نكهات مميزة</h3>
          <p className="text-gray-600">أكثر من 20 نكهة مختلفة تناسب جميع الأذواق</p>
        </div>
        
        <div className="bg-gradient-to-br from-[#fff5e6] to-white p-6 rounded-2xl border border-[#ffd7c2] text-center hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#4cd964] to-[#5ac8fa] flex items-center justify-center">
            <MdLocalShipping className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-[#8b4513] mb-2">توصيل سريع</h3>
          <p className="text-gray-600">توصيل خلال 90 دقيقة للحفاظ على الطزاجة</p>
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
              تشكيلة  Aisha Store
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            اكتشف تشكيلتنا الفاخرة  المصنوع بأيدٍ خبيرة وأفضل المكونات العالمية
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
              nextEl: '.cupcake-next',
              prevEl: '.cupcake-prev',
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            className="pb-20"
          >
            {cupcakes.map((cupcake) => (
              <SwiperSlide key={cupcake.id}>
                <div className="px-2 py-4">
                  <CupcakeCard cupcake={cupcake} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="cupcake-prev absolute cursor-pointer lg:-left-12 left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#8b4513] hover:bg-[#fff5e6] transition-colors -translate-x-6">
            <FaChevronLeft />
          </button>
          <button className="cupcake-next absolute cursor-pointer lg:-right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#8b4513] hover:bg-[#fff5e6] transition-colors translate-x-6">
            <FaChevronRight />
          </button>
        </div>

        {/* <div className="text-center mt-12">
          <Link 
            to='/all-cupcakes' 
            className="relative overflow-hidden border-2 border-[#d4a574] text-[#8b4513] px-10 py-3 rounded-full text-lg font-semibold hover:text-white transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4a574] to-[#b8860b] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10 group-hover:text-white">عرض جميع الكب كيك</span>
          </Link>
        </div> */}
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

export default CupcakesSection