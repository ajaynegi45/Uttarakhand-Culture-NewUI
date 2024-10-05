"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const craftItems = [
  { name: "Woodcarving", image: "data:image/jpeg;base64,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" },
  { name: "Copper Wire", image: "/tamta.jpg" },
  { name: "Ringal Crafts", image: "/ringal.jpg" },
  { name: "Aipan", image: "/AIPAN.jpg" },
]

const cardData = [
  {
    title: "AIPAN ART",
    subTitle: "INTRICATE DESIGNS · KUMAON REGION",
    description: "Aipan is a traditional folk art form originating from the Kumaon region of Uttarakhand. These intricate designs are created on floors and walls during festivals, religious ceremonies, and special occasions. The patterns, made with rice paste, are believed to bring prosperity and happiness to households. The vibrant red background and white motifs symbolize purity and devotion.",
    image: "https://uttarakhandhaat.com/wp-content/uploads/2023/01/IMG_20230105_215022_672.webp",
  },
  {
    title: "WOOD CARVING",
    subTitle: "TRADITIONAL CRAFT · GARHWAL REGION",
    description: "The art of wood carving in Uttarakhand is a centuries-old tradition, particularly prominent in the Garhwal region. Artisans skillfully carve intricate designs on doors, windows, and temples, showcasing the region's cultural heritage. These wooden artifacts are known for their precision and beauty, making them popular both for home décor and religious use.",
    image: "https://media.istockphoto.com/id/173390422/photo/norse-wooden-carving.jpg?s=612x612&w=0&k=20&c=x7d2wAhKWm1m5bu8nvXLa3Ixxv_YHPmKBYlae8l-_Uo=",
  },
  {
    title: "RINGAL CRAFT",
    subTitle: "BAMBOO WEAVING · KUMAON & GARHWAL",
    description: "Ringal craft is a form of bamboo weaving unique to the hills of Uttarakhand. Artisans create everyday utility items like baskets, mats, and furniture using the ringal bamboo plant. The craft not only supports the local economy but also promotes eco-friendly practices. The woven items are durable, functional, and environmentally sustainable.",
    image: "https://www.dsource.in/sites/default/files/resource/ringal-bamboo-basketry-uttarakhand/products/minigallery/9748/03.jpg",
  },
  {
    title: "WOOLEN HANDICRAFTS",
    subTitle: "HANDWOVEN · HIMALAYAN REGIONS",
    description: "Uttarakhand's woolen handicrafts are famous for their warmth and fine quality. From shawls and scarves to woolen carpets and blankets, these products are handwoven by local women in the Himalayan regions. The use of traditional looms and natural dyes adds to the authenticity of these crafts, making them highly valued in both local and international markets.",
    image: "https://www.shutterstock.com/image-photo/colorful-sarees-indian-traditional-attire-260nw-2490820603.jpg",
  },
  {
    title: "COPPERWARE",
    subTitle: "TRADITIONAL METALWORK · KUMAON",
    description: "Copperware from Uttarakhand, particularly from the Kumaon region, is known for its craftsmanship and utility. Artisans create beautiful copper pots, utensils, and decorative items that are both functional and artistic. The copperware is believed to have health benefits and is widely used in households and religious ceremonies across the state.",
    image: "https://i.pinimg.com/736x/89/01/9a/89019a5bcb0fa110edab39a61abe580e.jpg",
  },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="w-full bg-white shadow-md">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left mb-6 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Handicrafts</h1>
              <p className="text-xl text-gray-600">DISCOVER THE ARTISTRY OF UTTARAKHAND</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-auto"
            >
              <Image
                src="https://c1.wallpaperflare.com/preview/992/229/146/pottery-souvenir-traditional-art-travel-craft.jpg"
                alt="HANDICRAFTS"
                width={368}
                height={400}
                className="rounded-lg shadow-lg"
                priority
              />
            </motion.div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-center text-gray-800 mb-8"
        >
          Featured Crafts
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {craftItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-full shadow-md mb-2"
              />
              <span className="text-sm font-medium text-gray-700">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{card.subTitle}</p>
                <p className="text-sm text-gray-700">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}