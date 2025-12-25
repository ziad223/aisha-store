'use client'
import { useState } from 'react'
import { FaSearch, FaPrint, FaDownload, FaWhatsapp, FaShareAlt, FaStar } from 'react-icons/fa'
import { MdMenuBook, MdRestaurantMenu, MdPhotoLibrary } from 'react-icons/md'

const MenuSection = () => {
  const [zoomLevel, setZoomLevel] = useState(100)
  const [activeMenu, setActiveMenu] = useState(1)

  const menuItems = [
    {
      id: 1,
      title: "قائمة التورتات الأساسية",
      description: "أسعار جميع التورتات الكلاسيكية والمميزة",
      image: "/images/menu-1.jfif",
      date: "تم التحديث: ديسمبر 2025",
      type: "تورتات"
    },
    {
      id: 2,
      title: "قائمة المناسبات الخاصة",
      description: "أسعار تورتات الأعراس والاحتفالات",
      image: "/images/menu-2.jfif",
      date: "تم التحديث: يناير 2025",
      type: "مناسبات"
    }
  ]

  const features = [
    {
      icon: <MdMenuBook className="text-xl" />,
      text: "قائمة محدثة"
    },
    {
      icon: <FaStar className="text-xl" />,
      text: "أسعار تنافسية"
    },
    {
      icon: <MdRestaurantMenu className="text-xl" />,
      text: "تنوع كبير"
    }
  ]

  const currentMenu = menuItems.find(item => item.id === activeMenu)

  return (
    <section className="py-16 bg-gradient-to-b from-[#fffaf5] to-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4] flex items-center justify-center">
              <MdMenuBook className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8b4513] to-[#d4a574] bg-clip-text text-transparent">
              قائمة الأسعار
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            اكتشف أسعارنا المميزة وتشكيلتنا الواسعة من التورتات اللذيذة
          </p>
        </div>

        {/* ميزات سريعة */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#ffd7c2]">
              <span className="text-[#d4a574]">{feature.icon}</span>
              <span className="text-[#8b4513] font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* محتوى السيكشن */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* القائمة النشطة */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#ffd7c2] overflow-hidden">
            {/* العنوان */}
            <div className="p-6 border-b border-[#ffd7c2] bg-gradient-to-r from-[#fff5e6] to-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#8b4513] mb-1">{currentMenu.title}</h3>
                  <p className="text-gray-600">{currentMenu.description}</p>
                </div>
                <span className="bg-[#d4a574] text-white px-4 py-1 rounded-full text-sm font-medium">
                  {currentMenu.type}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-2">{currentMenu.date}</p>
            </div>

            {/* صورة المنيو */}
            <div className="relative p-6">
              <div className="relative overflow-hidden rounded-xl border-2 border-[#ffd7c2] bg-gray-50">
                <img
                  src={currentMenu.image}
                  alt={currentMenu.title}
                  className="w-full h-auto transition-transform duration-300"
                  style={{ transform: `scale(${zoomLevel / 100})` }}
                />
                
                {/* علامة مائية خفيفة */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute bottom-4 left-4 text-[#d4a574]/20 text-lg font-bold">
                    تورتات مميزة
                  </div>
                </div>
              </div>

              {/* أدوات التحكم بالصورة */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={() => setZoomLevel(Math.max(50, zoomLevel - 25))}
                  className="w-10 h-10 rounded-full bg-white border border-[#ffd7c2] text-[#8b4513] hover:bg-[#fff5e6] transition-colors flex items-center justify-center"
                >
                  <span className="text-lg font-bold">-</span>
                </button>
                
                <span className="px-4 py-2 bg-white border border-[#ffd7c2] rounded-full text-[#8b4513] font-medium">
                  {zoomLevel}%
                </span>
                
                <button
                  onClick={() => setZoomLevel(Math.min(200, zoomLevel + 25))}
                  className="w-10 h-10 rounded-full bg-white border border-[#ffd7c2] text-[#8b4513] hover:bg-[#fff5e6] transition-colors flex items-center justify-center"
                >
                  <span className="text-lg font-bold">+</span>
                </button>
                
                <button
                  onClick={() => setZoomLevel(100)}
                  className="px-4 py-2 md:flex hidden bg-white border border-[#ffd7c2] text-[#8b4513] rounded-full hover:bg-[#fff5e6] transition-colors text-sm font-medium"
                >
                  إعادة التعيين
                </button>
              </div>
               <button
                  onClick={() => setZoomLevel(100)}
                  className="px-4 py-2 flex md:hidden   items-center justify-center mt-5 bg-white border border-[#ffd7c2] text-[#8b4513] rounded-full hover:bg-[#fff5e6] transition-colors text-sm font-medium"
                >
                  إعادة التعيين
                </button>
            </div>

            {/* أزرار التحكم */}
            <div className="p-6 border-t border-[#ffd7c2] bg-gray-50">
              <div className="flex flex-wrap gap-3">
                <a
                  href={currentMenu.image}
                  download
                  className="flex-1 min-w-[120px] bg-white border border-[#ffd7c2] text-[#8b4513] hover:bg-[#fff5e6] px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <FaDownload />
                  <span>تحميل</span>
                </a>
                
                <button
                  onClick={() => window.print()}
                  className="flex-1 min-w-[120px] bg-white border border-[#ffd7c2] text-[#8b4513] hover:bg-[#fff5e6] px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <FaPrint />
                  <span>طباعة</span>
                </button>
                
                <a
                  href="https://wa.me/?text=اكتشف قائمة أسعار التورتات المميزة لدينا!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] bg-gradient-to-r from-[#25D366] to-[#1ebe5d] text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  <FaWhatsapp />
                  <span>مشاركة</span>
                </a>
              </div>
            </div>
          </div>

          {/* قائمة التنقل بين المنيوهات */}
          <div className="space-y-6">
            {/* جميع القوائم */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#ffd7c2] p-6">
              <h3 className="text-xl font-bold text-[#8b4513] mb-6 flex items-center gap-2">
                <MdPhotoLibrary className="text-[#d4a574]" />
                جميع القوائم المتاحة
              </h3>
              
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      activeMenu === item.id
                        ? 'border-[#d4a574] bg-gradient-to-r from-[#fff5e6] to-white'
                        : 'border-[#ffd7c2] hover:border-[#d4a574] hover:bg-[#fffaf5]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-[#ffd7c2]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#8b4513] mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#d4a574] text-sm font-medium">{item.type}</span>
                          <span className="text-gray-500 text-xs">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* معلومات إضافية */}
            <div className="bg-gradient-to-br from-[#fff5e6] to-white rounded-2xl border border-[#ffd7c2] p-6">
              <h4 className="text-lg font-bold text-[#8b4513] mb-4">معلومات مهمة</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#d4a574] mt-2"></div>
                  <span>الأسعار شاملة الضريبة</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#d4a574] mt-2"></div>
                  <span>التوصيل مجاني للطلبات فوق 500 جنيه</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#d4a574] mt-2"></div>
                  <span>يوجد خصم 10% للطلبات الكبيرة</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#d4a574] mt-2"></div>
                  <span>متاح التصميم المخصص بأسعار خاصة</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-[#ffd7c2]">
                <a
                  href="https://wa.me/201271716206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#d4a574] to-[#b8860b] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-3 hover:shadow-lg transition-all"
                >
                  <FaWhatsapp />
                  استفسر عن الأسعار عبر واتساب
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ملاحظة */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-[#fff5e6] to-white border border-[#ffd7c2] rounded-2xl px-8 py-4">
            <p className="text-gray-600">
              <span className="text-[#8b4513] font-bold">ملاحظة:</span> الأسعار قابلة للتغيير حسب الموسم والكمية. للأسعار المخصصة يرجى التواصل مباشرة
            </p>
          </div>
        </div>
      </div>

      {/* أنماط إضافية */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-section, .print-section * {
            visibility: visible;
          }
          .print-section {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
        
        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </section>
  )
}

export default MenuSection