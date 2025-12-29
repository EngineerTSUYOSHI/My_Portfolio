import { useState } from 'react'
import './App.css'
import { worksData } from './works';

// 再利用可能なセクションコンポーネント
const Section = ({ id, title, children, className = "" }: { id: string, title: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`py-20 px-6 ${className}`}>
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center md:text-left border-l-8 border-teal-500 pl-4">{title}</h2>
      {children}
    </div>
  </section>
);

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('送信が完了しました！');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('エラーが発生しました。');
      }
    } catch (error) {
      setStatus('ネットワークエラーが発生しました。');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 scroll-smooth font-sans">
      {/* ナビゲーション */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b z-50 py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-black text-2xl tracking-tighter text-teal-600">PORTFOLIO</span>
          <div className="hidden md:flex space-x-8 font-bold text-gray-600">
            <a href="#about" className="hover:text-teal-600 transition">About</a>
            <a href="#solutions" className="hover:text-teal-600 transition">Solutions</a>
            <a href="#works" className="hover:text-teal-600 transition">Works</a>
            <a href="#contact" className="hover:text-teal-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero セクション */}
      <header id= "about" className="min-h-screen flex items-center bg-white pt-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              PYTHON AUTOMATION:<br />
              <span className="text-teal-500">UNLOCK YOUR TIME</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Pythonで自動化で、<br />
              あなたのビジネスに余裕を生み出します。
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-700 transition">お問い合わせ</a>
              {/* Pythonアイコンなどの画像があればここに配置 */}
              <img src="/python.png" alt="Python Icon" className="w-12 h-12" />
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-3xl p-4 md:p-6 shadow-2xl overflow-hidden text-[12px] sm:text-sm md:text-base font-mono text-teal-400">
            {/* whitespace-pre-wrap を追加して折り返しを許可、break-allで単語途中でも改行 */}
            <pre className="whitespace-pre-wrap break-all">
              <code>{`def automate_task(input_data):
              # Analyzing efficiency...
              processed = data_cleaning(input_data)
              
              return {
                "status": "Success",
                "saved_time": "100+ hours"
              }`}</code>
            </pre>
          </div>
        </div>
      </header>

      {/* About / Solutions */}
      <Section id="solutions" title="SOLUTIONS" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Web Scraping", desc: "競合価格や市場動向を自動収集" },
            { title: "Data Cleaning", desc: "煩雑なExcel作業を1クリックで完結" },
            { title: "Custom Tools", desc: "業務に合わせた専用ツールの開発" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="text-teal-500 text-4xl mb-4 font-bold">0{i+1}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Works セクション */}
      <Section id="works" title="WORKS" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worksData.map((work, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group text-left">
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold bg-teal-100 text-teal-700 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* アイコン画像があれば表示 */}
                <img src="/python.png" alt="Python" className="w-6 h-6 opacity-50 group-hover:opacity-100 transition" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{work.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">
                {work.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact - レスポンシブフォーム */}
      <Section id="contact" title="CONTACT" className="bg-slate-900 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-20 h-20 rounded-full border-2 border-teal-500 overflow-hidden flex-shrink-0">
                <img
                  src="/my_icon.png"
                  alt="Profile"
                  className="w-full h-full object-cover scale-180"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">TSUYOSHI</h3>
                <p className="text-teal-400 font-mono italic">Python Engineer</p>
              </div>
            </div>
            <p className="text-slate-400 text-lg">
              本業ではプログラマーとして主にPythonを使用して働いています。<br />
              自動化のご相談や、技術スタックに関するお問い合わせなど、お気軽にお送りください。<br />
              Pythonに関わらず、AWSやその他の技術に関するご質問も歓迎します。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="NAME"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-teal-500 transition"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-teal-500 transition"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <textarea
              placeholder="MESSAGE"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white h-40 outline-none focus:border-teal-500 transition"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
            <button className="w-full bg-teal-500 text-slate-900 py-4 rounded-xl font-black text-lg hover:bg-teal-400 transition transform active:scale-95 shadow-lg shadow-teal-500/20">
              SEND MESSAGE
            </button>
            {status && <p className="text-center mt-4 font-bold text-teal-400">{status}</p>}
          </form>
        </div>
      </Section>

      <footer className="py-12 text-center text-slate-500 text-sm">
        &copy; 2025 TSUYOSHI PORTFOLIO. ALL RIGHTS RESERVED.
      </footer>
    </div>
  )
}

export default App