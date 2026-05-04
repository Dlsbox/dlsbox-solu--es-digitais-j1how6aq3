import { Swiper, SwiperSlide } from '@/components/ui/swiper'

export function SwiperDemo() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Swiper Demo</h2>

        {/* Basic Swiper */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4">Basic Swiper</h3>
          <Swiper
            className="w-full h-64 bg-gray-100 rounded-lg"
            options={{
              slidesPerView: 1,
              spaceBetween: 10,
              loop: true,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            }}
          >
            <SwiperSlide>
              <div className="w-full h-full bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                Slide 1
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-green-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                Slide 2
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-red-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                Slide 3
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Swiper with Navigation and Pagination */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4">Swiper com Navegação e Paginação</h3>
          <Swiper
            className="w-full h-64 bg-gray-100 rounded-lg"
            navigation={true}
            pagination={true}
            options={{
              slidesPerView: 1,
              spaceBetween: 10,
              loop: true,
            }}
          >
            <SwiperSlide>
              <div className="w-full h-full bg-purple-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                Produto 1
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-orange-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                Produto 2
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-teal-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                Produto 3
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-pink-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                Produto 4
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Multiple slides per view */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Múltiplos Slides por Visualização</h3>
          <Swiper
            className="w-full h-48 bg-gray-100 rounded-lg"
            navigation={true}
            pagination={true}
            options={{
              slidesPerView: 3,
              spaceBetween: 20,
              loop: true,
              breakpoints: {
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              },
            }}
          >
            <SwiperSlide>
              <div className="w-full h-full bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">
                Card 1
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                Card 2
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                Card 3
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-violet-500 rounded-lg flex items-center justify-center text-white font-bold">
                Card 4
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-rose-500 rounded-lg flex items-center justify-center text-white font-bold">
                Card 5
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}