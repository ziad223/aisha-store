'use client'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaWhatsapp } from 'react-icons/fa'
import { MdCake, MdLocalShipping } from 'react-icons/md'

const AllCakesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('الكل')
  
  const cakes = [
    {
      id: 1,
      name: "تورتة كريمة",
      description: "تورتة كريمة حشو كراميل وشوكليت ومكسرات وقطع شيكولاتة",
      price: 500,
      originalPrice: 320,
      discount: 12,
      category: "كلاسيكي",
      reviews: 124,
      image: "/images/torta/1.jfif",
      flavors: ["شوكولاتة", "كريمة"],
      size: "كبير (28 سم)",
      delivery: "مُتاح للتوصيل",
      isNew: true
    },
    {
      id: 2,
      name: "تورتة الفواكه الطازجة",
      description: "تورتة كريمة حشو كراميل ومكسرات وشيكولاتة",
      price: 300,
      originalPrice: 380,
      discount: 16,
      category: "صحي",
      rating: 4.9,
      reviews: 89,
      image: "/images/torta/2.jfif",
      flavors: ["شوكولاتة", "مكسرات", "كراميل", "كريمة"],
      size: "متوسط (22 سم)",
      delivery: "مُتاح للتوصيل",
      isNew: false
    },
    {
      id: 3,
      name: "تورتة كريمة",
      description: "تورتة كريمة حشو كراميل ومكسرات وشيكولاتة",
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
      name: "تورتة المناسبات الكبيرة",
      description: "تورتة بالديزاين اللي تحبه تكفي ٢٢فرد",
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
      description: "تورتة مزينة بشكل احتفالي مع شخصيات كرتونية",
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
      name: "تورتة شوكولاتة",
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
      description: "تورتة بصوص اللوتس",
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
      name: "تورتة الفراولة",
      description: "طبقات من الفراولة مع كريمة",
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

  const categories = ['الكل', 'كلاسيكي', 'صحي', 'مميز', 'تشيز كيك', 'احتفالي', 'عرس', 'حلويات', 'فواكه', 'قهوة']
  
  const filteredCakes = selectedCategory === 'الكل' 
    ? cakes 
    : cakes.filter(cake => cake.category === selectedCategory)

  const CakeCard = ({ cake }) => (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#ffd7c2]">
      {/* الصورة */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-0"></div>
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#fff5e6] to-[#ffd7c2] text-[#8b4513] rounded-full text-sm font-medium">
            {cake.category}
          </span>
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
            href="https://wa.me/201271716206"
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
            <span className="relative z-10">احجز الآن</span>
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf5] to-white" dir="rtl">
      {/* الهيدر */}
      <header className="bg-gradient-to-r from-[#fff5e6] to-white border-b border-[#ffd7c2] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link to="/" className="flex items-center gap-3 text-[#8b4513] hover:text-[#d4a574] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>العودة للرئيسية</span>
            </Link>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4] flex items-center justify-center">
                  <MdCake className="text-white text-2xl" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8b4513] to-[#d4a574] bg-clip-text text-transparent">
                  جميع التورتات
                </h1>
              </div>
              <p className="text-gray-600 mt-2">اكتشف تشكيلتنا الكاملة من التورتات اللذيذة</p>
            </div>
            
            <div className="text-[#8b4513] font-semibold">
              <span className="text-lg">{filteredCakes.length}</span>
              <span className="mr-2">تورتة متاحة</span>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="container mx-auto px-4">
        

          {/* شبكة التورتات */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCakes.map((cake) => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>

          {/* رسالة إذا لم توجد نتائج */}
          {filteredCakes.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#fff5e6] to-[#ffd7c2] flex items-center justify-center">
                <MdCake className="text-[#8b4513] text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#8b4513] mb-3">لا توجد تورتات في هذه الفئة</h3>
              <p className="text-gray-600 mb-6">جرب اختيار فئة أخرى أو تصفح جميع التورتات</p>
              <button
                onClick={() => setSelectedCategory('الكل')}
                className="bg-gradient-to-r from-[#d4a574] to-[#b8860b] text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
              >
                عرض جميع التورتات
              </button>
            </div>
          )}
        </div>
      </main>

      {/* فوتر */}
      <footer className="bg-gradient-to-r from-[#fff5e6] to-white border-t border-[#ffd7c2] py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#d4a574] to-[#b8860b] flex items-center justify-center">
                <MdLocalShipping className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#8b4513] mb-2">توصيل مجاني</h3>
              <p className="text-gray-600">لطلبات فوق 500 ج.م داخل المدينة</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4] flex items-center justify-center">
                <FaStar className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#8b4513] mb-2">جودة مضمونة</h3>
              <p className="text-gray-600">ضمان استعادة المبلغ إذا لم تعجبك</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8b4513] mb-2">دعم 24/7</h3>
              <p className="text-gray-600">متاحون للإجابة على استفساراتك</p>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-[#ffd7c2]">
            <p className="text-gray-600">
              © {new Date().getFullYear()} جميع الحقوق محفوظة - متجر التورتات اللذيذة
            </p>
          </div>
        </div>
      </footer>

      {/* أنماط CSS إضافية */}
      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        body {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}

export default AllCakesPage