import React from 'react';
import { Layout } from './components/Layout';
import { ArticleSection } from './components/ArticleSection';
// Import VideoEmbed to fix the missing component error
import { VideoEmbed } from './components/VideoEmbed';
import { AlertCircle, ChevronDown, Book, Shield, Zap } from 'lucide-react';

const App: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(3, 7, 18, 0.85), rgba(3, 7, 18, 0.85)), url('input_file_7.png')` }}>
        <div className="max-w-4xl space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1 border border-pink-500 rounded-full text-pink-500 text-xs font-bold tracking-[0.2em] mb-4">
            PERSONAL TESTIMONY
          </div>
          <h1 className="text-5xl md:text-8xl font-serif-heading font-bold leading-none tracking-tighter">
            WHY IT WAS <span className="text-pink-500">PROPHETIC</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide max-w-3xl mx-auto">
            How I discovered Tim Hansel, Buckminster Fuller and Lupe Fiasco — A journey of spiritual alignment and resistance.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-12">
            <div className="text-sm font-medium uppercase tracking-widest flex items-center gap-2">
              <span className="w-12 h-px bg-gray-700"></span>
              By Solomon Yaw Adeklo
              <span className="w-12 h-px bg-gray-700"></span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={32} className="text-gray-600" />
        </div>
      </section>

      {/* Caution Box */}
      <div className="max-w-4xl mx-auto mt-12 px-6">
        <div className="bg-red-950/20 border border-red-900/50 rounded-2xl p-8 flex items-start gap-6">
          <AlertCircle className="text-red-500 flex-shrink-0" size={32} />
          <div className="space-y-2">
            <h3 className="text-red-500 font-bold uppercase tracking-widest text-sm">Caution To Readers</h3>
            <p className="text-gray-400 text-sm italic leading-relaxed">
              The information presented contains sensitive and controversial topics, including spiritual beliefs, conspiracy theories, and critiques of societal structures. Readers are advised to approach with an open mind and discernment, recognizing that these views reflect personal testimony.
            </p>
          </div>
        </div>
      </div>

      {/* Part 1: Tim Hansel (2006) */}
      <ArticleSection
        id="hansel"
        year="2006"
        title="Holy Sweat & Servant Leadership"
        image="input_file_0.png"
        imageCaption="Tim Hansel's 'Holy Sweat' - A foundation of vision and servant leadership."
        content={[
          "In 2006, while studying at Tema Secondary School in Ghana, I found a book that profoundly shaped my spiritual journey. Visiting my cousin—the caretaker of a wealthy businessman's house—I discovered 'Holy Sweat' by Tim Hansel on his bookshelves.",
          "The book emphasized servant leadership and operating through the Holy Spirit's gifts, introducing Tim Hansel's Summit Expedition. As a second-year student, I began reading it, drawn to its call for living out God's purpose with vision, courage, perseverance, and joy."
        ]}
        videoId="3tFP-54wXps"
        videoTitle="Summit Expedition Project Documentary"
      />

      {/* Part 2: Lupe Fiasco (2006-2009) */}
      <ArticleSection
        id="fiasco"
        year="2006 - 2009"
        title="The Conscious Rhythm"
        alignment="right"
        image="input_file_11.png"
        imageCaption="Enemy of the State: A Love Story (2009 Mixtape)"
        content={[
          "That same year, I discovered Lupe Fiasco on Trace TV. His song 'Daydreamin' featured him dancing with a robot, resonating with my childhood passion for technology. Unlike other rappers, Lupe celebrated skateboarding and unique, conscious style.",
          "By 2009, his mixtape 'Enemy of the State' captivated me. Lupe mentioned going on an expedition to Mount Kilimanjaro ('Summit on the Summit') to raise awareness for sanitary drinking water. I realized he was inspired by Tim Hansel's original Summit Expedition. This was a prophetic link."
        ]}
      />

      {/* Middle Break - The Three Icons Collage */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img src="input_file_6.png" alt="Prophetic Link Collage" className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold uppercase laser-text">Only God Is Great</h2>
            <p className="text-gray-400 italic">
              "Never great 'cause God is great... God has been with me since birth and my purpose as an artist is to serve God through my music."
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <Shield className="text-pink-500" size={24} />
                <span>Resistance against worldly corruption</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Zap className="text-pink-500" size={24} />
                <span>The power of spiritual consciousness</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: Buckminster Fuller (2010) */}
      <ArticleSection
        id="fuller"
        year="2010"
        title="Synergetics: The Laser Theory"
        image="input_file_2.png"
        imageCaption="The Geometric Battle: Synergetics vs the New World Order"
        content={[
          "In 2010, while reading Hansel, I came across a reference to Buckminster Fuller's Synergetics. My research led me to Hermann Haken and the interpretation of laser principles—the self-organization of non-equilibrium systems.",
          "I realized Synergetics was essentially 'Laser Theory.' This connected directly to Lupe Fiasco's 'Lasers Manifesto.' This realization came during a year of intense spiritual warfare. I survived these attacks after reading Fuller, divinely seeing laser beams shooting from the eyes of my enemies."
        ]}
        videoId="Ge4BEdyZ8bM"
        videoTitle="Lupe Fiasco - I'm Beamin"
      />

      {/* Part 4: The Illuminati & Global Agenda */}
      <section className="py-20 px-6 max-w-6xl mx-auto bg-gray-900/50 rounded-[4rem] my-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase">The Great Resistance</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Understanding the hidden powers behind global systems of control and deception.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4 bg-gray-950 p-8 rounded-3xl border border-gray-800">
            <img src="input_file_3.png" alt="I Fight Evil" className="rounded-xl mb-6" />
            <h3 className="font-bold text-xl text-pink-500 uppercase tracking-tighter">New World Order</h3>
            <p className="text-gray-400 text-sm">Challenging the 'Giants' (huge corporations) that control the global financial system as described in Fuller's 'Grunch of Giants'.</p>
          </div>
          <div className="space-y-4 bg-gray-950 p-8 rounded-3xl border border-gray-800">
            <img src="input_file_4.png" alt="America the Modern Egypt" className="rounded-xl mb-6" />
            <h3 className="font-bold text-xl text-pink-500 uppercase tracking-tighter">Modern Day Egypt</h3>
            <p className="text-gray-400 text-sm">Identifying the pyramidal structures of America as mirrors of ancient enslavement, pointing toward a Luciferian control grid.</p>
          </div>
          <div className="space-y-4 bg-gray-950 p-8 rounded-3xl border border-gray-800">
            {/* Fixed: Replaced duplicate book cover with Synergetics image for Laser Manifesto section */}
            <img src="input_file_2.png" alt="Laser Vision" className="rounded-xl mb-6 h-48 w-full object-cover" />
            <h3 className="font-bold text-xl text-pink-500 uppercase tracking-tighter">Laser Manifesto</h3>
            <p className="text-gray-400 text-sm">Using spiritual 'lasers' to destroy the all-seeing eye of the Illuminati and reclaim divine identity through truth.</p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
           <VideoEmbed id="Du43HNQXkoA" title="Lupe Fiasco - Building Minds Faster" />
        </div>
      </section>

      {/* Part 5: Prophet and Mission */}
      <ArticleSection
        id="conclusion"
        title="A Divine Assignment"
        alignment="right"
        image="input_file_8.png"
        imageCaption="Solomon Yaw Adeklo's Visionary Icons"
        content={[
          "Discovering Tim Hansel, Buckminster Fuller, and Lupe Fiasco was prophetic. I believe God exposed me to these individuals to assign me to destroy the works and agendas of those who control global politics, economy, media, and education.",
          "Some Christians dismiss hip-hop as devilish, but Lupe Fiasco is a conscious artist who speaks against materialism, sexual immorality, houses of god, violence, and drug abuse. Their collective vision—spiritual leadership, systemic reform, and revolutionary music—confirmed my assignment to dismantle oppressive agendas."
        ]}
      />

      {/* Bibliography Section */}
      <section className="bg-gray-950/50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
             <Book className="text-pink-500" />
             <h2 className="text-2xl font-serif-heading">Bibliography & Sources</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-400 leading-relaxed">
            <ul className="space-y-4 list-disc pl-5">
              <li>Fuller, R. Buckminster (1975). Synergetics. Macmillan.</li>
              <li>Fuller, R. Buckminster (1981). Critical Path. St. Martin's Press.</li>
              <li>Hansel, Tim (1987). Holy Sweat. W Publishing Group.</li>
              <li>Windsor, R. R. (1969). From Babylon to Timbuktu.</li>
            </ul>
            <ul className="space-y-4 list-disc pl-5">
              <li>Lupe Fiasco (2011). Lasers [Album]. Atlantic.</li>
              <li>Lupe Fiasco (2015). Pharaoh Height 2/30 [Mixtape].</li>
              <li>Joseph, P. (2007). Zeitgeist: The Movie.</li>
              <li>Zinn, H. (2006). After the War. The Progressive.</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;