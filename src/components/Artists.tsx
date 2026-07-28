import { motion } from 'framer-motion';

const artists = [
  { name: 'Kurmur' },
  { name: 'Hamshen' },
  { name: 'DXPURFARION' },
  { name: 'XANaKY' },
  { name: 'NURVIC' },
  { name: 'Voron' },
  { name: 'Phantom' },
];

const Artists = () => {
  return (
    <section id="artists" className="py-40 bg-black text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6"
        >
          <div className="h-[2px] w-24 bg-primary"></div>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">Наши Артисты</h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t border-white/10">
        {artists.map((artist, index) => (
          <motion.div
            key={artist.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative h-[600px] border-b border-r border-white/10 overflow-hidden cursor-pointer"
          >
            {/* Hover Reveal Content */}
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10"></div>
            
            <div className="absolute inset-0 p-12 flex flex-col justify-between z-20">
              <span className="text-[10px] font-display font-black uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity">
                0{index + 1}
              </span>
              
              <div>
                <motion.h3 
                  className="text-4xl font-display font-black uppercase leading-none mb-4 group-hover:translate-x-4 transition-transform duration-500"
                >
                  {artist.name}
                </motion.h3>
              </div>
            </div>

            {/* Background Graphics */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-700">
               <div className="w-[80%] h-[80%] rounded-full border border-white/20 animate-pulse"></div>
               <div className="absolute w-[60%] h-[60%] rounded-full border border-white/10"></div>
            </div>
            
            {/* Visual background for branding */}
            <div className={`absolute inset-0 -z-10 group-hover:scale-110 transition-transform duration-[2s] opacity-20 ${index % 2 === 0 ? 'bg-gradient-to-br from-primary/50 to-transparent' : 'bg-gradient-to-bl from-accent/50 to-transparent'}`}></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Artists;
